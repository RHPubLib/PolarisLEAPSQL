# Polaris Key Tables — Full Column Reference

These are the tables most commonly used in Polaris SQL queries.

Always prefix with database and schema: `Polaris.Polaris.TableName WITH (NOLOCK)`


## Database: Polaris


### Polaris.Polaris.PatronRegistration

| Column | Type | Nullable |
|--------|------|----------|
| PatronID | int(10) | NO |
| LanguageID | smallint(5) | YES |
| NameFirst | nvarchar(32) | YES |
| NameLast | nvarchar(100) | YES |
| NameMiddle | nvarchar(32) | YES |
| NameTitle | nvarchar(8) | YES |
| NameSuffix | nvarchar(4) | YES |
| PhoneVoice1 | nvarchar(20) | YES |
| PhoneVoice2 | nvarchar(20) | YES |
| PhoneVoice3 | nvarchar(20) | YES |
| EmailAddress | nvarchar(64) | YES |
| EntryDate | datetime | YES |
| ExpirationDate | datetime | YES |
| AddrCheckDate | datetime | YES |
| UpdateDate | datetime | YES |
| User1 | nvarchar(64) | YES |
| User2 | nvarchar(64) | YES |
| User3 | nvarchar(64) | YES |
| User4 | nvarchar(64) | YES |
| User5 | nvarchar(64) | YES |
| Birthdate | datetime | YES |
| RegistrationDate | datetime | YES |
| FormerID | nvarchar(20) | YES |
| ReadingList | tinyint(3) | NO |
| PhoneFAX | nvarchar(20) | YES |
| DeliveryOptionID | int(10) | YES |
| StatisticalClassID | int(10) | YES |
| CollectionExempt | bit | NO |
| AltEmailAddress | nvarchar(64) | YES |
| ExcludeFromOverdues | bit | NO |
| SDIEmailAddress | nvarchar(150) | YES |
| SDIEmailFormatID | int(10) | YES |
| SDIPositiveAssent | bit | YES |
| SDIPositiveAssentDate | datetime | YES |
| DeletionExempt | bit | NO |
| PatronFullName | nvarchar(100) | YES |
| ExcludeFromHolds | bit | NO |
| ExcludeFromBills | bit | NO |
| EmailFormatID | int(10) | NO |
| PatronFirstLastName | nvarchar(100) | YES |
| Username | nvarchar(50) | YES |
| MergeDate | datetime | YES |
| MergeUserID | int(10) | YES |
| MergeBarcode | nvarchar(20) | YES |
| EnableSMS | bit | YES |
| RequestPickupBranchID | int(10) | YES |
| Phone1CarrierID | int(10) | YES |
| Phone2CarrierID | int(10) | YES |
| Phone3CarrierID | int(10) | YES |
| eReceiptOptionID | int(10) | YES |
| TxtPhoneNumber | tinyint(3) | YES |
| ExcludeFromAlmostOverdueAutoRenew | bit | YES |
| ExcludeFromPatronRecExpiration | bit | YES |
| ExcludeFromInactivePatron | bit | YES |
| DoNotShowEReceiptPrompt | bit | NO |
| PasswordHash | nvarchar(256) | YES |
| ObfuscatedPassword | nvarchar(256) | YES |
| NameTitleID | int(10) | YES |
| RBdigitalPatronID | int(10) | YES |
| GenderID | int(10) | YES |
| LegalNameFirst | nvarchar(32) | YES |
| LegalNameLast | nvarchar(32) | YES |
| LegalNameMiddle | nvarchar(32) | YES |
| LegalFullName | nvarchar(100) | YES |
| UseLegalNameOnNotices | bit | NO |
| EnablePush | bit | NO |
| StaffAcceptedUseSingleName | bit | NO |
| ExtendedLoanPeriods | bit | NO |
| IncreasedCheckOutLimits | bit | NO |
| PreferredPickupAreaID | int(10) | YES |


### Polaris.Polaris.Patrons

