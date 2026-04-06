# Polaris 7.8 — Core Tables Quick Reference

> Focused schema for the tables most commonly used in patron, circulation,  
> item, holds, and system queries at RHPL.  
> See `polaris_schema_full.md` for all 1,453 tables.

---

## Patrons

> This table stores the basic information of patron records

| Column | Type | Description |
|--------|------|-------------|
| `PatronID` | `int` | ID of patron, internally used, is the primary key. |
| `PatronCodeID` | `int` | ID of patron category, references Polaris.PatronCodes (PatronCodeID). |
| `OrganizationID` | `int` | ID of branch the patron registered at, references Polaris.Organizations (OrganizationID). |
| `CreatorID` | `int` | ID of Polaris user who created the patron, references Polaris..PolarisUsers (PolarisUserID). |
| `ModifierID` | `int` | ID of Polaris user who modified the patron registration, references Polaris..PolarisUsers (PolarisUserID). |
| `Barcode` | `nvarchar(20)` | ID of patrons for circulation or patron service. |
| `SystemBlocks` | `int` | Will contain encoded data which will be retrieved on the bitwise level. |
| `YTDCircCount` | `int` | The circulation count for the current year |
| `LifetimeCircCount` | `int` | The lifetime circulation total |
| `LastActivityDate` | `datetime` | Date of last circulation activity. |
| `ClaimCount` | `int` | Overall number of claims the patron has made. |
| `LostItemCount` | `int` | Number of lost item the patron has declared, reduced if the lost item found. |
| `ChargesAmount` | `money` | Total charges on patron's account. |
| `CreditsAmount` | `money` | Total credits on patron's account. gets updated via a trigger on PatronAccounts table. |
| `RecordStatusID` | `int` | For future use. |
| `RecordStatusDate` | `datetime` | For future use. |
| `YTDYouSavedAmount` | `money` | The amount saved for the current year |
| `LifetimeYouSavedAmount` | `money` | The lifetime amount saved. |

**Related tables:** CancelledHeldItemRecords, ChangeAddress, ChangeBasicInfo, CircItemRecords, CollectionAgencyIncludePatrons, CourseInstructorLinks, DML_Patron, ILLRequests, ILSStoreOrders, InnReachRequests, ItemCheckouts, ItemRecordHistory, MailingLabelRecordSets, ORSPatronDisabilities, ORSPatronEquipment, ORSPatrons, ORSPatronSelectionLists, PAC_PatronFreeTextMessages, PAC_PatronMessages, PAC_PatronPasswordResetRequests, PAPIPatronAuthentication, PAPIPatronAuthenticationFailures, PatronAccount, PatronAddresses, PatronAssociations, PatronClaims, PatronCustomDataBoolean, PatronCustomDataDates, PatronCustomDataIntegers, PatronCustomDataStrings, PatronFineNotices, PatronFreeTextBlocks, PatronLostItems, PatronNotes, PatronReadingHistory, PatronRecordSets, PatronRegistration, PatronsPPPP, PatronStops, PatronSystemNotes, PrevYearPatronsCirc, RouteListMembers, SDIHeader, SysHoldRequests, TitleRatings, WaiverRequests

---

## PatronRegistration

> This table stores personal information of patron records, and library specified information for the patron records.

| Column | Type | Description |
|--------|------|-------------|
| `PatronID` | `int` | ID of patron record, internally used, primary key, relationship referencing Polaris.Patrons (PatronID) |
| `LanguageID` | `smallint` | ID of patron's language, references Polaris.Languages (LanguageID) |
| `NameFirst` | `nvarchar(32)` | Patron's first name. |
| `NameLast` | `nvarchar(100)` | Patron's last name. |
| `NameMiddle` | `nvarchar(32)` | Patron's middle name. |
| `NameTitle` | `nvarchar(8)` | Patron's title. |
| `NameSuffix` | `nvarchar(4)` | Patron's name suffix. |
| `PhoneVoice1` | `nvarchar(20)` | Patron's first phone number. |
| `PhoneVoice2` | `nvarchar(20)` | Patron's second phone number. |
| `PhoneVoice3` | `nvarchar(20)` | Patron's third phone number |
| `EmailAddress` | `nvarchar(64)` | is the patron's email address |
| `EntryDate` | `datetime` | is the date when the record is inserted. |
| `ExpirationDate` | `datetime` | is the date when the patron's registration expires. |
| `AddrCheckDate` | `datetime` | Date to check patron address |
| `UpdateDate` | `datetime` | Date when the patron registration is modified. |
| `User1` | `nvarchar(64)` | User defined field one. |
| `User2` | `nvarchar(64)` | User defined field two. |
| `User3` | `nvarchar(64)` | User defined field three. |
| `User4` | `nvarchar(64)` | User defined field four. |
| `User5` | `nvarchar(64)` | User defined field five. |
| `Birthdate` | `datetime` | is patron's birth date |
| `RegistrationDate` | `datetime` | Date when the patron gets registered. |
| `FormerID` | `nvarchar(20)` | is the patron's former barcode if any. |
| `ReadingList` | `tinyint` | Denotes whether Polaris will track the items that the patron checks out. |
| `PhoneFAX` | `nvarchar(20)` | Patron's fax number. |
| `DeliveryOptionID` | `int` | ID of notification option, references, Polaris.DeliveryOptions (DeliveryOptionID) |
| `StatisticalClassID` | `int` | Foreign key into Polaris..PatronStatClassCodes, representing a patron's statistical class |
| `CollectionExempt` | `bit` | Denotes if the patron is to be excluded from collection reports. |
| `AltEmailAddress` | `nvarchar(64)` | Secondary patron email address |
| `ExcludeFromOverdues` | `bit` | Denotes if the patron is to be excluded from overdue notices. |
| `SDIEmailAddress` | `nvarchar(150)` | Default Email address to be used for SDI notification |
| `SDIEmailFormatID` | `int` | Default Email format to be used for SDI notification. |
| `SDIPositiveAssent` | `bit` | Indicates that the patron has given permission for the SDI system to record information about their searches. |
| `SDIPositiveAssentDate` | `datetime` | Date that assent was changed. |
| `DeletionExempt` | `bit` | Denotes if the patron is to be excluded from deletion - if this is set, then the patron cannot be deleted. |
| `PatronFullName` | `nvarchar(100)` | The Patron's full name, last name first. This field is maintained via table triggers as the Concatenation of NameLast + ", " + NameFirst + " " + NameMiddle. |
| `ExcludeFromHolds` | `bit` | Indicates whether the patron is to be excluded from hold request notices. |
| `ExcludeFromBills` | `bit` | Indicates whether the patron is to be excluded from billing notices. |
| `EmailFormatID` | `int` | Is a code which has the patron's default email type, either plain text or html. |
| `PatronFirstLastName` | `nvarchar(100)` | The Patron's full name, first name first. This field is maintained via table triggers as the Concatenation of NameFirst + " " + NameLast + ", " + NameMiddle. |
| `Username` | `nvarchar(50)` | The patron's personally defined username established via the PAC. |
| `MergeDate` | `datetime` | Date this patron was merged with another |
| `MergeUserID` | `int` | Polaris user who did the merge |
| `MergeBarcode` | `nvarchar(20)` | The barcode of the secondary patron which was merged. |
| `EnableSMS` | `bit` | Indicates whether or not an additional TXT message notice will be sent along with a primary notice. |
| `RequestPickupBranchID` | `int` | Patron's default pickup branch for PAC requests |
| `Phone1CarrierID` | `int` | ID of PhoneVoice1 carrier. References to Polaris.SA_MobilePhoneCarriers(CarrierID). |
| `Phone2CarrierID` | `int` | ID of PhoneVoice2 carrier. References to Polaris.SA_MobilePhoneCarriers(CarrierID). |
| `Phone3CarrierID` | `int` | ID of PhoneVoice3 carrier. References to Polaris.SA_MobilePhoneCarriers(CarrierID). |
| `eReceiptOptionID` | `int` | ID of eReceipt option. References to Polaris.DeliveryOptions(DeliveryOptionID). |
| `TxtPhoneNumber` | `tinyint` | Indicates which phone number is used for TXT/SMS notification and/or eReceipt. The valid value of this column is 1, 2 or 3 which represents PhoneVoice1, PhoneVoice2 or PhoneVoice3 accordingly. |
| `ExcludeFromAlmostOverdueAutoRenew` | `bit` | Indicates whether the patron is to be excluded from receiving reminder notices for Almost Overdue/Auto Renew. |
| `ExcludeFromPatronRecExpiration` | `bit` | Indicates whether the patron is to be excluded from receiving reminder notices for Patron record expiration. |
| `ExcludeFromInactivePatron` | `bit` | Indicates whether the patron is to be excluded from receiving reminder notices for Inactive Patron. |
| `DoNotShowEReceiptPrompt` | `bit` | Bit field to determine if we display the prompt for EReceipts. |
| `PasswordHash` | `nvarchar(256)` | BCrypt password hash. |
| `ObfuscatedPassword` | `nvarchar(256)` | Obfuscated password. |
| `NameTitleID` | `int` | Unique identifier from the NameTitles table |
| `RBdigitalPatronID` | `int` | RBdigital Patron ID |
| `GenderID` | `int` | Unique identifier from the Genders table |
| `LegalNameFirst` | `nvarchar(32)` | First name on legal identification |
| `LegalNameLast` | `nvarchar(32)` | Last name on legal identification |
| `LegalNameMiddle` | `nvarchar(32)` | Middle name on legal identification |
| `LegalFullName` | `nvarchar(100)` | Calculated field concatenating LegalNameFirst, LegalNameMiddle, and LegalNameLast |
| `UseLegalNameOnNotices` | `bit` | Flag to signify that the legal name data should be used on print and phone notices |
| `EnablePush` | `bit` | Indicates whether or not an additional Push notice will be sent along with a primary notice |
| `StaffAcceptedUseSingleName` | `bit` | Staff Accepted Use Single Name Field during Patron Registration |
| `ExtendedLoanPeriods` | `bit` | Patron has extended loan periods |
| `IncreasedCheckOutLimits` | `bit` | Patron has increased check out limits |
| `PreferredPickupAreaID` | `int` | Patron preferred hold pickup area |

