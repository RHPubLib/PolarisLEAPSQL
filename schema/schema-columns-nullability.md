# Polaris Schema — Column Reference with Nullability and FK Relationships

This document provides complete column metadata for key Polaris tables, including which columns are nullable, which are foreign keys, and which are confirmed empty in the RHPL production database. Use this to avoid querying columns that don't contain useful data.

---

## Table: PatronRegistration
**Full name:** Polaris.Polaris.PatronRegistration  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| PatronID | int | NO |  |
| LanguageID | smallint | YES |  |
| NameFirst | nvarchar(32) | YES |  |
| NameLast | nvarchar(100) | YES |  |
| NameMiddle | nvarchar(32) | YES |  |
| NameTitle | nvarchar(8) | YES |  |
| NameSuffix | nvarchar(4) | YES |  |
| PhoneVoice1 | nvarchar(20) | YES |  |
| PhoneVoice2 | nvarchar(20) | YES |  |
| PhoneVoice3 | nvarchar(20) | YES |  |
| EmailAddress | nvarchar(64) | YES | 📌 EmailAddress is on PatronRegistration, NOT on Patrons. |
| EntryDate | datetime | YES |  |
| ExpirationDate | datetime | YES | 📌 ExpirationDate is on PatronRegistration, NOT on Patrons. |
| AddrCheckDate | datetime | YES |  |
| UpdateDate | datetime | YES |  |
| User1 | nvarchar(64) | YES |  |
| User2 | nvarchar(64) | YES |  |
| User3 | nvarchar(64) | YES |  |
| User4 | nvarchar(64) | YES |  |
| User5 | nvarchar(64) | YES |  |
| Birthdate | datetime | YES | 📌 Birthdate is on PatronRegistration, NOT on Patrons. |
| RegistrationDate | datetime | YES |  |
| FormerID | nvarchar(20) | YES |  |
| ReadingList | tinyint | NO |  |
| PhoneFAX | nvarchar(20) | YES |  |
| DeliveryOptionID | int | YES | FK→ FK to delivery options lookup |
| StatisticalClassID | int | YES | FK→ FK to statistical class lookup table |
| CollectionExempt | bit | NO |  |
| AltEmailAddress | nvarchar(64) | YES |  |
| ExcludeFromOverdues | bit | NO |  |
| SDIEmailAddress | nvarchar(150) | YES |  |
| SDIEmailFormatID | int | YES |  |
| SDIPositiveAssent | bit | YES |  |
| SDIPositiveAssentDate | datetime | YES |  |
| DeletionExempt | bit | NO |  |
| PatronFullName | nvarchar(100) | YES |  |
| ExcludeFromHolds | bit | NO |  |
| ExcludeFromBills | bit | NO |  |
| EmailFormatID | int | NO |  |
| PatronFirstLastName | nvarchar(100) | YES |  |
| Username | nvarchar(50) | YES |  |
| MergeDate | datetime | YES |  |
| MergeUserID | int | YES |  |
| MergeBarcode | nvarchar(20) | YES |  |
| EnableSMS | bit | YES |  |
| RequestPickupBranchID | int | YES |  |
| Phone1CarrierID | int | YES |  |
| Phone2CarrierID | int | YES |  |
| Phone3CarrierID | int | YES |  |
| eReceiptOptionID | int | YES |  |
| TxtPhoneNumber | tinyint | YES |  |
| ExcludeFromAlmostOverdueAutoRenew | bit | YES |  |
| ExcludeFromPatronRecExpiration | bit | YES |  |
| ExcludeFromInactivePatron | bit | YES |  |
| DoNotShowEReceiptPrompt | bit | NO |  |
| PasswordHash | nvarchar(256) | YES |  |
| ObfuscatedPassword | nvarchar(256) | YES |  |
| NameTitleID | int | YES |  |
| RBdigitalPatronID | int | YES |  |
| GenderID | int | YES |  |
| LegalNameFirst | nvarchar(32) | YES |  |
| LegalNameLast | nvarchar(32) | YES |  |
| LegalNameMiddle | nvarchar(32) | YES |  |
| LegalFullName | nvarchar(100) | YES |  |
| UseLegalNameOnNotices | bit | NO |  |
| EnablePush | bit | NO |  |
| StaffAcceptedUseSingleName | bit | NO |  |
| ExtendedLoanPeriods | bit | NO |  |
| IncreasedCheckOutLimits | bit | NO |  |
| PreferredPickupAreaID | int | YES |  |

