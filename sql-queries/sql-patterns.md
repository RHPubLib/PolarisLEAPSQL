# Polaris SQL Patterns — Find Tool and SSMS Reference

This document contains canonical SQL patterns for Rochester Hills Public Library. Each section is one retrievable knowledge base chunk. Patterns marked **Find Tool / LEAP only** must be used for LEAP SQL Search queries. Patterns marked **SSMS only** are for SQL Server Management Studio and will not work in the Find Tool.

---

# Section A: Canonical Patterns (High Priority)

## Pattern: City filtering for patron records — Find Tool (LEAP) ONLY
**Applies to:** Find Tool / LEAP only — do NOT use this approach in SSMS  
**Tables:** PatronRegistration, ViewPatronRecords  
**IMPORTANT:** Addresses.MunicipalityName is NULL for all records in this database — never use it. PostalCodes.City is for SSMS queries only. For the Polaris Find Tool / LEAP, city filtering MUST use ViewPatronRecords.City. ViewPatronRecords.RecordID equals PatronRegistration.PatronID.

```sql
SELECT PatronRegistration.PatronID
FROM Polaris.Polaris.PatronRegistration WITH (NOLOCK)
INNER JOIN Polaris.Polaris.ViewPatronRecords WITH (NOLOCK)
    ON ViewPatronRecords.RecordID = PatronRegistration.PatronID
WHERE ViewPatronRecords.City = 'Rochester Hills'
```

---

## Pattern: RHPL service area patron search — Find Tool (LEAP) — city IN list
**Applies to:** Find Tool / LEAP only  
**Tables:** PatronRegistration, ViewPatronRecords  
**IMPORTANT:** RHPL serves Rochester Hills, Rochester, and Oakland Township. When a staff member asks for 'local patrons', 'service area', or any of these cities, use ViewPatronRecords.City IN (...). Never use MunicipalityName or PostalCodeID for this.

```sql
SELECT PatronRegistration.PatronID
FROM Polaris.Polaris.PatronRegistration WITH (NOLOCK)
INNER JOIN Polaris.Polaris.ViewPatronRecords WITH (NOLOCK)
    ON ViewPatronRecords.RecordID = PatronRegistration.PatronID
WHERE ViewPatronRecords.City IN ('Rochester Hills', 'Rochester', 'Oakland Township')
```

---

## Pattern: City filtering for patron records — SSMS only (NOT for Find Tool)
**Applies to:** SSMS / SQL Server Management Studio only — do NOT use in Find Tool / LEAP  
**Tables:** PatronRegistration, Patrons, PatronAddresses, Addresses, PostalCodes  
**IMPORTANT:** In SSMS, city is available via the PostalCodes table joined through Addresses. This approach does NOT work in the Find Tool because MunicipalityName is NULL and PostalCodes requires CTEs or temp tables. Use ViewPatronRecords for Find Tool.

```sql
SELECT DISTINCT PR.PatronID
FROM polaris.polaris.PatronRegistration AS PR WITH (nolock)
INNER JOIN polaris.polaris.Patrons AS P WITH (nolock) ON PR.PatronID = P.PatronID
INNER JOIN polaris.polaris.PatronAddresses AS PA WITH (nolock) ON PR.PatronID = PA.PatronID
INNER JOIN polaris.polaris.Addresses AS AD WITH (nolock) ON PA.AddressID = AD.AddressID
INNER JOIN polaris.polaris.PostalCodes AS PC WITH (nolock) ON AD.PostalCodeID = PC.PostalCodeID
WHERE PC.City = 'Rochester Hills'
```

---

## Pattern: Zip code lookup — PostalCodeID is a foreign key, never a zip string
**Applies to:** Both Find Tool and SSMS  
**Tables:** Addresses, PostalCodes  
**IMPORTANT:** Addresses.PostalCodeID is an INTEGER foreign key to the PostalCodes table — it is NOT the zip code string. Never write PostalCodeID = '48307' or PostalCodeID = 48307. To filter by zip in SSMS, join to PostalCodes and use PostalCodes.PostalCode. In Find Tool, use ViewPatronRecords.Zip instead.

```sql
-- SSMS: join through PostalCodes to get the actual zip string
-- PostalCodes.PostalCode contains the 5-digit zip (e.g. '48307')
-- WRONG:  WHERE Addresses.PostalCodeID = '48307'
-- CORRECT (SSMS): WHERE PC.PostalCode = '48307'
-- CORRECT (Find Tool): WHERE ViewPatronRecords.Zip = '48307'
```

---

# Section B: Auto-Extracted Patterns from SQL Corpus

## Pattern: Date range filtering — use DATEADD not DATEDIFF
**Applies to:** Both Find Tool and SSMS  
**Tables:** PatronRegistration, CircItemRecords  
**IMPORTANT:** To filter 'within the last N years/days', use ColumnDate >= DATEADD(year, -N, GETDATE()). Do NOT use DATEDIFF(year, Column, GETDATE()) < N — it counts year boundaries and silently misses valid records.
**Source:** Annual Reports/Year End Thank You.sql  