---

## PatronAddresses

> Lists addresses which correspond to patrons, because patrons can have numerous addresses.

| Column | Type | Description |
|--------|------|-------------|
| `PatronID` | `int` | Link to Patrons table |
| `AddressID` | `int` | Link to addresses table (contains actual address) |
| `AddressTypeID` | `int` | Link to address types |
| `Verified` | `bit` | indicates whether the address is verified by a third-party web service. |
| `VerificationDate` | `datetime` | the date when patron address is verified by a third-party web service. |
| `PolarisUserID` | `int` | The polaris user ID who sends the address to a third-party web service for verification. |
| `AddressLabelID` | `int` | Foreign key into Polaris..AddressLabels, representing a patron's address label |

---

## PatronCodes

> This table stores patron codes and descriptions.

| Column | Type | Description |
|--------|------|-------------|
| `PatronCodeID` | `int` | ID of patron code, primary key. |
| `Description` | `nvarchar(80)` | Description of patron codes. |

**Related tables:** BulkWaiveCriteria_PatronCodes, CollectionAgencyExcludePatronCodes, EOTDueDateExclude, ExpressCheckPatCodePBlocks, Fines, InnReachMapPatronCodeToPTypes, InnReachMapPTypeToPatronCodes, LoanLimits, LoanPeriods, MaterialLoanLimits, MRMS_ResourceAuthenticationPatronCode, PatRenewalPatCodePBlocks, PatronCodeLists, PatronCodes_NCIPPrivs, PatronLoanLimits, Patrons, SA_AutoChangePatronCodeControl, SA_BorrowByMail_PatronCodesPermitted, SA_ChargeForCheckOut_PatronCodes, SA_MaterialTypeGroups_Limits, SA_PatronCodesFilterByRegisteredBranch, SA_PatronRegistrationCharges

---

## PatronNotes

> Table holds the patron note fields, which used to be part of the PatronRegistration table.

| Column | Type | Description |
|--------|------|-------------|
| `PatronID` | `int` | Patron record ID |
| `NonBlockingStatusNotes` | `nvarchar(4000)` | Notes which do not cause a block for the patron |
| `BlockingStatusNotes` | `nvarchar(4000)` | Notes that cause a block when trying to do a checkout |
| `NonBlockingStatusNoteDate` | `datetime` | Date of non-blocking note |
| `BlockingStatusNoteDate` | `datetime` | Date of blocking note |
| `NonBlockingBranchID` | `int` | Organization who last modified note |
| `NonBlockingUserID` | `int` | User who last modified note |
| `NonBlockingWorkstationID` | `int` | Workstation who last modified note |
| `BlockingBranchID` | `int` | Organization who last modified note |
| `BlockingUserID` | `int` | User who last modified note |
| `BlockingWorkstationID` | `int` | Workstation who last modified note |

---

## PatronSystemNotes

> Contains a list of system notes and their linked patrons.

| Column | Type | Description |
|--------|------|-------------|
| `PatronSystemNoteID` | `int` | patron system notes identifier. |
| `PatronID` | `int` | Patron identifier. |
| `CreationDate` | `datetime` | Created timestamp. |
| `Note` | `nvarchar(-1)` | Text field to store the note |

---

## PatronFreeTextBlocks

> This table stores the free text blocks a patron has.

| Column | Type | Description |
|--------|------|-------------|
| `PatronID` | `int` | ID of patron who has the block. It references Patrons table (PatronID). |
| `FreeTextBlock` | `nvarchar(255)` | User entered text of the block. |
| `FreeTextBlockID` | `int` | ID of the free text block, a primary key. |
| `CreationDate` | `datetime` | Date of block |
| `CreatorID` | `int` | creator |
| `ModifierID` | `int` | modifier |
| `ModificationDate` | `datetime` | modification date |
| `OrganizationID` | `int` | Organization who created block |
| `WorkstationID` | `int` | Workstation who created block |

---

## PatronStops

> This table stores patrons who have the library defined blocks.

| Column | Type | Description |
|--------|------|-------------|
| `PatronID` | `int` | ID of patron who has block(s), combined primary key, references Patrons table (PatronID). |
| `PatronStopID` | `int` | ID of patron block defined by library, combined primary key, references PatronStopDescriptions table (PatronStopID). |
| `CreationDate` | `datetime` | Date of stop |
| `CreatorID` | `int` | Creator of block |
| `ModifierID` | `int` | modifier of block |
| `ModificationDate` | `datetime` | modification date |
| `OrganizationID` | `int` | organization who created block |
| `WorkstationID` | `int` | workstation who created block |

---

## PatronAccount

> Main table of patron accounting that stores every money based transaction for patrons.

| Column | Type | Description |
|--------|------|-------------|
| `TxnID` | `int` | ID of the transaction, primary key, unique identifier (IDENTITY). |
| `PatronID` | `int` | ID of the patron associated with this transaction. It references Patrons table (PatronID). |
| `TxnCodeID` | `int` | ID of the transaction code that distinguishes the nature of different transactions such as Charge, Pay etc. It references PatronAccTxnCodes table (TxnCodeID). |
| `FeeReasonCodeID` | `int` | ID of the reason for this transaction, will be null if no reason. It references FeeReasonCodes table (FeeReasonCodeID). |
| `TxnAmount` | `money` | Amount of this transaction. |
| `OutstandingAmount` | `money` | Outstanding amount that this transaction is having. |
| `ItemRecordID` | `int` | ID of the item associated with this transaction, will be null if no such association. |
| `TxnDate` | `datetime` | Date of the transaction created. |
| `PaymentMethodID` | `int` | ID of the payment method associated with this transaction if any, otherwise will be null. It references PatronPaymentMethods table (PaymentMethodID). |
| `OrganizationID` | `int` | OrganizationID of the governing branch for fine calculations as defined in Systems Administration. Could be Item's Assigned Branch, Patron's Branch or the transacting library's branch. |
| `WorkStationID` | `int` | ID of the computer that the user uses to create this transation. It references Workstations table (WorkstationID). |
| `CreatorID` | `int` | ID of the user who loggs on to Polaris and creates this transaction. It references PolarisUsers table (PolarisUserID) |
| `CheckOutDate` | `datetime` | Check out date of the item associated with this transaction, will be null if no such association. |
| `DueDate` | `datetime` | Due date of the item circulated and associated with this transaction, will be null if no such association. |
| `FreeTextNote` | `nvarchar(255)` | Note of this transaction if any, otherwise will be null. |
| `ILSStoreTransactionID` | `int` | Links to ILSStoreTransactions table. ID of associated credit card transaction. Null if credit card was not used to pay for the fine/fee. |
| `LoaningOrgID` | `int` | Organization ID of item's lending branch. This is usually valid for overdue item related charges. |
| `ItemAssignedBranchID` | `int` | The associated item record's Assigned Branch at the time of the transaction. |
| `PatronBranchID` | `int` | The Patron's registration branch ID at the time of the transaction. |
| `LoanUnit` | `int` | Loan unit of the item when fine is calculated. |
| `FineFreeUnits` | `int` | Number of units that is deducted when fine is calculated. |
| `FineDeducted` | `money` | Amount of the fine that is deducted due to not finable units. |
| `FineIsCapped` | `bit` | Indicates whether or not the fine amount is capped due to maximum fine limit. |
| `BillingStatusID` | `int` | ID of the billing status. It references PatronAcctBillingStatus table (BillingStatusID). |
| `BaseAmount` | `money` | Amount without tax |
| `TaxRateID` | `int` | ID of the associated tax rate, references Polaris.TaxRates (TaxRateID) |
| `AppliedTaxRate` | `decimal` | Tax rate applied to the charge |
| `AppliedTaxAmount` | `money` | Tax amount applied to the charge |
| `AppliedTaxRateDescription` | `nvarchar(80)` | Description of the applied tax rate |