| Column | Type | Nullable |
|--------|------|----------|
| PatronID | int(10) | NO |
| PatronCodeID | int(10) | NO |
| OrganizationID | int(10) | NO |
| CreatorID | int(10) | NO |
| ModifierID | int(10) | YES |
| Barcode | nvarchar(20) | YES |
| SystemBlocks | int(10) | NO |
| YTDCircCount | int(10) | NO |
| LifetimeCircCount | int(10) | NO |
| LastActivityDate | datetime | YES |
| ClaimCount | int(10) | YES |
| LostItemCount | int(10) | YES |
| ChargesAmount | money(19) | NO |
| CreditsAmount | money(19) | NO |
| RecordStatusID | int(10) | NO |
| RecordStatusDate | datetime | NO |
| YTDYouSavedAmount | money(19) | NO |
| LifetimeYouSavedAmount | money(19) | NO |


### Polaris.Polaris.PatronAddresses

| Column | Type | Nullable |
|--------|------|----------|
| PatronID | int(10) | NO |
| AddressID | int(10) | YES |
| AddressTypeID | int(10) | NO |
| Verified | bit | NO |
| VerificationDate | datetime | YES |
| PolarisUserID | int(10) | YES |
| AddressLabelID | int(10) | NO |


### Polaris.Polaris.Addresses

| Column | Type | Nullable |
|--------|------|----------|
| AddressID | int(10) | NO |
| PostalCodeID | int(10) | NO |
| StreetOne | nvarchar(64) | YES |
| StreetTwo | nvarchar(64) | YES |
| ZipPlusFour | nvarchar(4) | YES |
| MunicipalityName | nvarchar(64) | YES |
| StreetThree | nvarchar(64) | YES |


### Polaris.Polaris.CircItemRecords

| Column | Type | Nullable |
|--------|------|----------|
| ItemRecordID | int(10) | NO |
| Barcode | nvarchar(20) | YES |
| ItemStatusID | int(10) | NO |
| LastCircTransactionDate | datetime | YES |
| AssociatedBibRecordID | int(10) | YES |
| ParentItemRecordID | int(10) | YES |
| RecordStatusID | int(10) | NO |
| AssignedBranchID | int(10) | NO |
| AssignedCollectionID | int(10) | YES |
| MaterialTypeID | int(10) | NO |
| LastUsePatronID | int(10) | YES |
| LastUseBranchID | int(10) | YES |
| YTDCircCount | int(10) | NO |
| LifetimeCircCount | int(10) | NO |
| YTDInHouseUseCount | int(10) | NO |
| LifetimeInHouseUseCount | int(10) | NO |
| FreeTextBlock | nvarchar(255) | YES |
| ManualBlockID | int(10) | YES |
| FineCodeID | int(10) | YES |
| LoanPeriodCodeID | int(10) | NO |
| StatisticalCodeID | int(10) | YES |
| ShelfLocationID | int(10) | YES |
| ILLFlag | bit | NO |
| DisplayInPAC | bit | NO |
| RenewalLimit | int(10) | NO |
| Holdable | bit | NO |
| HoldableByPickup | bit | NO |
| HoldableByBranch | bit | NO |
| HoldableByLibrary | bit | NO |
| LoanableOutsideSystem | bit | NO |
| NonCirculating | bit | NO |
| RecordStatusDate | datetime | NO |
| LastCircWorkstationID | int(10) | YES |
| LastCircPolarisUserID | int(10) | YES |
| HoldableByPrimaryLender | bit | NO |
| OriginalCheckOutDate | datetime | YES |
| OriginalDueDate | datetime | YES |
| ItemStatusDate | datetime | YES |
| CheckInBranchID | int(10) | YES |
| CheckInDate | datetime | YES |
| InTransitSentBranchID | int(10) | YES |
| InTransitSentDate | datetime | YES |
| InTransitRecvdBranchID | int(10) | YES |
| InTransitRecvdDate | datetime | YES |
| CheckInWorkstationID | int(10) | YES |
| CheckInUserID | int(10) | YES |
| LastCheckOutRenewDate | datetime | YES |
| ShelvingBit | bit | NO |
| FirstAvailableDate | datetime | YES |
| LoaningOrgID | int(10) | YES |
| HomeBranchID | int(10) | NO |
| ItemDoesNotFloat | bit | NO |
| EffectiveDisplayInPAC | bit | NO |
| DoNotMailToPatron | bit | NO |
| ElectronicItem | bit | NO |
| LastDueDate | datetime | YES |
| ResourceEntityID | int(10) | YES |
| HoldPickupBranchID | int(10) | YES |
| EffectiveItemStatusID | int(10) | NO |
| DelayedHoldsFlag | bit | NO |
| DelayedNumberOfDays | int(10) | YES |
| LanguageID | smallint(5) | YES |
| DisplayInPACLastChanged | datetime | YES |
| YTDRenewalsCount | int(10) | NO |
| LifetimeRenewalsCount | int(10) | NO |
| HomeShelfLocationID | int(10) | YES |


