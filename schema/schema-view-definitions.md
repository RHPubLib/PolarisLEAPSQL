# Polaris View Definitions — How Key Views Are Built

This document contains the actual SQL definitions of Polaris views used in RHPL queries.
Understanding how these views are built prevents wrong assumptions about where data comes from.

---

## View: Polaris.Polaris.ViewPatronRecords

**Full name:** Polaris.Polaris.ViewPatronRecords
**Purpose:** Provides a flat patron record combining Patrons, PatronRegistration, and address data.
**Key join:** RecordID = Patrons.PatronID = PatronRegistration.PatronID

**CRITICAL — How City, State, and Zip are derived:**
- City, State, and Zip come from **PostalCodes.City / PostalCodes.State / PostalCodes.PostalCode**
- The join chain is: PatronAddresses → Addresses → PostalCodes (on PostalCodeID)
- `Addresses.MunicipalityName` is NOT used — it is NULL for all records
- The view picks **TOP 1 address with no ORDER BY** — for patrons with multiple addresses, the selected address is arbitrary
- This means ViewPatronRecords.City reflects whatever address Polaris happens to pick first

**Columns and their sources:**

| Column | Source | Notes |
|--------|--------|-------|
| RecordID | Patrons.PatronID | Join to PatronRegistration and Patrons on this field |
| Barcode | Patrons.Barcode | |
| PatronName | PatronRegistration.PatronFullName + NameSuffix | COALESCE — empty string if NULL |
| Street | Addresses.StreetOne + StreetTwo + StreetThree | Concatenated, no city/zip |
| City | PostalCodes.City | Via PatronAddresses → Addresses → PostalCodes |
| State | PostalCodes.State | Via PatronAddresses → Addresses → PostalCodes |
| Zip | PostalCodes.PostalCode + Addresses.ZipPlusFour | Formatted with dash (US) or space (Canada) |
| Library | Organizations.Name | Joined on Patrons.OrganizationID |
| RecordStatusID | Patrons.RecordStatusID | |
| RecordStatusDate | Patrons.RecordStatusDate | |

**Full view definition:**

```sql
CREATE VIEW Polaris.ViewPatronRecords AS
SELECT
  p.PatronID AS RecordID,
  p.Barcode,
  COALESCE(pr.PatronFullName, N'')
    + CASE WHEN pr.NameSuffix IS NOT NULL THEN N', ' + COALESCE(pr.NameSuffix, N'') ELSE N'' END
    AS PatronName,
  (
    SELECT TOP 1
      COALESCE(a.StreetOne, N'') + N' ' + COALESCE(a.StreetTwo, N'') + N' ' + COALESCE(a.StreetThree, N'')
    FROM Polaris.PatronAddresses AS pa (NOLOCK)
    INNER JOIN Polaris.Addresses AS a (NOLOCK) ON a.AddressID = pa.AddressID
    WHERE pa.PatronID = p.PatronID
  ) AS Street,
  (
    SELECT TOP 1 pc.City
    FROM Polaris.PatronAddresses AS pa (NOLOCK)
    INNER JOIN Polaris.Addresses AS a (NOLOCK) ON a.AddressID = pa.AddressID
    INNER JOIN Polaris.PostalCodes AS pc (NOLOCK) ON pc.PostalCodeID = a.PostalCodeID
    WHERE pa.PatronID = p.PatronID
  ) AS City,
  (
    SELECT TOP 1 pc.State
    FROM Polaris.PatronAddresses AS pa (NOLOCK)
    INNER JOIN Polaris.Addresses AS a (NOLOCK) ON a.AddressID = pa.AddressID
    INNER JOIN Polaris.PostalCodes AS pc (NOLOCK) ON pc.PostalCodeID = a.PostalCodeID
    WHERE pa.PatronID = p.PatronID
  ) AS State,
  (
    SELECT TOP 1
      CASE
        WHEN a.ZipPlusFour IS NULL THEN pc.PostalCode
        WHEN pc.CountryID = 1 THEN pc.PostalCode + N'-' + a.ZipPlusFour
        WHEN pc.CountryID = 2 THEN pc.PostalCode + N' ' + a.ZipPlusFour
        ELSE pc.PostalCode
      END
    FROM Polaris.PatronAddresses AS pa (NOLOCK)
    INNER JOIN Polaris.Addresses AS a (NOLOCK) ON a.AddressID = pa.AddressID
    INNER JOIN Polaris.PostalCodes AS pc (NOLOCK) ON pc.PostalCodeID = a.PostalCodeID
    WHERE pa.PatronID = p.PatronID
  ) AS Zip,
  o.Name AS Library,
  p.RecordStatusID,
  p.RecordStatusDate
FROM Polaris.Patrons AS p WITH (NOLOCK)
INNER JOIN Polaris.PatronRegistration AS pr WITH (NOLOCK) ON pr.PatronID = p.PatronID
INNER JOIN Polaris.Organizations AS o WITH (NOLOCK) ON o.OrganizationID = p.OrganizationID
```

**Why this matters for query generation:**
- For Find Tool city filtering: use `ViewPatronRecords.City = 'Rochester Hills'` — this works because it ultimately reads from PostalCodes.City which IS populated
- For SSMS queries needing city: you can join through PostalCodes directly (same data source as the view)
- Do NOT use `Addresses.MunicipalityName` — the view itself does not use this field because it is NULL

---