**Related tables:** BulkWaiveJobsHistory, ItemRecordNotifications, PatronAccountAssoc, WaiverRequestsMapping

---

## PatronClaims

> Table to store basic information of the items claimed by patrons

| Column | Type | Description |
|--------|------|-------------|
| `ClaimID` | `int` | Identity of the table. |
| `PatronID` | `int` | ID of the patron who claimed for the item. It references Patrons table (PatronID). |
| `ItemRecordID` | `int` | ID of the claimed item. |
| `DueDate` | `datetime` | Due date assigned to the item when it was checked out. |
| `ClaimDate` | `datetime` | The date a claim is made. |
| `ClaimTypeID` | `int` | Claim type: either 8, 9, or 21. Refer to item status ID 8, 9, or 21: Claim Returned, Claim Never Had, or Claim Missing Parts |
| `LoaningOrgID` | `int` | Claimed Item Record's checked-out branch OrganizationID. |
| `CheckOutDate` | `datetime` | Claimed Item Record's check out date. |
| `LoanUnits` | `int` | Claimed Item Record's loan units when time it's checked out. |
| `ClaimNoticeSent` | `bit` | Flag indicates whether a notice has been sent for this claim. |

---

## PatronLostItems

> Table to store basic information of the items declared lost by patrons.

| Column | Type | Description |
|--------|------|-------------|
| `LostID` | `int` | Identity of the table. |
| `PatronID` | `int` | ID of the patron who declared the lost of the item. |
| `ItemRecordID` | `int` | ID of the lost item. |
| `LostDate` | `datetime` | Date the item was declared lost. |
| `LoaningOrgID` | `int` | Lost Item Record's checked-out branch's OrganizationID. |
| `CheckOutDate` | `datetime` | Lost Item Record's check-out date. |
| `DueDate` | `datetime` | Lost Item Record's due date. |
| `LoanUnits` | `int` | Lost Item Record's loan units when it's checked out. |

---

## PatronReadingHistory

> This table has entries for the items that a patron has checked out. Entry into this table is dependant on 1. SA parameter - enable reading history being set for the patron's organization. 2. Patron Registration - Maintain Reading History being set for the patron. 3. The organization should record Polaris checkout transactions.

| Column | Type | Description |
|--------|------|-------------|
| `PatronID` | `int` | Patron who checked out the book. |
| `ItemRecordID` | `int` | ItemRecordID of the item which was checked out. |
| `CheckOutDate` | `datetime` | Date the item was checked out. |
| `LoaningOrgID` | `int` | Organization where the checkout took place. |
| `BrowseAuthor` | `nvarchar(255)` | Author of the item which was checked out. |
| `BrowseTitle` | `nvarchar(255)` | Title of the item which was checked out. |
| `PrimaryMARCTOMID` | `tinyint` | MARC Type of Material associated with history entry |
| `Notes` | `nvarchar(255)` | Notes regarding this reading history entry. |
| `TitleRatingID` | `int` | Link to the Title ratings table |
| `PatronReadingHistoryID` | `int` | Primary key |

---

## PatronStatClassCodes

> This table defines patron statistical class codes for each organization.

| Column | Type | Description |
|--------|------|-------------|
| `StatisticalClassID` | `int` | Unique identifier - Identity column |
| `OrganizationID` | `int` | Foreign key column to Polaris..Organizations |
| `Description` | `nvarchar(80)` | String description of the statistical class code |

**Related tables:** PatronRegistration, SA_AutoChangePatronCodeControl

---

## PatronRecordSets

> Contains a list of which patron records belong to which record sets.

| Column | Type | Description |
|--------|------|-------------|
| `RecordSetID` | `int` | Link to corresponding record set. |
| `PatronID` | `int` | Links to patron record |

---

## ItemAvailabilityDisplay

> Sets the levels (local or syste) that the item locations can be set to according to the current Organization. This affects where the item availability will be displayed in the PAC.

| Column | Type | Description |
|--------|------|-------------|
| `OrganizationID` | `int` | ID of the organization that the item's location has a level set for. Links to Organizations table. |
| `ItemAvailabilityLevelID` | `int` | ID of the Level that this location is set for. Link to Item Availability level (organization) table. |
| `SortOrder` | `int` | The order in which the items appear by location in the PAC. |
| `BranchLocationOrgID` | `int` | ID of the organization that specifies the location where a level is set for. |

---

## MaterialTypes

> This will hold all of the values for the Bibliographic LDR/06 and will allow an item to have a material type, which can reflect the bib record type, or can serve as a different value (for an item tied to a bib but of different material type - CD tied to book record)

| Column | Type | Description |
|--------|------|-------------|
| `MaterialTypeID` | `int` | Primary key - code |
| `Description` | `nvarchar(80)` | Text description of the material type |
| `MinimumAge` | `int` | Indicates the minimum age for borrowing a particular material type |

**Related tables:** BibliographicHoldableMaterialTypes, BulkWaiveCriteria_MaterialTypes, CircItemRecords, EphemeralItemRecords, IncreasedCheckoutLimits, InnReachFilterMaterialTypes, InvLines, ItemTemplates, LoanLimits, MaterialLoanLimits, NCIPMediumTypes, POLines, SA_BorrowByMail_MaterialTypesPermitted, SA_ChargeForCheckOut_MaterialTypes, SA_FloatingMatrixMaterialLimits, SA_FloatingMatrixMaterialTypes, SA_MaterialTypeGroups_Definitions, SA_MediaDispenser_MaterialTypes, SA_NCIPMediumTypes_Incoming, SA_NCIPMediumTypes_Outgoing, SA_ShelvingStatusDurations, SelfCheckMaterialTypes, SelListLines, SHRCopies

---

## ShelfLocations

> This table lists the shelf location terms used by specific organizations

| Column | Type | Description |
|--------|------|-------------|
| `ShelfLocationID` | `int` | Part of primary key (with organizationID) |
| `OrganizationID` | `int` | Organization which uses the shelf location |
| `Description` | `nvarchar(80)` | The text shelf location description |

**Related tables:** CircItemRecords, ItemTemplates, ReserveItemRecords

---

## CircItemRecords

> This table contains item record information which is used heavily in circulation (transaction processing intensive data)