### Polaris.Polaris.ItemRecordDetails

| Column | Type | Nullable |
|--------|------|----------|
| ItemRecordID | int(10) | NO |
| OwningBranchID | int(10) | YES |
| CreatorID | int(10) | NO |
| ModifierID | int(10) | YES |
| CallNumberPrefix | nvarchar(60) | YES |
| ClassificationNumber | nvarchar(60) | YES |
| CutterNumber | nvarchar(60) | YES |
| CallNumberSuffix | nvarchar(60) | YES |
| CopyNumber | nvarchar(60) | YES |
| VolumeNumber | nvarchar(60) | YES |
| TemporaryShelfLocation | nvarchar(25) | YES |
| PublicNote | nvarchar(255) | YES |
| NonPublicNote | nvarchar(255) | YES |
| CreationDate | datetime | NO |
| ModificationDate | datetime | YES |
| ImportedDate | datetime | YES |
| LastInventoryDate | datetime | YES |
| Price | money(19) | YES |
| ImportedBibControlNumber | nvarchar(50) | YES |
| ImportedRecordSource | nvarchar(50) | YES |
| PhysicalCondition | nvarchar(255) | YES |
| NameOfPiece | nvarchar(255) | YES |
| FundingSource | nvarchar(50) | YES |
| AcquisitionDate | datetime | YES |
| ShelvingSchemeID | int(10) | NO |
| CallNumber | nvarchar(255) | YES |
| DonorID | int(10) | YES |
| ImportEDIUpdateFlag | bit | NO |
| CallNumberVolumeCopy | nvarchar(370) | YES |
| SpecialItemCheckInNote | nvarchar(255) | YES |


### Polaris.Polaris.BibliographicRecords

| Column | Type | Nullable |
|--------|------|----------|
| BibliographicRecordID | int(10) | NO |
| RecordStatusID | int(10) | NO |
| RecordOwnerID | int(10) | YES |
| CreatorID | int(10) | NO |
| ModifierID | int(10) | YES |
| BrowseAuthor | nvarchar(255) | YES |
| BrowseTitle | nvarchar(255) | YES |
| BrowseCallNo | nvarchar(255) | YES |
| DisplayInPAC | tinyint(3) | NO |
| ImportedDate | datetime | YES |
| MARCBibStatus | char(1) | NO |
| MARCBibType | char(1) | NO |
| MARCBibLevel | char(1) | NO |
| MARCTypeControl | char(1) | NO |
| MARCBibEncodingLevel | char(1) | NO |
| MARCDescCatalogingForm | char(1) | NO |
| MARCLinkedRecordReq | char(1) | NO |
| MARCPubDateOne | nchar(4) | YES |
| MARCPubDateTwo | nchar(4) | YES |
| MARCTargetAudience | char(1) | YES |
| MARCLanguage | nchar(3) | NO |
| MARCPubPlace | nchar(3) | YES |
| PublicationYear | smallint(5) | YES |
| MARCCreationDate | nchar(6) | YES |
| MARCModificationDate | nchar(16) | YES |
| MARCLCCN | nvarchar(40) | YES |
| MARCMedium | nvarchar(100) | YES |
| MARCPublicationStatus | char(1) | YES |
| ILLFlag | bit | NO |
| MARCCharCodingScheme | char(1) | NO |
| SortAuthor | nvarchar(255) | YES |
| LiteraryForm | char(1) | YES |
| RecordStatusDate | datetime | NO |
| ModifiedByAuthorityJob | bit | NO |
| PrimaryMARCTOMID | tinyint(3) | YES |
| FirstAvailableDate | datetime | YES |
| CreationDate | datetime | YES |
| ModificationDate | datetime | NO |
| LifetimeCircCount | int(10) | NO |
| LifetimeInHouseUseCount | int(10) | NO |
| SortTitle | nvarchar(255) | YES |
| Popularity | int(10) | NO |
| ImportedFileName | nvarchar(255) | YES |
| BrowseTitleNonFilingCount | tinyint(3) | NO |
| ImportedControlNumber | nvarchar(50) | YES |
| ImportedRecordSource | nvarchar(50) | YES |
| HasElectronicURL | bit | NO |
| DoNotOverlay | bit | NO |
| HostBibliographicRecordID | int(10) | YES |
| HasConstituents | bit | YES |
| BoundWithCreatorID | int(10) | YES |
| BoundWithCreationDate | datetime | YES |
| DisplayInPACLastChanged | datetime | YES |
| LifetimeRenewalsCount | int(10) | NO |