---

## Table: Patrons
**Full name:** Polaris.Polaris.Patrons  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| PatronID | int | NO |  |
| PatronCodeID | int | NO | FK→ Lookup: 1=Resident, 2=Non-Resident, 3=Business, 4=MILibrary, 7=Staff, etc. (see system prompt) | 📌 PatronCodeID is on Patrons, NOT on PatronRegistration. |
| OrganizationID | int | NO |  |
| CreatorID | int | NO |  |
| ModifierID | int | YES |  |
| Barcode | nvarchar(20) | YES | 📌 Barcode is on Patrons, NOT on PatronRegistration. |
| SystemBlocks | int | NO | FK→ Bitwise integer — use & to test bits. Bit 1024=collection agency. NOT a simple equality check. | 📌 SystemBlocks is on Patrons, NOT on PatronRegistration. |
| YTDCircCount | int | NO |  |
| LifetimeCircCount | int | NO |  |
| LastActivityDate | datetime | YES |  |
| ClaimCount | int | YES |  |
| LostItemCount | int | YES |  |
| ChargesAmount | money | NO |  |
| CreditsAmount | money | NO |  |
| RecordStatusID | int | NO |  |
| RecordStatusDate | datetime | NO |  |
| YTDYouSavedAmount | money | NO |  |
| LifetimeYouSavedAmount | money | NO |  |

---

## Table: ViewPatronRecords
**Full name:** Polaris.Polaris.ViewPatronRecords  
**Join note:** RecordID = PatronRegistration.PatronID = Patrons.PatronID. Use this view for city/zip/address filtering — MunicipalityName on Addresses table is NULL for all records.  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| RecordID | int | NO |  |
| Barcode | nvarchar(20) | YES |  |
| PatronName | nvarchar(106) | YES |  |
| Street | nvarchar(194) | YES |  |
| City | nvarchar(32) | YES |  |
| State | nvarchar(32) | YES |  |
| Zip | nvarchar(17) | YES |  |
| Library | nvarchar(50) | NO |  |
| RecordStatusID | int | NO |  |
| RecordStatusDate | datetime | NO |  |

---

## Table: PatronAddresses
**Full name:** Polaris.Polaris.PatronAddresses  
**Join note:** PatronID joins to PatronRegistration.PatronID and Patrons.PatronID  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| PatronID | int | NO |  |
| AddressID | int | YES | FK→ Addresses.AddressID — nullable, some patrons have no address record |
| AddressTypeID | int | NO | FK→ Lookup: 1=Generic/home, 2=Notice, 3=Invoice, 4=Statement, 5=Billing, 12=Mailing |
| Verified | bit | NO |  |
| VerificationDate | datetime | YES |  |
| PolarisUserID | int | YES |  |
| AddressLabelID | int | NO |  |

---

## Table: Addresses
**Full name:** Polaris.Polaris.Addresses  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| PostalCodeID | int | NO | FK→ PostalCodes.PostalCodeID — integer FK, NOT a zip string. Use PostalCodes.PostalCode for the actual zip. |
| StreetOne | nvarchar(64) | YES |  |
| StreetTwo | nvarchar(64) | YES |  |
| ZipPlusFour | nvarchar(4) | YES |  |
| MunicipalityName | nvarchar(64) | YES | ⚠ CONFIRMED EMPTY in production — 0 of 80,964 rows populated. NEVER use this column to filter by city. Use ViewPatronRecords.City instead. |
| StreetThree | nvarchar(64) | YES |  |

---

## Table: PostalCodes
**Full name:** Polaris.Polaris.PostalCodes  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| PostalCodeID | int | NO |  |
| PostalCode | nvarchar(12) | YES |  |
| City | nvarchar(32) | NO |  |
| State | nvarchar(32) | NO |  |
| CountryID | int | YES |  |
| County | nvarchar(32) | YES |  |

---