| Column | Type | Description |
|--------|------|-------------|
| `ItemRecordID` | `int` | Is the primary key for items - internal id number |
| `Barcode` | `nvarchar(20)` | For circulation, the item must have a barcode |
| `ItemStatusID` | `int` | The circulation status of the item (IN, Transit, OUT, etc.) |
| `LastCircTransactionDate` | `datetime` | The date when the item was last circulated |
| `AssociatedBibRecordID` | `int` | Bib record link (all items must have one) |
| `ParentItemRecordID` | `int` | Some items have a parent (things like items in a kit, etc.) |
| `RecordStatusID` | `int` | Link to record status table (final, provisional) |
| `AssignedBranchID` | `int` | The branch the item is assigned to |
| `AssignedCollectionID` | `int` | The collection the item is assigned to |
| `MaterialTypeID` | `int` | Link to Material types table (all items have an associated type) |
| `LastUsePatronID` | `int` | The ID of the Patron who last had the item is stored here (link to Patron table) |
| `LastUseBranchID` | `int` | The branch which last did some sort of processing with the item. |
| `YTDCircCount` | `int` | The circulation count for the current year |
| `LifetimeCircCount` | `int` | The lifetime circulation total |
| `YTDInHouseUseCount` | `int` | The year to date access count of an item (non-circulating) |
| `LifetimeInHouseUseCount` | `int` | The lifetime access count of an item (non-circulating) |
| `FreeTextBlock` | `nvarchar(255)` | Why is the item blocked for loaning? |
| `ManualBlockID` | `int` | Link to Manual blocks table (can prevent circulation of item) |
| `FineCodeID` | `int` | Used when an item needs to have a fine put on it (link to FineCodes table) |
| `LoanPeriodCodeID` | `int` | Link to Loan Period Codes (specifies how long an item can be loaned out) |
| `StatisticalCodeID` | `int` | Link to Statistical codes table |
| `ShelfLocationID` | `int` | Link to shelf locations table |
| `ILLFlag` | `bit` | This flag indicates whether or not this item record is used for ILL. |
| `DisplayInPAC` | `bit` | Whether or not the record can display in PAC. (This column is a copy of the column with the same name in ItemRecordDetails and maintained via Triggers on the ItemRecordDetails table.) |
| `RenewalLimit` | `int` | The number of times any particular patron is allowed to renew an item |
| `Holdable` | `bit` | Can the item be held for patrons? |
| `HoldableByPickup` | `bit` | This is a restriction option. If this is set, then it implies that this item will be used for fulfilling a hold request only if the pickup branch and item's assigned branch are the same. |
| `HoldableByBranch` | `bit` | This is a restriction option. If this is set, then it implies that this item will be used for fulfilling a hold request only if the patron's branch and item's assigned branch are the same. |
| `HoldableByLibrary` | `bit` | This is a restriction option. If this is set, then it implies that this item will be used for fulfilling a hold request only if the patron's branch and item's assigned branch belong to the same library. |
| `LoanableOutsideSystem` | `bit` | Can this item be loaned to libraries outside the system? |
| `NonCirculating` | `bit` | This field denotes whether the item can be checked out and taken out of the library. |
| `RecordStatusDate` | `datetime` | date when the record's status was last changed. |
| `LastCircWorkstationID` | `int` | Last workstation who performed a circ operation on this item. |
| `LastCircPolarisUserID` | `int` | Last polaris user who performed a circ operation on this item. |
| `HoldableByPrimaryLender` | `bit` | This is a restriction option. If this is set, then it implies that this item will be used for fulfilling a hold request only if the item's assigned branch's preferred lender list contains the pickup branch in the request. |
| `OriginalCheckOutDate` | `datetime` | If item's status is Lost or Claimed, this is its original checked out date. |
| `OriginalDueDate` | `datetime` | If item's status is Lost or Claimed, this is its original due date. |
| `ItemStatusDate` | `datetime` | The date the item status last changed |
| `CheckInBranchID` | `int` | The branch that the item was last checked in at |
| `CheckInDate` | `datetime` | The date the item was last checked in |
| `InTransitSentBranchID` | `int` | The branch that the item was sent in transit from |
| `InTransitSentDate` | `datetime` | The date the item was sent in-transit |
| `InTransitRecvdBranchID` | `int` | The branch that is supposed to receive the in-transit item |
| `InTransitRecvdDate` | `datetime` | The date the in-transit item was received |
| `CheckInWorkstationID` | `int` | The workstation where the item was last checked in at. |
| `CheckInUserID` | `int` | The Polaris user who last checked in the item |
| `LastCheckOutRenewDate` | `datetime` | The date the item was last checked out or renewed |
| `ShelvingBit` | `bit` | A field to tell us that the item should be in 'shelving' status |
| `FirstAvailableDate` | `datetime` | Date the item was first available in Polaris, used in the future for NewTitles job and RSS feeds specific to a particular branch. |
| `LoaningOrgID` | `int` | Organization from where item is currently or was most recently checked out. |
| `HomeBranchID` | `int` | Item home branch |
| `ItemDoesNotFloat` | `bit` | Item does not float flag |
| `EffectiveDisplayInPAC` | `bit` | Determines whether the item record should display in PAC. This column is automatically set to 1 when the RecordStatusID column equals 1 and the DisplayInPAC column equals 1 and the AssignedBranchID/ItemStatusID column pair does not exist in the PACSuppressionRules table. |
| `DoNotMailToPatron` | `bit` | Flag to not mail an item to a patron for BBM holds processing |
| `ElectronicItem` | `bit` | A flag to determine if an item is used for electronic purposes (E-book) |
| `LastDueDate` | `datetime` | The itme's due date when item was last checked out or renewed |
| `ResourceEntityID` | `int` | Foreign Key reference to ResourceEntities table |
| `HoldPickupBranchID` | `int` | holdable for pickup only at this branch |
| `EffectiveItemStatusID` | `int` | This computed column allows Shelving and Non-circulating item statuses to be correctly recognized since they are not Ã¦realÃ† statuses. This field is used by the PAC Suppress Item Display processing. |
| `DelayedHoldsFlag` | `bit` | Flag to signify if there is a Delayed Hold value for this item |
| `DelayedNumberOfDays` | `int` | Number of days to delay filling holds for patrons not belonging to the item's assigned branch past the first available date |
| `LanguageID` | `smallint` | ID of the item's language, references Polaris.Languages (LanguageID) |
| `DisplayInPACLastChanged` | `datetime` | Date the DisplayInPAC value last changed |
| `YTDRenewalsCount` | `int` | The renewals count for the current year |
| `LifetimeRenewalsCount` | `int` | The lifetime renewals total |

**Related tables:** BibCallNumberIndices, CancelledHeldItemRecords, CircItemRecords, ILLRequests, ItemCheckouts, ItemRecordBranchCircCounts, ItemRecordDetails, ItemRecordHistory, ItemRecordHistoryDaily, ItemRecordNotifications, ItemRecordSets, ItemRecordSystemBlocks, ItemShelvingDate, LineItemSegmentToItemRecord, ORSPatronSelectionLists, PatronClaims, PatronReadingHistory, PrevYearItemsCirc, PrevYearItemsCircPerBranch, PrevYearReserveItemCourseCirc, PrevYearReserveItemsCirc, ReserveItemRecords, SysHoldItemRecordRTFPrimaryCycles, SysHoldItemRecordRTFSecondaryCycles, SysHoldItemRecordRTFTertiaryCycles, SysHoldItemRecordsRTFAvailable, SysHoldRequests, WeedingProcessingErrors, WeedingRecordSets, WeedingRecordSets_Preprocessing

---

## ItemCheckouts

> This table stores information on the check-out items that belong to this database. The patrons must also be from this database.

| Column | Type | Description |
|--------|------|-------------|
| `ItemRecordID` | `int` | ID of the item, primary key. It references CircItemRecords table(ItemRecordID). |
| `PatronID` | `int` | ID of the patron having this item checked out. It may be from other database. |
| `OrganizationID` | `int` | ID of the branch the item was checked out. |
| `CreatorID` | `int` | ID of Polaris user who does this check out. |
| `CheckOutDate` | `datetime` | is the date the item was checked out. From 3.0 onwards, if the item is renewed, then it will be the renewal date. |
| `DueDate` | `datetime` | The date when an item is due |
| `Renewals` | `int` | is the count of renewal times for the item. |
| `OVDNoticeCount` | `int` | is the number of overdue notices sent. |
| `RecallFlag` | `smallint` | (Not used yet) |
| `RecallDate` | `datetime` | (Not used yet) |
| `LoanUnits` | `tinyint` | This is a code indicating the units of the Loan Period: |
| `OVDNoticeDate` | `datetime` | The date the most recent overdue notice was sent for this checked out item. |
| `BillingNoticeSent` | `tinyint` | tells if a bill against the item is sent or not, 1=Sent otherwise NULL. |
| `OriginalCheckOutDate` | `datetime` | Date when the original checkout occured. |
| `OriginalDueDate` | `datetime` | Date when the item was originally due - before any renewals were made. |
| `CourseReserveID` | `int` | If the item is an RIR and it is checked out for a course reserve, the ID is stored here. |

---

## ItemRecordHistory

> This table keeps a running history of item record changes/modifications.