### Polaris.Polaris.BibliographicTags

| Column | Type | Nullable |
|--------|------|----------|
| BibliographicTagID | int(10) | NO |
| BibliographicRecordID | int(10) | NO |
| Sequence | smallint(5) | NO |
| TagNumber | smallint(5) | NO |
| IndicatorOne | char(1) | YES |
| IndicatorTwo | char(1) | YES |
| EffectiveTagNumber | smallint(5) | NO |


### Polaris.Polaris.BibliographicSubfields

| Column | Type | Nullable |
|--------|------|----------|
| BibliographicSubfieldID | int(10) | NO |
| BibliographicTagID | int(10) | NO |
| SubfieldSequence | smallint(5) | NO |
| Subfield | char(1) | YES |
| Data | nvarchar(4000) | YES |
| NumberOfNonFilingCharacters | tinyint(3) | NO |


### Polaris.Polaris.SysHoldRequests

| Column | Type | Nullable |
|--------|------|----------|
| SysHoldRequestID | int(10) | NO |
| Sequence | int(10) | NO |
| PatronID | int(10) | NO |
| PickupBranchID | int(10) | NO |
| SysHoldStatusID | int(10) | NO |
| RTFCyclesPrimary | int(10) | NO |
| CreationDate | datetime | YES |
| ActivationDate | datetime | YES |
| ExpirationDate | datetime | YES |
| LastStatusTransitionDate | datetime | YES |
| LCCN | nvarchar(40) | YES |
| PublicationYear | smallint(5) | YES |
| ISBN | nvarchar(50) | YES |
| ISSN | nvarchar(50) | YES |
| ItemBarcode | nvarchar(20) | YES |
| BibliographicRecordID | int(10) | YES |
| TrappingItemRecordID | int(10) | YES |
| StaffDisplayNotes | nvarchar(255) | YES |
| NonPublicNotes | nvarchar(255) | YES |
| PatronNotes | nvarchar(255) | YES |
| MessageID | uniqueidentifier | YES |
| HoldTillDate | datetime | YES |
| Origin | smallint(5) | YES |
| Series | nvarchar(255) | YES |
| Pages | nvarchar(255) | YES |
| CreatorID | int(10) | YES |
| ModifierID | int(10) | YES |
| ModificationDate | datetime | YES |
| Publisher | nvarchar(40) | YES |
| Edition | nvarchar(10) | YES |
| VolumeNumber | nvarchar(60) | YES |
| HoldNotificationDate | datetime | YES |
| DeliveryOptionID | int(10) | YES |
| Suspended | bit | YES |
| UnlockedRequest | bit | NO |
| RTFCyclesSecondary | int(10) | NO |
| RTFCycle | tinyint(3) | NO |
| PrimaryRandomStartSequence | int(10) | NO |
| SecondaryRandomStartSequence | int(10) | NO |
| PrimaryMARCTOMID | tinyint(3) | YES |
| ISBNNormalized | nvarchar(50) | YES |
| ISSNNormalized | nvarchar(50) | YES |
| Designation | nvarchar(780) | YES |
| ItemLevelHold | bit | NO |
| ItemLevelHoldItemRecordID | int(10) | YES |
| BorrowByMailRequest | bit | NO |
| PACDisplayNotes | nvarchar(255) | YES |
| TrackingInfo | nvarchar(100) | YES |
| HoldNotification2ndDate | datetime | YES |
| ConstituentBibRecordID | int(10) | YES |
| PrimaryRTFBeginDate | datetime | YES |
| PrimaryRTFEndDate | datetime | YES |
| SecondaryRTFBeginDate | datetime | YES |
| SecondaryRTFEndDate | datetime | YES |
| NotSuppliedReasonCodeID | int(10) | YES |
| NewPickupBranchID | int(10) | YES |
| HoldPickupAreaID | int(10) | YES |
| NewHoldPickupAreaID | int(10) | YES |
| FeeInserted | bit | NO |
| RTFCyclesTertiary | tinyint(3) | NO |
| TertiaryRTFBeginDate | datetime | YES |
| TertiaryRTFEndDate | datetime | YES |
| TertiaryRandomStartSequence | int(10) | NO |