## Table: CircItemRecords
**Full name:** Polaris.Polaris.CircItemRecords  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| ItemRecordID | int | NO |  |
| Barcode | nvarchar(20) | YES |  |
| ItemStatusID | int | NO | FK→ Lookup: 1=In, 2=Out, 7=Lost, 10=Missing, 11=Withdrawn, 13=On-Order (see full list in system prompt) |
| LastCircTransactionDate | datetime | YES |  |
| AssociatedBibRecordID | int | YES |  |
| ParentItemRecordID | int | YES |  |
| RecordStatusID | int | NO |  |
| AssignedBranchID | int | NO | FK→ Lookup: 3=Main Library, 4=Bookmobile, 5=Drive-Up, etc. (see branch IDs in system prompt) |
| AssignedCollectionID | int | YES |  |
| MaterialTypeID | int | NO |  |
| LastUsePatronID | int | YES |  |
| LastUseBranchID | int | YES |  |
| YTDCircCount | int | NO |  |
| LifetimeCircCount | int | NO |  |
| YTDInHouseUseCount | int | NO |  |
| LifetimeInHouseUseCount | int | NO |  |
| FreeTextBlock | nvarchar(255) | YES |  |
| ManualBlockID | int | YES |  |
| FineCodeID | int | YES |  |
| LoanPeriodCodeID | int | NO |  |
| StatisticalCodeID | int | YES |  |
| ShelfLocationID | int | YES |  |
| ILLFlag | bit | NO |  |
| DisplayInPAC | bit | NO |  |
| RenewalLimit | int | NO |  |
| Holdable | bit | NO |  |
| HoldableByPickup | bit | NO |  |
| HoldableByBranch | bit | NO |  |
| HoldableByLibrary | bit | NO |  |
| LoanableOutsideSystem | bit | NO |  |
| NonCirculating | bit | NO |  |
| RecordStatusDate | datetime | NO |  |
| LastCircWorkstationID | int | YES |  |
| LastCircPolarisUserID | int | YES |  |
| HoldableByPrimaryLender | bit | NO |  |
| OriginalCheckOutDate | datetime | YES |  |
| OriginalDueDate | datetime | YES |  |
| ItemStatusDate | datetime | YES |  |
| CheckInBranchID | int | YES |  |
| CheckInDate | datetime | YES |  |
| InTransitSentBranchID | int | YES |  |
| InTransitSentDate | datetime | YES |  |
| InTransitRecvdBranchID | int | YES |  |
| InTransitRecvdDate | datetime | YES |  |
| CheckInWorkstationID | int | YES |  |
| CheckInUserID | int | YES |  |
| LastCheckOutRenewDate | datetime | YES |  |
| ShelvingBit | bit | NO |  |
| FirstAvailableDate | datetime | YES |  |
| LoaningOrgID | int | YES |  |
| HomeBranchID | int | NO | FK→ Lookup: same branch IDs as AssignedBranchID |
| ItemDoesNotFloat | bit | NO |  |
| EffectiveDisplayInPAC | bit | NO |  |
| DoNotMailToPatron | bit | NO |  |
| ElectronicItem | bit | NO |  |
| LastDueDate | datetime | YES |  |
| ResourceEntityID | int | YES |  |
| HoldPickupBranchID | int | YES |  |
| EffectiveItemStatusID | int | NO |  |
| DelayedHoldsFlag | bit | NO |  |
| DelayedNumberOfDays | int | YES |  |
| LanguageID | smallint | YES |  |
| DisplayInPACLastChanged | datetime | YES |  |
| YTDRenewalsCount | int | NO |  |
| LifetimeRenewalsCount | int | NO |  |
| HomeShelfLocationID | int | YES |  |

---

## Table: ItemRecordDetails
**Full name:** Polaris.Polaris.ItemRecordDetails  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| ItemRecordID | int | NO |  |
| OwningBranchID | int | YES |  |
| CreatorID | int | NO |  |
| ModifierID | int | YES |  |
| CallNumberPrefix | nvarchar(60) | YES |  |
| ClassificationNumber | nvarchar(60) | YES |  |
| CutterNumber | nvarchar(60) | YES |  |
| CallNumberSuffix | nvarchar(60) | YES |  |
| CopyNumber | nvarchar(60) | YES |  |
| VolumeNumber | nvarchar(60) | YES |  |
| TemporaryShelfLocation | nvarchar(25) | YES |  |
| PublicNote | nvarchar(255) | YES |  |
| NonPublicNote | nvarchar(255) | YES |  |
| CreationDate | datetime | NO |  |
| ModificationDate | datetime | YES |  |
| ImportedDate | datetime | YES |  |
| LastInventoryDate | datetime | YES |  |
| Price | money | YES |  |
| ImportedBibControlNumber | nvarchar(50) | YES |  |
| ImportedRecordSource | nvarchar(50) | YES |  |
| PhysicalCondition | nvarchar(255) | YES |  |
| NameOfPiece | nvarchar(255) | YES |  |
| FundingSource | nvarchar(50) | YES |  |
| AcquisitionDate | datetime | YES |  |
| ShelvingSchemeID | int | NO |  |
| CallNumber | nvarchar(255) | YES |  |
| DonorID | int | YES |  |
| ImportEDIUpdateFlag | bit | NO |  |
| CallNumberVolumeCopy | nvarchar(370) | YES |  |
| SpecialItemCheckInNote | nvarchar(255) | YES |  |

