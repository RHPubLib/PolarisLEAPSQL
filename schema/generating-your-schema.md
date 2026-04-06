# Generating Your Own CREATE TABLE Schema Reference

The AI model needs a CREATE TABLE reference built from **your** live Polaris database —
not RHPL's. Even though Polaris schemas are largely standardized, column additions,
customizations, and version differences mean your database is the authoritative source.

The CREATE TABLE block is what gets injected into the model's system prompt as the
"SCHEMA — AUTHORITATIVE COLUMN REFERENCE" section. The model is instructed to only
use columns that appear in these definitions, which is what prevents it from hallucinating
column names that don't exist.

---

## The Query

Run this in SSMS against your Polaris SQL Server. It generates compact inline CREATE TABLE
statements for every table in the `Polaris` schema — the format the AI model expects:

```sql
SELECT
    'CREATE TABLE Polaris.Polaris.' + t.TABLE_NAME + ' ( ' +
    STRING_AGG(
        c.COLUMN_NAME + ' ' +
        c.DATA_TYPE +
        CASE
            WHEN c.DATA_TYPE IN ('nvarchar','varchar','char','nchar')
                THEN '(' + CASE WHEN c.CHARACTER_MAXIMUM_LENGTH = -1
                                THEN 'MAX'
                                ELSE CAST(c.CHARACTER_MAXIMUM_LENGTH AS VARCHAR)
                           END + ')'
            WHEN c.DATA_TYPE IN ('decimal','numeric')
                THEN '(' + CAST(c.NUMERIC_PRECISION AS VARCHAR) + ',' +
                           CAST(c.NUMERIC_SCALE AS VARCHAR) + ')'
            ELSE ''
        END +
        CASE WHEN c.IS_NULLABLE = 'NO' THEN ' NOT NULL' ELSE ' NULL' END,
        ', '
    ) WITHIN GROUP (ORDER BY c.ORDINAL_POSITION) +
    ' );'
FROM INFORMATION_SCHEMA.TABLES t
JOIN INFORMATION_SCHEMA.COLUMNS c
    ON t.TABLE_NAME = c.TABLE_NAME AND t.TABLE_SCHEMA = c.TABLE_SCHEMA
WHERE t.TABLE_SCHEMA = 'Polaris'
  AND t.TABLE_TYPE = 'BASE TABLE'
GROUP BY t.TABLE_NAME
ORDER BY t.TABLE_NAME;
```

Export the results to a text file (Results to Text in SSMS, or copy/paste into a `.md` file).

---

## Example Output

A single table looks like this:

```
CREATE TABLE Polaris.Polaris.PatronRegistration ( PatronID int NOT NULL, LanguageID smallint NULL, NameFirst nvarchar(32) NULL, NameLast nvarchar(100) NULL, NameMiddle nvarchar(32) NULL, NameTitle nvarchar(8) NULL, NameSuffix nvarchar(4) NULL, PhoneVoice1 nvarchar(20) NULL, PhoneVoice2 nvarchar(20) NULL, EmailAddress nvarchar(64) NULL, EntryDate datetime NULL, ExpirationDate datetime NULL, Birthdate datetime NULL, RegistrationDate datetime NULL, PatronFullName nvarchar(100) NOT NULL, PatronFirstLastName nvarchar(100) NOT NULL, RecordStatusID int NOT NULL, Barcode nvarchar(20) NULL );
```

Each table is one line. The model reads these to know exactly which columns exist and their types.

---

## Recommended Scope

You don't need every one of the 1,453 Polaris tables. Focus on the tables your staff
actually query. A good starting set:

- `PatronRegistration`, `Patrons`, `PatronAddresses`, `PatronNotes`, `PatronCirculationBlocks`
- `CircItemRecords`, `ItemRecords`, `ItemCheckouts`, `ItemRecordHistory`
- `BibliographicRecords`, `BibliographicTags`, `BibliographicDetails`
- `HoldRequests`, `HoldRequestStatuses`
- `TransactionHeader`, `TransactionDetail`
- `PatronAccount`, `PatronAccountTransactions`
- `Organizations`, `PolarisUsers`, `PatronCodes`, `ItemStatuses`, `MaterialTypes`
- Views: `ViewPatronRecords`, `ViewCircItemRecords`, `ViewBibliographicRecords`

To limit the query to specific tables, add to the WHERE clause:

```sql
AND t.TABLE_NAME IN (
    'PatronRegistration', 'Patrons', 'CircItemRecords',
    'BibliographicRecords', 'HoldRequests'
    -- add more as needed
)
```

---

## Loading into Open WebUI

Once you have your CREATE TABLE output file:

1. Save it as `schema-create-tables.md` (or split by functional area)
2. In Open WebUI → **Workspace → Knowledge** → open your schema knowledge base
3. Upload the file alongside `polaris_core_tables.md` and `schema-lookup-values.md`
4. In your model's system prompt, add a section like:

```
**SCHEMA — AUTHORITATIVE COLUMN REFERENCE:**
Only use columns from the CREATE TABLE definitions in your knowledge base.
Never invent or guess column names.
```

The model will reference the uploaded file when generating SQL, keeping column names accurate.