| Column | Type | Description |
|--------|------|-------------|
| `ItemRecordHistoryID` | `int` | Primary key |
| `ItemRecordID` | `int` | Item record ID |
| `TransactionDate` | `datetime` | Transaction date |
| `ActionTakenID` | `int` | Key to actions taken table |
| `OldItemStatusID` | `int` | The previous item status |
| `NewItemStatusID` | `int` | The newly assigned item status |
| `AssignedBranchID` | `int` | Item assigned branch |
| `InTransitRecvdBranchID` | `int` | The in transit branch (if applicable) |
| `PatronID` | `int` | Patron record ID |
| `OrganizationID` | `int` | Organization entering the history |
| `PolarisUserID` | `int` | Polaris user ID |
| `WorkstationID` | `int` | Workstation ID |

---

## BibliographicRecords

> Main bibliographic record table. There is a single entry in this table for each MARC bibliographic record in the system. Additional contents of the record are contained in the BibliographicTags and BibliographicSubfields tables.

| Column | Type | Description |
|--------|------|-------------|
| `BibliographicRecordID` | `int` | This is the unique identifier for the record. (primary key, identity) |
| `RecordStatusID` | `int` | Status of the record (final, provisional) - link back to a status table |
| `RecordOwnerID` | `int` | Polaris organization who owns the record |
| `CreatorID` | `int` | This is the ID of the Polaris user who created the record. |
| `ModifierID` | `int` | This is the ID of the Polaris user who last modified the record. |
| `BrowseAuthor` | `nvarchar(255)` | This is the display field for the author of highest precedence. It is used, for example, in the "hit list" returned from a search. |
| `BrowseTitle` | `nvarchar(255)` | This is the display field for the title of highest precedence. It is used, for example, in the "hit list" returned from a search. |
| `BrowseCallNo` | `nvarchar(255)` | This is the display field for the call number of highest precedence. It is used, for example, in the "hit list" returned from a search. |
| `DisplayInPAC` | `tinyint` | This flag indicates whether or not the record will be displayed in the PAC. |
| `ImportedDate` | `datetime` | For an imported record, this is the date on which the record was imported. |
| `MARCBibStatus` | `char` | This is part of the leader of the record. It represents position 5. |
| `MARCBibType` | `char` | This is part of the leader of the record. It represents position 6. |
| `MARCBibLevel` | `char` | This is part of the leader of the record. It represents position 7. |
| `MARCTypeControl` | `char` | This is part of the leader of the record. It represents position 8. |
| `MARCBibEncodingLevel` | `char` | This is part of the leader of the record. It represents position 17. |
| `MARCDescCatalogingForm` | `char` | This is part of the leader of the record. It represents position 18. |
| `MARCLinkedRecordReq` | `char` | This is part of the leader of the record. It represents position 19. |
| `MARCPubDateOne` | `nchar` | This data is pulled from tag 008/07-10 during the indexing process. |
| `MARCPubDateTwo` | `nchar` | This data is pulled from tag 008/11-14 during the indexing process. |
| `MARCTargetAudience` | `char` | This data is pulled from tag 008/22 for books, music, visual materials, and computer files during the indexing process. |
| `MARCLanguage` | `nchar` | This data is pulled from tag 008/35-37 during the indexing process. |
| `MARCPubPlace` | `nchar` | This data element is obsolete and can be removed. |
| `PublicationYear` | `smallint` | This corresponds to MARC 008/06-10 |
| `MARCCreationDate` | `nchar` | This data is pulled from tag 008/00-06 during the indexing process. |
| `MARCModificationDate` | `nchar` | This data is pulled from tag 005 during the indexing process. |
| `MARCLCCN` | `nvarchar(40)` | This data is pulled from tag 010$a during the indexing process. |
| `MARCMedium` | `nvarchar(100)` | This data is pulled from tag 245$h during the indexing process. |
| `MARCPublicationStatus` | `char` | This data is pulled from tag 008/06 during the indexing process. |
| `ILLFlag` | `bit` | This flag indicates whether or not this bib record is used for ILL. |
| `MARCCharCodingScheme` | `char` | LDR/09 - tells use whether the record is Unicode format or not. |
| `SortAuthor` | `nvarchar(255)` | Normalized primary author of this Bib record used in sorting. |
| `LiteraryForm` | `char` | Literary Form (extracted from tag 008, offset 33) |
| `RecordStatusDate` | `datetime` | date when the record's status was last changed. |
| `ModifiedByAuthorityJob` | `bit` | Was this record last modified by a linked authority record background job? |
| `PrimaryMARCTOMID` | `tinyint` | Primary MARC type of Material associated with bib record (can ultimately have many, but only one primary). |
| `FirstAvailableDate` | `datetime` | The first available date for the bib is the first day the first item linked to the bib becomes available for circulation. This is used by NewTitles job and RSS feeds among others. |
| `CreationDate` | `datetime` | Non-MARC creation date |
| `ModificationDate` | `datetime` | Non-MARC modification date |
| `LifetimeCircCount` | `int` | Composite count of lifetime circ for all associated item records |
| `LifetimeInHouseUseCount` | `int` | Composite count of in house circ for all associated item records |
| `SortTitle` | `nvarchar(255)` | Normalized primary title of this Bib record used in sorting. |
| `Popularity` | `int` | The current popularity of the record based on recent and lifetime activity. For details, refer to the comments in the PAC_UpdatePopularity stored procedure. |
| `ImportedFileName` | `nvarchar(255)` | File name record was imported from (if applicable) |
| `BrowseTitleNonFilingCount` | `tinyint` | Is the number of non-filing characters in the BrowseTitle column that should be ignored for collating purposes. |
| `ImportedControlNumber` | `nvarchar(50)` | The 001 tag from the record when it was imported |
| `ImportedRecordSource` | `nvarchar(50)` | The 003 tag from the record when it was imported |
| `HasElectronicURL` | `bit` | If the bib record has an electronic URL (an 856 $u), this bit is set. |
| `DoNotOverlay` | `bit` | Yes/No flag that allows or prohibits this record from being overlaid |
| `HostBibliographicRecordID` | `int` | Set to a non-null value if this record is a constituent of another record. Note: a record cannot be a constituent of itself. |
| `HasConstituents` | `bit` | Flag indicating whether this record is associated with constituents. If this record's BibliographicRecords.BibliographicRecordID equals the BibliographicRecords.HostBibliographicRecordID in one or more other records then this record has constituents. |
| `BoundWithCreatorID` | `int` | This is the ID of the Polaris user who created the Bound-With link. |
| `BoundWithCreationDate` | `datetime` | Creation date of the Bound-With link |
| `DisplayInPACLastChanged` | `datetime` | Date the DisplayInPAC value last changed |
| `LifetimeRenewalsCount` | `int` | Composite count of lifetime renewals for all associated item records |

**Related tables:** BibAuthorIndices, BibCallNumberIndices, BibDashboardStatistics, BibliographicHoldableMaterialTypes, BibliographicInvalidMARCLCCNIndex, BibliographicISBNIndex, BibliographicRecordResourceGroups, BibliographicRecords, BibliographicTag015Index, BibliographicTag022Index, BibliographicTag024Index, BibliographicTag027Index, BibliographicTag028Index, BibliographicTag030Index, BibliographicTag035Index, BibliographicTag037Index, BibliographicTag050Index, BibliographicTag055Index, BibliographicTag060Index, BibliographicTag070Index, BibliographicTag080Index, BibliographicTag082Index, BibliographicTag086Index, BibliographicTags, BibliographicTOMIndex, BibliographicUPCIndex, BibRecordSets, BibSeriesIndices, BibSubjectIndices, BibTitleIndices, CircItemRecords, DeDup1XXIndex, DeDup245Index, DeDup246Index, DeDup247Index, DeDup260Index, DeDup264Index, ILLRequests, InvLines, ItemTemplates, MfhdIssues, MRMS_ResourceLinks, MRMS_ResourceRecords, PACAvailability, PACAvailabilityFacetIndex, POLines, PromotionBibliographicLinks, ResourceEntities, SDIResults, SelListLines, SHRCopies, SHRSharedPublicNotes, Subscriptions, SysHoldProcessRequestToFillRoutingQueue, SysHoldRequests, TitleRatings, UnauthorizedBibHeadings

---

## SysHoldRequests

> This table contains one row for each hold request placed within the system.