---

## Table: BibliographicRecords
**Full name:** Polaris.Polaris.BibliographicRecords  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| BibliographicRecordID | int | NO |  |
| RecordStatusID | int | NO |  |
| RecordOwnerID | int | YES |  |
| CreatorID | int | NO |  |
| ModifierID | int | YES |  |
| BrowseAuthor | nvarchar(255) | YES |  |
| BrowseTitle | nvarchar(255) | YES |  |
| BrowseCallNo | nvarchar(255) | YES |  |
| DisplayInPAC | tinyint | NO |  |
| ImportedDate | datetime | YES |  |
| MARCBibStatus | char(1) | NO |  |
| MARCBibType | char(1) | NO |  |
| MARCBibLevel | char(1) | NO |  |
| MARCTypeControl | char(1) | NO |  |
| MARCBibEncodingLevel | char(1) | NO |  |
| MARCDescCatalogingForm | char(1) | NO |  |
| MARCLinkedRecordReq | char(1) | NO |  |
| MARCPubDateOne | nchar(4) | YES |  |
| MARCPubDateTwo | nchar(4) | YES |  |
| MARCTargetAudience | char(1) | YES |  |
| MARCLanguage | nchar(3) | NO |  |
| MARCPubPlace | nchar(3) | YES |  |
| PublicationYear | smallint | YES |  |
| MARCCreationDate | nchar(6) | YES |  |
| MARCModificationDate | nchar(16) | YES |  |
| MARCLCCN | nvarchar(40) | YES |  |
| MARCMedium | nvarchar(100) | YES |  |
| MARCPublicationStatus | char(1) | YES |  |
| ILLFlag | bit | NO |  |
| MARCCharCodingScheme | char(1) | NO |  |
| SortAuthor | nvarchar(255) | YES |  |
| LiteraryForm | char(1) | YES |  |
| RecordStatusDate | datetime | NO |  |
| ModifiedByAuthorityJob | bit | NO |  |
| PrimaryMARCTOMID | tinyint | YES |  |
| FirstAvailableDate | datetime | YES |  |
| CreationDate | datetime | YES |  |
| ModificationDate | datetime | NO |  |
| LifetimeCircCount | int | NO |  |
| LifetimeInHouseUseCount | int | NO |  |
| SortTitle | nvarchar(255) | YES |  |
| Popularity | int | NO |  |
| ImportedFileName | nvarchar(255) | YES |  |
| BrowseTitleNonFilingCount | tinyint | NO |  |
| ImportedControlNumber | nvarchar(50) | YES |  |
| ImportedRecordSource | nvarchar(50) | YES |  |
| HasElectronicURL | bit | NO |  |
| DoNotOverlay | bit | NO |  |
| HostBibliographicRecordID | int | YES |  |
| HasConstituents | bit | YES |  |
| BoundWithCreatorID | int | YES |  |
| BoundWithCreationDate | datetime | YES |  |
| DisplayInPACLastChanged | datetime | YES |  |
| LifetimeRenewalsCount | int | NO |  |

---