### Polaris.Polaris.SysHoldHistory

| Column | Type | Nullable |
|--------|------|----------|
| SysHoldRequestID | int(10) | NO |
| SysHoldStatusID | int(10) | NO |
| StatusTransitionDate | datetime | NO |
| CreatorID | int(10) | NO |
| ItemRecordID | int(10) | YES |
| ActionTakenID | int(10) | YES |
| OrganizationID | int(10) | YES |
| WorkstationID | int(10) | YES |
| SysHoldHistoryID | int(10) | NO |


### Polaris.Polaris.PatronAccount

| Column | Type | Nullable |
|--------|------|----------|
| TxnID | int(10) | NO |
| PatronID | int(10) | NO |
| TxnCodeID | int(10) | NO |
| FeeReasonCodeID | int(10) | YES |
| TxnAmount | money(19) | NO |
| OutstandingAmount | money(19) | YES |
| ItemRecordID | int(10) | YES |
| TxnDate | datetime | NO |
| PaymentMethodID | int(10) | YES |
| OrganizationID | int(10) | NO |
| WorkStationID | int(10) | YES |
| CreatorID | int(10) | NO |
| CheckOutDate | datetime | YES |
| DueDate | datetime | YES |
| FreeTextNote | nvarchar(255) | YES |
| ILSStoreTransactionID | int(10) | YES |
| LoaningOrgID | int(10) | YES |
| ItemAssignedBranchID | int(10) | YES |
| PatronBranchID | int(10) | YES |
| LoanUnit | int(10) | YES |
| FineFreeUnits | int(10) | YES |
| FineDeducted | money(19) | YES |
| FineIsCapped | bit | YES |
| BillingStatusID | int(10) | YES |
| BaseAmount | money(19) | YES |
| TaxRateID | int(10) | YES |
| AppliedTaxRate | decimal(5) | YES |
| AppliedTaxAmount | money(19) | YES |
| AppliedTaxRateDescription | nvarchar(80) | YES |


### Polaris.Polaris.ItemRecordHistory

| Column | Type | Nullable |
|--------|------|----------|
| ItemRecordHistoryID | int(10) | NO |
| ItemRecordID | int(10) | NO |
| TransactionDate | datetime | NO |
| ActionTakenID | int(10) | NO |
| OldItemStatusID | int(10) | NO |
| NewItemStatusID | int(10) | NO |
| AssignedBranchID | int(10) | NO |
| InTransitRecvdBranchID | int(10) | YES |
| PatronID | int(10) | YES |
| OrganizationID | int(10) | NO |
| PolarisUserID | int(10) | NO |
| WorkstationID | int(10) | YES |


### Polaris.Polaris.PatronReadingHistory

| Column | Type | Nullable |
|--------|------|----------|
| PatronID | int(10) | NO |
| ItemRecordID | int(10) | YES |
| CheckOutDate | datetime | NO |
| LoaningOrgID | int(10) | NO |
| BrowseAuthor | nvarchar(255) | YES |
| BrowseTitle | nvarchar(255) | YES |
| PrimaryMARCTOMID | tinyint(3) | YES |
| Notes | nvarchar(255) | YES |
| TitleRatingID | int(10) | YES |
| PatronReadingHistoryID | int(10) | NO |