| Column | Type | Description |
|--------|------|-------------|
| `SysHoldRequestID` | `int` | Identifies the hold request. The SysHoldRequestID is the primary key and has the identity property. |
| `Sequence` | `int` | Position of the hold request in the hold queue. The Sequence column is handled automatically and should never be set directly. Upon placing a new request, the sequence value is set by the SysHoldRequests_INS trigger. The sequence value can be modified by calling the Circ_UpdateHoldQueue stored procedure. |
| `PatronID` | `int` | Patron for which the hold request was placed. Required. |
| `PickupBranchID` | `int` | Branch at which the item is to be picked up. Required. |
| `SysHoldStatusID` | `int` | Status of the hold request. The SysHoldStatusID column is handled automatically and should never be set directly. |
| `RTFCyclesPrimary` | `int` | Number of times this hold request has cycled through requests to fill primary cycle. The RTFCycles column is handled automatically and should never be set directly. |
| `CreationDate` | `datetime` | Date the hold request was placed. This value is handled automatically and should never be set directly. |
| `ActivationDate` | `datetime` | Date the hold request is activated (system does not attempt to satisfy request until after specified date has been reached). Optional. If not specified, default is the ActivationDate. |
| `ExpirationDate` | `datetime` | Date the hold request expires |
| `LastStatusTransitionDate` | `datetime` | Date of last status transition. This value is handled automatically and should never be set directly. |
| `LCCN` | `nvarchar(40)` | LC call number of requested item. See also BibliographicRecords table. Optional, can be NULL. |
| `PublicationYear` | `smallint` | Publication year of requested item. See also BibliographicRecords table. Optional, can be NULL. |
| `ISBN` | `nvarchar(50)` | ISBN of requested item. See also BibliographicTag020Index table. Optional, can be NULL. |
| `ISSN` | `nvarchar(50)` | ISSN of requested item. See also BibliographicTag022Index table. Optional, can be NULL. |
| `ItemBarcode` | `nvarchar(20)` | Barcode of requested item. See also CircItemRecords table. Optional, can be NULL. |
| `BibliographicRecordID` | `int` | Bibliographic record for which the hold request was orignally placed. Optional. If specified, the bibliographic information included in the hold request (such as Author, Title, PublicationYear) should match the columns associated with the bibliographic record. See also Circ_CreateHoldRequest stored procedure. Specifying a bibliographic record identifier causes the hold request to bind to the specified bibliographic record immediately. |
| `TrappingItemRecordID` | `int` | Item currently associated with hold request. The ItemRecordID column is handled automatically and should never be set directly. |
| `StaffDisplayNotes` | `nvarchar(255)` | Contains notes entered by staff |
| `NonPublicNotes` | `nvarchar(255)` | Contains notes entered by staff |
| `PatronNotes` | `nvarchar(255)` | Contains notes entered by patron |
| `MessageID` | `uniqueidentifier` | When a hold request is created via PAC, this value denotes the unique identifier of the request. |
| `HoldTillDate` | `datetime` | Number of days an item would be held for a patron. |
| `Origin` | `smallint` | Denotes who placed the hold request. |
| `Series` | `nvarchar(255)` | The series requested. |
| `Pages` | `nvarchar(255)` | Number of pages from the article requested. |
| `CreatorID` | `int` | The UserID of the person who created the hold request. |
| `ModifierID` | `int` | The UserID of the person who modified the hold request. |
| `ModificationDate` | `datetime` | Date when the hold request was last modified. |
| `Publisher` | `nvarchar(40)` | Publisher of the item requested. |
| `Edition` | `nvarchar(10)` | Edition of the item requested. |
| `VolumeNumber` | `nvarchar(60)` | Denotes which volume is required - taken from the VolumeNumber field in the item record. Used in duplicate detection. |
| `HoldNotificationDate` | `datetime` | Denotes the date when a notice for this request was sent. |
| `DeliveryOptionID` | `int` | Denotes how the hold notice was delivered |
| `Suspended` | `bit` | Flag to indicate if the hold request has been suspended |
| `UnlockedRequest` | `bit` | a flag that says the user entered the "bib" data by hand, without linking directly. |
| `RTFCyclesSecondary` | `int` | Number of times this hold request has cycled through requests to fill secondary cycle. The RTFCycles column is handled automatically and should never be set directly. |
| `RTFCycle` | `tinyint` | Is a flag stating which RTF cycle a request is currently in. |
| `PrimaryRandomStartSequence` | `int` | Is the branch sequence number we start with when RTF is randomized for the primary cycle. |
| `SecondaryRandomStartSequence` | `int` | Is the branch sequence number we start with when RTF is randomized for the secondary cycle. |
| `PrimaryMARCTOMID` | `tinyint` | Marc type of Material ID |
| `ISBNNormalized` | `nvarchar(50)` | Normalized version of the ISBN data |
| `ISSNNormalized` | `nvarchar(50)` | Normalized version of the ISSN |
| `Designation` | `nvarchar(780)` | Issue designation for hold request |
| `ItemLevelHold` | `bit` | Flag for item level hold |
| `ItemLevelHoldItemRecordID` | `int` | Item record ID associated with item level hold |
| `BorrowByMailRequest` | `bit` | Flag to tell user is this to be mailed |
| `PACDisplayNotes` | `nvarchar(255)` | display notes for PAC for request |
| `TrackingInfo` | `nvarchar(100)` | free text tracking info field (for mailing) |
| `HoldNotification2ndDate` | `datetime` | Denotes the date when a second notice for this request was sent. |
| `ConstituentBibRecordID` | `int` | If the hold is related to a bound with constituent record, that constituent record ID is here |
| `PrimaryRTFBeginDate` | `datetime` | Date primary RTF cycles begin |
| `PrimaryRTFEndDate` | `datetime` | Date primary RTF cycles end |
| `SecondaryRTFBeginDate` | `datetime` | Date secondary RTF cycles begin |
| `SecondaryRTFEndDate` | `datetime` | Date secondary RTF cycles end |
| `NotSuppliedReasonCodeID` | `int` | If the hold is not supplied, this links to the reason why |
| `NewPickupBranchID` | `int` | ID of the branch the pickup location has been changed to. This field is only populated if the hold status was held at the time of the change. |
| `HoldPickupAreaID` | `int` | ID of the pickup area where the patron can find their requested item |
| `NewHoldPickupAreaID` | `int` | New Hold pickup area ID for held request |
| `FeeInserted` | `bit` | This flag should be use to conclude if there is fee inserted for specific hold request. |
| `RTFCyclesTertiary` | `tinyint` | Number of times this hold request has cycled through requests to fill tertiary cycle. The RTFCycles column is handled automatically and should never be set directly. |
| `TertiaryRTFBeginDate` | `datetime` | Date tertiary RTF cycles begin |
| `TertiaryRTFEndDate` | `datetime` | Date tertiary RTF cycles end |
| `TertiaryRandomStartSequence` | `int` | Is the branch sequence number we start with when RTF is randomized for the tertiary cycle. |

**Related tables:** CancelledHeldItemRecords, InnReachRequests, SysHoldHistory, SysHoldHistoryDaily, SysHoldItemRecordRTFPrimaryCycles, SysHoldItemRecordRTFSecondaryCycles, SysHoldItemRecordRTFTertiaryCycles, SysHoldItemRecordsRTFAvailable, SysHoldProcessRequestToFillRoutingQueue, SysHoldRequestGroups, SysHoldRequestSearchTerms

---

## Organizations

> A complete list of all Organizations in a Polaris system

| Column | Type | Description |
|--------|------|-------------|
| `OrganizationID` | `int` | Primary key |
| `ParentOrganizationID` | `int` | Organizations form hierarchies in the form of system, library, branch. This element keeps track of which branches belong to which library, etc. |
| `OrganizationCodeID` | `int` | Link to OrganizationCodes table. |
| `Name` | `nvarchar(50)` | Name of the organization |
| `Abbreviation` | `nvarchar(15)` | Used for many display purposes. |
| `SA_ContactPersonID` | `int` | Link to contact person |
| `CreatorID` | `int` | ID of user who created this object |
| `ModifierID` | `int` | ID of user who last modified this object |
| `CreationDate` | `datetime` | Date/time of creation |
| `ModificationDate` | `datetime` | Date/time of the last modification |
| `DisplayName` | `nvarchar(50)` | The name of the organization used in other areas of Polaris (for display purposes). |