## Table: SysHoldRequests
**Full name:** Polaris.Polaris.SysHoldRequests  
**Join note:** PatronID joins to PatronRegistration.PatronID  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| SysHoldRequestID | int | NO |  |
| Sequence | int | NO |  |
| PatronID | int | NO |  |
| PickupBranchID | int | NO | FK→ Lookup: same branch IDs as CircItemRecords.AssignedBranchID |
| SysHoldStatusID | int | NO | FK→ Lookup: hold status (active, held, expired, cancelled, etc.) |
| RTFCyclesPrimary | int | NO |  |
| CreationDate | datetime | YES |  |
| ActivationDate | datetime | YES |  |
| ExpirationDate | datetime | YES |  |
| LastStatusTransitionDate | datetime | YES |  |
| LCCN | nvarchar(40) | YES |  |
| PublicationYear | smallint | YES |  |
| ISBN | nvarchar(50) | YES |  |
| ISSN | nvarchar(50) | YES |  |
| ItemBarcode | nvarchar(20) | YES |  |
| BibliographicRecordID | int | YES |  |
| TrappingItemRecordID | int | YES |  |
| StaffDisplayNotes | nvarchar(255) | YES |  |
| NonPublicNotes | nvarchar(255) | YES |  |
| PatronNotes | nvarchar(255) | YES |  |
| MessageID | uniqueidentifier | YES |  |
| HoldTillDate | datetime | YES |  |
| Origin | smallint | YES |  |
| Series | nvarchar(255) | YES |  |
| Pages | nvarchar(255) | YES |  |
| CreatorID | int | YES |  |
| ModifierID | int | YES |  |
| ModificationDate | datetime | YES |  |
| Publisher | nvarchar(40) | YES |  |
| Edition | nvarchar(10) | YES |  |
| VolumeNumber | nvarchar(60) | YES |  |
| HoldNotificationDate | datetime | YES |  |
| DeliveryOptionID | int | YES |  |
| Suspended | bit | YES |  |
| UnlockedRequest | bit | NO |  |
| RTFCyclesSecondary | int | NO |  |
| RTFCycle | tinyint | NO |  |
| PrimaryRandomStartSequence | int | NO |  |
| SecondaryRandomStartSequence | int | NO |  |
| PrimaryMARCTOMID | tinyint | YES |  |
| ISBNNormalized | nvarchar(50) | YES |  |
| ISSNNormalized | nvarchar(50) | YES |  |
| Designation | nvarchar(780) | YES |  |
| ItemLevelHold | bit | NO |  |
| ItemLevelHoldItemRecordID | int | YES |  |
| BorrowByMailRequest | bit | NO |  |
| PACDisplayNotes | nvarchar(255) | YES |  |
| TrackingInfo | nvarchar(100) | YES |  |
| HoldNotification2ndDate | datetime | YES |  |
| ConstituentBibRecordID | int | YES |  |
| PrimaryRTFBeginDate | datetime | YES |  |
| PrimaryRTFEndDate | datetime | YES |  |
| SecondaryRTFBeginDate | datetime | YES |  |
| SecondaryRTFEndDate | datetime | YES |  |
| NotSuppliedReasonCodeID | int | YES |  |
| NewPickupBranchID | int | YES |  |
| HoldPickupAreaID | int | YES |  |
| NewHoldPickupAreaID | int | YES |  |
| FeeInserted | bit | NO |  |
| RTFCyclesTertiary | tinyint | NO |  |
| TertiaryRTFBeginDate | datetime | YES |  |
| TertiaryRTFEndDate | datetime | YES |  |
| TertiaryRandomStartSequence | int | NO |  |

---

## Table: PatronAccount
**Full name:** Polaris.Polaris.PatronAccount  
**Join note:** PatronID joins to PatronRegistration.PatronID  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| TxnID | int | NO |  |
| PatronID | int | NO |  |
| TxnCodeID | int | NO | FK→ Lookup: transaction type (overdue fine, lost item fee, payment, etc.) |
| FeeReasonCodeID | int | YES |  |
| TxnAmount | money | NO |  |
| OutstandingAmount | money | YES |  |
| ItemRecordID | int | YES |  |
| TxnDate | datetime | NO |  |
| PaymentMethodID | int | YES |  |
| OrganizationID | int | NO |  |
| WorkStationID | int | YES |  |
| CreatorID | int | NO |  |
| CheckOutDate | datetime | YES |  |
| DueDate | datetime | YES |  |
| FreeTextNote | nvarchar(255) | YES |  |
| ILSStoreTransactionID | int | YES |  |
| LoaningOrgID | int | YES |  |
| ItemAssignedBranchID | int | YES |  |
| PatronBranchID | int | YES |  |
| LoanUnit | int | YES |  |
| FineFreeUnits | int | YES |  |
| FineDeducted | money | YES |  |
| FineIsCapped | bit | YES |  |
| BillingStatusID | int | YES |  |
| BaseAmount | money | YES |  |
| TaxRateID | int | YES |  |
| AppliedTaxRate | decimal | YES |  |
| AppliedTaxAmount | money | YES |  |
| AppliedTaxRateDescription | nvarchar(80) | YES |  |

---

## Table: ﻿Addresses
**Full name:** Polaris.Polaris.﻿Addresses  

| Column | Type | Nullable | Notes |
|--------|------|----------|-------|
| AddressID | int | NO |  |

---