### Polaris.Polaris.RecordSets

| Column | Type | Nullable |
|--------|------|----------|
| RecordSetID | int(10) | NO |
| Name | nvarchar(80) | NO |
| ObjectTypeID | int(10) | NO |
| CreatorID | int(10) | NO |
| ModifierID | int(10) | YES |
| OrganizationOwnerID | int(10) | YES |
| CreationDate | datetime | NO |
| ModificationDate | datetime | YES |
| Note | nvarchar(255) | YES |
| RecordStatusID | int(10) | NO |


### Polaris.Polaris.BibRecordSets

| Column | Type | Nullable |
|--------|------|----------|
| BibliographicRecordID | int(10) | NO |
| RecordSetID | int(10) | NO |


### Polaris.Polaris.ItemRecordSets

| Column | Type | Nullable |
|--------|------|----------|
| ItemRecordID | int(10) | NO |
| RecordSetID | int(10) | NO |


### Polaris.Polaris.PatronRecordSets

| Column | Type | Nullable |
|--------|------|----------|
| RecordSetID | int(10) | NO |
| PatronID | int(10) | NO |


### Polaris.Polaris.PolarisUsers

| Column | Type | Nullable |
|--------|------|----------|
| PolarisUserID | int(10) | NO |
| OrganizationID | int(10) | NO |
| Name | nvarchar(50) | NO |
| BranchID | int(10) | YES |
| Enabled | bit | NO |
| CreatorID | int(10) | NO |
| ModifierID | int(10) | YES |
| CreationDate | datetime | YES |
| ModificationDate | datetime | YES |
| NetworkDomainID | int(10) | YES |
| RecordStatusID | int(10) | NO |
| ExternalID | nvarchar(100) | YES |
| LastLoginDate | datetime | YES |


### Polaris.Polaris.Organizations

| Column | Type | Nullable |
|--------|------|----------|
| OrganizationID | int(10) | NO |
| ParentOrganizationID | int(10) | YES |
| OrganizationCodeID | int(10) | NO |
| Name | nvarchar(50) | NO |
| Abbreviation | nvarchar(15) | YES |
| SA_ContactPersonID | int(10) | NO |
| CreatorID | int(10) | NO |
| ModifierID | int(10) | YES |
| CreationDate | datetime | YES |
| ModificationDate | datetime | YES |
| DisplayName | nvarchar(50) | NO |


### Polaris.Polaris.RWRITER_BibDerivedDataView

| Column | Type | Nullable |
|--------|------|----------|
| BibliographicRecordID | int(10) | NO |
| NumberActiveHolds | int(10) | NO |
| NumberofItems | int(10) | NO |
| NumberLostItems | int(10) | NO |
| NumberClaimRetItems | int(10) | NO |
| NumberWithdrawnItems | int(10) | NO |
| NumberMissingItems | int(10) | NO |
| NumberSHRCopies | int(10) | NO |
| ReceivedIssues | int(10) | NO |
| BibLifetimeCircCount | int(10) | NO |
| BibYTDCircCount | int(10) | NO |
| BibLifetimeInHouseUseCount | int(10) | NO |
| BibYTDInHouseUseCount | int(10) | NO |
| BibLifetimeRenewalsCount | int(10) | NO |
| BibYTDRenewalsCount | int(10) | NO |


## Database: PolarisTransactions


### PolarisTransactions.Polaris.TransactionHeaders

| Column | Type | Nullable |
|--------|------|----------|
| TransactionID | int(10) | NO |
| OrganizationID | int(10) | NO |
| WorkstationID | int(10) | NO |
| PolarisUserID | int(10) | NO |
| TransactionDate | datetime | NO |
| TransactionTypeID | int(10) | NO |
| TranClientDate | datetime | NO |


### PolarisTransactions.Polaris.TransactionDetails

| Column | Type | Nullable |
|--------|------|----------|
| TransactionID | int(10) | NO |
| TransactionSubTypeID | int(10) | NO |
| numValue | int(10) | YES |
| dateValue | datetime | YES |