**Related tables:** AcqPurgeRecordDetails, AdminLanguageStrings, AuthorityOverlayRetentionTags, AuthorityTemplates, AuthPrefCatSource, BibliographicRecords, BibliographicTemplates, BibOverlayRetentionTags, BulkWaiveCriteria, BulkWaiveCriteria_ItemBranches, BulkWaiveCriteria_OwningBranches, BulkWaiveCriteria_PatronBranches, CallNumberHierarchies, CancelledHeldItemRecords, CatPurgeCriterias, ChildPAC_CollectionLimits, CircItemRecords, CollectionAgencyExcludePatronCodes, CollectionAgencyFees, CollectionAgencyIncludePatrons, CollectionAgencyRunDates, CommunityImportJobs, CommunityImportProfiles, CommunityInformationEventsPrograms, CommunityInformationRecords, ControlRecords, CourseReserves, Courses, CourseTemplates, CourseTerms, CrossReferenceDisplayConstants, DatesClosed, Departments, Donations, EOTDueDateExclude, EOTDueDateSchedule, EphemeralItemRecords, ExchangeRates, ExpressCheckLibAssignedIBlocks, ExpressCheckLibAssignedPBlocks, ExpressCheckPatCodePBlocks, FeeReasonCodesByBranch, Fines, FiscalYears, Funds, GendersByOrg, GroupOrganizations, HoldPickupAreasByBranch, HoldsPickupBranchesExclude, HoldsPreferredLendersInclude, ILLRequests, ILSStoreCreditCards, ILSStoreTransactions, ImportJobs, ImportProfiles, InboundPhoneVoices, InnReachCentrals_Locations, InnReachLocations, InvLineItemSegments, Invoices, ItemAvailabilityDisplay, ItemBlockDescriptions, ItemBulkChanges, ItemCheckouts, ItemPriceHierarchies, ItemQualificationChangeQueue, ItemRecordBranchCircCounts, ItemRecordDetails, ItemRecordHistory, ItemTemplates, LoanPeriods, MainCallNumberEntries, MARC21ExportBranches, MARCTagDefinitions, MaterialLoanLimits, MRMS_ResourceAuthenticationPatronOrganizations, MRMS_ResourceAuthenticationPowerPACOrganizations, MRMS_ResourceRecords, NSDatesNotToCall, NSLocalAreaCodes, NSLocalPrefixes, NSMPresentationPredicates, OrganizationAddresses, Organizations, OrganizationsCollections, OrganizationsFloatingCollections, OrganizationsPPPP, PAC_PatronFreeTextMessages, PAC_PatronMessages, PACAvailability, PACSearchTypes, PACSuppressionRules, PatRenewalLibAssignedIBlocks, PatRenewalLibAssignedPBlocks, PatRenewalPatCodePBlocks, PatronAccount, PatronBulkChanges, PatronCodeLists, PatronCollectionHistory, PatronCollectionTxn, PatronCustomDataDefinitionsToOrganizations, PatronCustomDataExpressRegistrationRules, PatronCustomDataPACManagementRules, PatronCustomDataPatronRegistrationRules, PatronCustomValidationRulesToOrganizations, PatronFineNotices, PatronFreeTextBlocks, PatronLoanLimits, PatronNotes, PatronQualificationChangeQueue, PatronReadingHistory, PatronRegistration, Patrons, PatronsInCollection, PatronStatClassCodes, PatronStops, PatronStopsByBranch, PolarisUserLists, PolarisUsers, POLineItemSegments, PrevYearItemsCircPerBranch, PromotionCampaigns, PromotionLocationIndex, Promotions, PurchaseOrders, ReceiveShipmentLogs, RecordSets, ReserveItemRecords, RouteLists, Rpt_RouteSlips, Rpt_SubsCancelNotices, RWRITER_BranchUserSecurity, SA_AutoChangePatronCodeControl, SA_Barcode_Formats, SA_BorrowByMail_MaterialTypesPermitted, SA_BorrowByMail_PatronCodesPermitted, SA_BorrowByMail_ProcessingCenters, SA_CATPROF_SubfieldNineProcessTags, SA_ChargeForCheckOut_MaterialTypes, SA_ChargeForCheckOut_PatronCodes, SA_CheckOutDisplayOrder, SA_CheckOutReceiptSettings, SA_COMMUNITY_PAC_SearchSettings, SA_COMMUNITY_PACLimitBy, SA_COMMUNITY_SearchDashboardDisplay, SA_CustomAnalyticsJavaScriptCodeSnippets, SA_CustomMultiLingualStrings, SA_FloatingMatrix, SA_FloatingMatrixCollectionLimits, SA_FloatingMatrixMaterialLimits, SA_FloatingMatrixMaterialTypes, SA_GeographicCoordinates, SA_Holds_Pickup_Branches, SA_ItemsOutReceiptSettings, SA_MaterialTypeGroups, SA_MediaDispenser_MaterialTypes, SA_NotReceived_IssueStatus_Assignment, SA_OLP_Gateway_Attributes, SA_ORS_DeliveryMode, SA_ORS_DeliveryRoute, SA_ORS_Disability, SA_ORS_Equipment, SA_ORS_ExcludedItemStatuses, SA_ORS_IncludedBranches, SA_ORS_PackingListText, SA_ORS_SLHeaderSelections, SA_PAC_ContentCarousels, SA_PAC_SearchDashboardDisplay, SA_PAC_SearchSettings, SA_PAC_SuppressedBranches, SA_PAC_SuppressedCircStatuses, SA_PACLimitBy, SA_PatronCodesFilterByRegisteredBranch, SA_PatronDisplayOrder, SA_PatronRegistrationCharges, SA_PatronSpecialMessages, SA_PaymentMethods, SA_PreferredVendorAccounts, SA_ResourceGroups_Organizations, SA_ShelvingStatusDurations, SA_SIPCheckOutItemAllowances, SA_SL_BranchFundFilter_BranchSettings, SA_SuppressAvailabilityAndRequests, SA_SuppressedCheckoutPatronBlocks, SA_TitlesToGo_Configurations, SA_TrappingPreferenceGroups, SA_VR_Provider_Attributes, SchoolDivisions, SearchDatabases, SelectionLists, SelListLineSegments, ShelfLocations, SHRCopies, SHRSharedPublicNotes, StatisticalCodes, Subscriptions, Suppliers, SysHoldHistory, SysHoldProcessRequestToFillRoutingQueue, SysHoldRequests, SysHoldRoutingSequences, Telephony_ServerBranchMapping, ThemesAssigned, UDFOptionDefs, VegaDataSyncQueue, WebPageParts, WeedingProcessingErrors, WeedingRecordSets_Preprocessing, WeedingTemplates, Workstations

---

## Languages

> This table contains a list of languages as coded values.

| Column | Type | Description |
|--------|------|-------------|
| `LanguageID` | `smallint` | Primary key |
| `LanguageDesc` | `nvarchar(25)` | Text description of language. |
| `NcipValue` | `nvarchar(3)` | 3 character code used for ncip messages |
| `AdminLanguageID` | `int` | The language ID stored in this column is the MS LanguageID which is 1033 for English, 3082 for Spanish, 3084 for French, etc.. |

**Related tables:** CircItemRecords, ItemTemplates, PatronRegistration, WeedingDiscardAmounts

---

## PostalCodes

> This table keeps a list of USPS Postal codes

| Column | Type | Description |
|--------|------|-------------|
| `PostalCodeID` | `int` | Primary key |
| `PostalCode` | `nvarchar(12)` | The actual zip code |
| `City` | `nvarchar(32)` | City used with the postal code |
| `State` | `nvarchar(32)` | State associated with postal code |
| `CountryID` | `int` | Link to countries table |
| `County` | `nvarchar(32)` | County where postal code is valid |

**Related tables:** Addresses, PostalCodeSystemRefs

---

## Addresses

> This table contains all addresses that can be stored in Polaris, including patron addresses and supplier addresses.

| Column | Type | Description |
|--------|------|-------------|
| `AddressID` | `int` | Primary key unique identifier (IDENTITY) |
| `PostalCodeID` | `int` | FK to PostalCodes |
| `StreetOne` | `nvarchar(64)` | Street Address Line 1 |
| `StreetTwo` | `nvarchar(64)` | Street Address Line 2 |
| `ZipPlusFour` | `nvarchar(4)` | Zip plus four data to be appended to the postal code from the related PostalCodes table entry |
| `MunicipalityName` | `nvarchar(64)` | Municipality Name this address resides in. (Populated via address verification function) |
| `StreetThree` | `nvarchar(64)` | Street 3 |

**Related tables:** ChangeAddress, Donors, MailingLabelRecordSets, PatronAddresses, Suppliers

---

## RecordSets

> The user is allowed to create sets of records (lists of records kept by id number for easy retrieval)

