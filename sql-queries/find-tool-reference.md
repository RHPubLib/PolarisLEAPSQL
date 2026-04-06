# Polaris Find Tool SQL — Confirmed Working Patterns

This document captures confirmed-working syntax for the Polaris LEAP / Staff Client Find Tool SQL Search interface at Rochester Hills Public Library (Polaris 8.0).

---

## Critical Rules (confirmed by testing)

### SELECT only the primary key — nothing else
The Find Tool does NOT display a data grid from your SELECT list. It takes the returned IDs and displays the full records in the standard Polaris result list (with Title, Barcode, Status, Branch, etc. shown automatically). Selecting extra columns causes a syntax error.

- Item searches: `SELECT ItemRecordID FROM ...`
- Patron searches: `SELECT PatronID FROM ...`
- Bib searches: `SELECT BibliographicRecordID FROM ...`

### Always use full table prefixes
`Polaris.Polaris.TableName` — required, not optional.

### Always add WITH (NOLOCK) on every table
The Find Tool runs against a live production database. NOLOCK prevents blocking.

### ID comparisons require string literals
`ItemStatusID = '12'` — **not** `ItemStatusID = 12`
This applies to all numeric ID fields: ItemStatusID, AssignedBranchID, PatronCodeID, MaterialTypeID, AssignedCollectionID, etc.

### Never end with a semicolon
The Find Tool SQL parser rejects queries ending in `;`

### Comments must come after the full SQL statement
Inline comments (`-- note`) on query lines break the query. If you want to add explanatory notes, place them on their own lines **after** the final clause:
```sql
SELECT ItemRecordID
FROM Polaris.Polaris.CircItemRecords WITH (NOLOCK)
WHERE ItemStatusID = '12'
-- Returns all weeded items. Change '12' to '11' for Withdrawn.
```

---

## Confirmed Working Examples

### Items by status
```sql
SELECT ItemRecordID
FROM Polaris.Polaris.CircItemRecords WITH (NOLOCK)
WHERE ItemStatusID = '12'
```
*Returns all weeded items (status 12). Change to '11' for Withdrawn, '7' for Lost, '10' for Missing, etc.*

### Items by branch and status
```sql
SELECT ItemRecordID
FROM Polaris.Polaris.CircItemRecords AS CIR WITH (NOLOCK)
WHERE CIR.AssignedBranchID IN ('3','4')
AND CIR.ItemStatusID = '21'
```
*Items at Main Library (3) and Bookmobile (4) with a specific status.*

### On-order items with active holds (multi-table join with view)
```sql
SELECT DISTINCT CIR.ItemRecordID
FROM Polaris.Polaris.RWRITER_BibDerivedDataView BDV WITH (NOLOCK)
JOIN Polaris.Polaris.BibliographicRecords BR WITH (NOLOCK) ON (BR.BibliographicRecordID = BDV.BibliographicRecordID)
JOIN Polaris.Polaris.CircItemRecords CIR WITH (NOLOCK) ON (CIR.AssociatedBibRecordID = BR.BibliographicRecordID)
WHERE BDV.NumberActiveHolds >= 1
AND CIR.ItemStatusID = '13'
AND CIR.AssignedCollectionID IN ('1','2','3','4','5','6','9','10','11','15','17','18','19','20','30','31','33','34','71','76','77','114','115','116','125')
```
*On-order items that have at least one active hold, filtered to specific collections.*

### Items by age (using getdate)
```sql
SELECT CIR.ItemRecordID
FROM Polaris.Polaris.CircItemRecords CIR WITH (NOLOCK)
JOIN Polaris.Polaris.ItemRecordDetails IRD WITH (NOLOCK) ON (IRD.ItemRecordID = CIR.ItemRecordID)
WHERE CIR.ItemStatusID = '13'
AND (IRD.CreationDate < getdate()-183 OR IRD.ImportedDate < getdate()-183 OR IRD.ModificationDate < getdate()-183)
AND CIR.RecordStatusID = '1'
```
*On-order items (status 13) not updated in 6+ months — useful for stale on-order cleanup.*

---

## Common Item Status Values (use as string literals)
'1'=In, '2'=Out, '3'=Out-ILL, '4'=Held, '5'=Transferred, '6'=In-Transit,
'7'=Lost, '8'=Claimed Returned, '9'=Claim Never Had, '10'=Missing,
'11'=Withdrawn, '12'=Weeded, '13'=On-Order, '14'=Repair, '15'=In-Process,
'16'=Unavailable, '19'=Shelving cart, '20'=Non-circulating, '23'=Damaged

## Common Branch IDs (use as string literals in IN clauses)
'3'=Main Library, '4'=Bookmobile, '5'=Drive-Up Window, '6'=Kids' Bus,
'8'=Avon on the Lake, '9'=Avon Tower, '10'=OPC, '11'=Danish Village,
'12'=Bellbrook, '13'=Waltonwood

## Supported SQL Features
- JOINs (INNER JOIN, JOIN with ON clause)
- Views (e.g., RWRITER_BibDerivedDataView)
- IN (...), BETWEEN, LIKE, AND, OR, NOT
- DISTINCT, ORDER BY, TOP
- getdate(), DATEADD(), DATEDIFF()
- Table aliases (AS or without AS)

## Not Supported
- Semicolon at end of query
- Temp tables (#temp)
- CTEs (WITH name AS (...))
- EXEC / stored procedures
- Multiple statements
- INSERT, UPDATE, DELETE, DROP (safety — admin use only via SSMS)