```sql
select P.PatronID as PatronID, P.Barcode as Barcode, PR.NameFirst as FirstName, PR.NameLast as LastName, PR.EmailAddress as EmailAddress, P.YTDCircCount as YTDCircCount, P.YTDYouSavedAmount as SavedAmount
from polaris.polaris.PatronRegistration as PR with (nolock)
join polaris.polaris.Patrons as P with (nolock) on PR.PatronID = P.PatronID
where P.LastActivityDate > dateadd(year, -1, getdate()) -- Only people with status update over the last year
and (pr.Birthdate IS NULL OR pr.Birthdate < DATEADD(year,-13,GETDATE())) --Limit by Age
and P.PatronCodeID in (1,3,6,8,24) -- Resident, Business, HomeDelivery, CollegeStudent, OTBS
```

---

## Pattern: Active cardholder patron filter — expiration date and patron code exclusions
**Applies to:** Both Find Tool and SSMS  
**Tables:** PatronRegistration, Patrons  
**IMPORTANT:** Active patron queries typically filter: ExpirationDate > DATEADD(year, -3, GETDATE()), exclude guest accounts (NameFirst NOT LIKE '%guest%'), and exclude non-resident/MILibrary/ILL codes (PatronCodeID NOT IN (2, 4, 25)).
**Source:** CyberpunkLibrarian/Patrons/Patrons Served By Age.sql  

```sql
/* This query pulls counts for current-ish patron accounts that are unexpired or expired within the last three
years, with the output delivering age groups. While you'll likely need to define your age groups differently,
this could serve as a template for a similar query, or as a basis for another query by age groups. */

-- Creatre a table to hold the totals
CREATE TABLE #TempPatronsServedAge (
    Age0to10 INT,
    Age11to18 INT,
    Age19to65 INT,
    Age65 INT,
    Total INT
);

-- Populate that table
INSERT INTO #TempPatronsServedAge

SELECT
    COUNT(CASE WHEN pr.Birthdate BETWEEN '20131020' AND '20231020' THEN 1 END),
    COUNT(CASE WHEN pr.Birthdate BETWEEN '20051020' AND '20131019' THEN 1 END),
    COUNT(CASE WHEN pr.Birthdate BETWEEN '19581020' AND '20051019' THEN 1 END),
    COUNT(CASE WHEN pr.Birthdate BETWEEN '19131020' AND '19581019' THEN 1 END),
    0
FROM
    Polaris.Polaris.PatronRegistration pr WITH (NOLOCK)
INNER JOIN
    Polaris.Polaris.Patrons p WITH (NOLOCK)
    ON (p.PatronID = pr.PatronID)
INNER JOIN
    Polaris.Polaris.Organizations o WITH (NOLOCK)
    ON (o.OrganizationID = p.OrganizationID)
WHERE -- Adjust expiration dates as needed
    ((pr.ExpirationDate >= DATEADD(year,-3,GETDATE())) OR (pr.ExpirationDate is NULL))
AND -- Record status is Final
    p.RecordStatusID = 1
AND -- Limit organizations if you like
    p.OrganizationID IN (
        SELECT OrganizationID
        FROM Polaris.Polaris.Organizations WITH (NOLOCK)
        WHERE ParentOrganizationID = 9
    );

-- Update our table to clear the 0 totals (as needed) and replace with real data
UPDATE #TempPatronsServedAge
SET Total = (SELECT SUM(Age0to10 + Age11to18 + Age19to65 + Age65) FROM #TempPatronsServedAge);

-- Final delivery
SELECT
    FORMAT(Age0to10, '#,0') AS [Age 0 - 10],
    FORMAT(Age11to18, '#,0') AS [Age 11 - 18],
    FORMAT(Age19to65, '#,0') AS [Age 19 - 65],
    FORMAT(Age65, '#,0') AS [Age 65+],
    FORMAT(Total, '#,0') AS [Total]
FROM
    #TempPatronsServedAge;

-- Tidy up
DROP TABLE #TempPatronsServedAge
```

---

## Pattern: Item status filtering — ItemStatusID values
**Applies to:** Both Find Tool and SSMS  
**Tables:** CircItemRecords  
**IMPORTANT:** ItemStatusID is compared as a string literal in Find Tool: ItemStatusID = '2'. Key values: 1=In, 2=Out, 7=Lost, 10=Missing, 11=Withdrawn, 13=On-Order. See full list in the system prompt RHPL LOOKUP VALUES section.
**Source:** Old Custom Reports/noncirc serials with status of checked out.sql  

```sql
select * from circitemrecords CIR (nolock)
where CIR.materialtypeid=9
and CIR.noncirculating=1
and CIR.itemstatusid=2
```

---