| Column | Type | Description |
|--------|------|-------------|
| `RecordSetID` | `int` | Primary key |
| `Name` | `nvarchar(80)` | Name of record set |
| `ObjectTypeID` | `int` | What type of objects are in record set? |
| `CreatorID` | `int` | Polaris user who created record set |
| `ModifierID` | `int` | Polaris user who last modified record set |
| `OrganizationOwnerID` | `int` | Organization which owns record set, if null owned by creator. |
| `CreationDate` | `datetime` | Date the record set was created |
| `ModificationDate` | `datetime` | The date when the record set was updated |
| `Note` | `nvarchar(255)` | Note is a free text field associated with record set |
| `RecordStatusID` | `int` | Status of the record |

**Related tables:** AuthorityRecordSets, BibRecordSets, CatPurgeCriterias, CommunityImportProfiles, ImportProfiles, ItemRecordSets, PatronBulkChanges, PatronRecordSets, WeedingJobs, WeedingProcessingErrors, WeedingRecordSets, WeedingRecordSets_Preprocessing

---

## PolarisUsers

> This table contains all of the users who are enabled to log onto the Polaris tech client.

| Column | Type | Description |
|--------|------|-------------|
| `PolarisUserID` | `int` | Primary key |
| `OrganizationID` | `int` | Link to which organization user belongs to |
| `Name` | `nvarchar(50)` | Name of Polaris user |
| `BranchID` | `int` | Link to organizations table but is branch specific |
| `Enabled` | `bit` | This column flags that a user has been deleted and no longer has privileges to perform operations. |
| `CreatorID` | `int` | ID of user who created this object |
| `ModifierID` | `int` | ID of user who last modified this object |
| `CreationDate` | `datetime` | Date/time of creation |
| `ModificationDate` | `datetime` | Date/time of the last modification |
| `NetworkDomainID` | `int` | Unique identifier of the network domain associated with the Polaris user. |
| `RecordStatusID` | `int` | Status of the record |
| `ExternalID` | `nvarchar(100)` | A unique value that may be used to map to a Polaris staff user |

**Related tables:** AcqPurgeRecordDetails, AuthorityRecords, AuthorityTemplates, BibliographicRecords, BibliographicTemplates, BulkWaiveCriteria, CatPurgeCriterias, CircItemRecords, ClaimHistories, Claims, Collections, CommunityAuthorityRecords, CommunityImportJobs, CommunityImportProfiles, CommunityInformationRecords, ControlRecords, Copy_INLISegs, Copy_POLISegs, CourseReserves, CourseTemplates, EphemeralItemRecords, ExchangeRates, FindTool_SaveDefaultSearchDatabases, FindToolDefaultSearchDatabases, FindToolSavedSearches, FindToolSearchSettings, FiscalYears, Funds, FundTransactionHistories, Groups, GroupUsers, ILSStoreTransactions, Import_ScheduledImportFiles, ImportJobs, ImportProfiles, InvLineItemSegments, InvLines, Invoices, ItemBulkChanges, ItemBulkChangeTemplates, ItemCheckouts, ItemRecordDetails, ItemRecordHistory, ItemTemplates, Job_PurchaseOrders, MailingLabelRecordSets, MARCMacro, MfhdIssues, MfhdPublicationPatterns, MRMS_StaffTermsOfUseAcceptance, ObjectLocks, Organizations, PAC_PatronFreeTextMessages, PAC_PatronMessages, PatronAccount, PatronAddresses, PatronAssociations, PatronBulkChanges, PatronFreeTextBlocks, PatronImports, PatronNotes, PatronRegistration, Patrons, PatronStops, PermissionUsers, PersonalSearchSettings, PolarisTokenOverrides, PolarisUserLists, PolarisUsers, POLineItemSegments, POLines, PromotionCampaigns, Promotions, PSE_InvoicesLog, PurchaseOrders, ReceiveShipmentLogs, RecordSets, ResourceEntities, RouteLists, Rpt_RouteSlips, Rpt_SubsCancelNotices, RWRITER_BranchUserSecurity, RWRITER_UserSecurity, RWRITERSavedReports, RWRITERScheduledJobs, SA_ResourceGroups, SelectionLists, SelListLines, SelListLineSegments, Servers, SHRCopies, SubscriptionRenewalHistories, Subscriptions, Suppliers, SysHoldHistory, SysHoldProcessRequestToFillRoutingQueue, TaxRates, UserSessions, UsersPPPP, VendorAccounts, Vendors, WaiverRequests, WeedingCriteria, WeedingJobs, WeedingProcessingErrors, WeedingRecordSets_Preprocessing, WeedingTemplates, Workstations

---

## NotificationQueue

> This table stores every item (and its associated patron) that needs a notices (of any sort) generated.

| Column | Type | Description |
|--------|------|-------------|
| `ItemRecordID` | `int` | Overdue, Billing, Fine or Hold notices: ID of the item record that a notice to be generated which is CircItemRecords.ItemRecordID; Route notices: ID of the Route List Piece that a notice to be generated which is RouteListPieces.PieceID; Hold Cancellation notices: SysHoldRequests.RequestID for a cancelled system request, or negative ILLRequests.RequestID for a cancelled ILS request; Claim notices: ID of the Issue/Part record that a notice to be generated which is MfhdIssues.IssueID. |
| `NotificationTypeID` | `int` | ID of the type of notification that this item needs (ie. Overdues/Holds/Cancels/Recalls/etc). The values map to the NotificationTypes table in the Polaris database. |
| `PatronID` | `int` | ID of the patron that this item's notification belongs to. |
| `DeliveryOptionID` | `int` | The type of delivery that this notice will take. The values map to the DeliveryOptions table in the Polaris database. |
| `Processed` | `bit` | Indicates whether or not this notice has been attempted. This is usually used by Telephony. If the phone process failed, then DeliveryOption will change from Phone to Mail, this flag is turned on. |
| `MinorPatronID` | `int` | ID of a patron who is younger than 18-years-old. |
| `ReportingOrgID` | `int` | Polaris Organization ID from where notice gets notified. |
| `Amount` | `money` | Money amount related to the notice. |
| `CreationDate` | `datetime` | Date the notice was created. |
| `IsAdditionalTxt` | `bit` | Flag indicating if this is an additional txt message. |
| `NotificationQueueID` | `int` | Unique identifier |

---

## NotificationHistory

> History of patron's hold, fine, overdue, billing and almost overdue notifications. Entry gets populated into this table each time patron is being notified by overdue, billing or almost overdue notices. See Reviewing Notice Histories for details on retention.

| Column | Type | Description |
|--------|------|-------------|
| `PatronId` | `int` | Patron ID. |
| `ItemRecordId` | `int` | Item record info that patron was being notified. |
| `TxnId` | `int` | This column has been depreciated |
| `NotificationTypeId` | `int` | Notification type which references NotificationTypes(NotificationTypeID). In this table, this value could only be 1, 2, 3, 7, 8, 11, 12, 13 and 18. |
| `ReportingOrgId` | `int` | Organization from where notice was sent. |
| `DeliveryOptionId` | `int` | Notification method that being used to notify patron which is phone, mail or email. |
| `NoticeDate` | `datetime` | Date when patron was notificed. |
| `Amount` | `money` | Money amount patron is billed for an item. |
| `NotificationStatusId` | `int` | Status of the notification which references NotificationStatuses(NotificationStatusID). |
| `Title` | `nvarchar(255)` | Title of the item associated with the patrons notice. |

---

## WaiverRequests

> Contains a list of waiver requests.

| Column | Type | Description |
|--------|------|-------------|
| `WaiverRequestID` | `int` | Waiver request identifier. |
| `PatronID` | `int` | Patron identifier. |
| `WaiverReasonID` | `int` | Waiver reason identifier. |
| `WaiverRequestStatusID` | `int` | Waiver request status identifier. |
| `Amount` | `money` | Requested waive amount. |
| `RequestNote` | `nvarchar(4000)` | Waiver request information note. |
| `DecisionNote` | `nvarchar(4000)` | Waiver request decision note. |
| `CreatorID` | `int` | Creating Polaris user identifier. |
| `CreationDate` | `datetime` | Created timestamp. |
| `ModifierID` | `int` | Last modified Polaris user identifier. |
| `ModificationDate` | `datetime` | Last modified timestamp. |
| `IsDistributed` | `bit` | Is the waive request distributed? |

**Related tables:** WaiverRequestsMapping

---

