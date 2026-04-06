# Polaris Database Lookup Values

Reference for all ID fields. Use these to translate numeric IDs into meaning.

When writing SQL, use the ID number in WHERE clauses (e.g. `ItemStatusID = '7'` for Lost).


## AddressTypes

- 1 = Generic
- 2 = Notice
- 3 = Invoice
- 4 = Statement
- 5 = Billing
- 6 = Shipping
- 7 = Claim Response
- 8 = Corporation
- 9 = Claiming
- 10 = Ordering
- 11 = Payment
- 12 = Mailing
- 13 = Receiving


## BlockTypes

- 1 = User
- 2 = Library
- 3 = System


## Collections

- 1 = Adult Biography
- 2 = Adult Business Reference
- 3 = Adult Fiction
- 4 = Adult Graphic Novel
- 5 = Adult Horror
- 6 = Adult Languages
- 8 = Adult Magazine
- 9 = Adult Music CD
- 10 = Adult Mystery
- 11 = Adult Non-Fiction
- 13 = Adult Reference
- 14 = Adult Reference Desk
- 15 = Adult Romance
- 17 = Adult Short Stories
- 18 = Adult Talking Book
- 19 = Adult DVD Fiction
- 20 = Adult DVD Non-Fiction
- 21 = Local History
- 23 = Large Print Biography
- 24 = Large Print Fiction
- 25 = Large Print Non-Fiction
- 27 = Outreach Magazine
- 29 = Teen Anime
- 30 = Teen Biography
- 31 = Teen Fiction
- 32 = Teen Non-Fiction
- 33 = TeenTalking Book
- 34 = Teen Video Game
- 35 = Youth Biography
- 36 = Youth Board Book
- 39 = Youth DVD
- 40 = Youth Fiction
- 42 = Youth Graphic Novel
- 44 = Youth Illustrated Fiction
- 50 = Youth Magazine
- 51 = Youth Middle School
- 53 = Youth Middle School Talking Book
- 54 = Youth Music CD
- 56 = Youth Newbery / Caldecott Collection (Ref)
- 57 = Youth Non-Fiction
- 58 = Youth Parent Teacher
- 59 = Youth Picture Book
- 60 = Youth Reader
- 61 = Youth Reference
- 62 = Youth Reference Desk
- 63 = Youth Scouting
- 64 = Youth Talking Book
- 66 = Youth World Languages
- 67 = Professional Collection
- 68 = Closed Shelf
- 69 = Electronic Collection - available online
- 70 = Youth Puppets
- 71 = Teen Graphic Novels
- 73 = Newspaper
- 74 = Teen Magazine
- 75 = Adult Playaway Digital Audio
- 76 = Adult Fantasy
- 77 = Adult Science Fiction
- 78 = Teen Playaway Digital Audio
- 80 = Youth Pop-Up books
- 82 = Youth Parent Teacher Reference
- 84 = Low Vision Aid
- 85 = Museum Adventure Pass
- 86 = Youth 100 Books
- 87 = Unknown
- 90 = Library Bag
- 92 = on-the-fly
- 95 = Teen Music CD
- 98 = Youth Buddy Box
- 100 = Youth School Supply Kit
- 101 = Adult Video Game
- 102 = Youth Board Game
- 103 = Outreach MYLE kit
- 104 = Adult Book Discussion Kit
- 105 = Youth Findaway
- 107 = Adult Findaway
- 108 = Teen Findaway
- 109 = Adult Findaway Language
- 110 = Adult Hot New Books
- 111 = Adult Kits
- 113 = Mobile Hotspots
- 114 = Adult Foreign Language Films
- 115 = Adult TV Series
- 116 = Adult Feature Films
- 117 = INTERLOANS
- 118 = Outreach  DVD
- 119 = Listening Library
- 120 = Regular Print Fiction
- 121 = Regular Print Non-Fiction
- 123 = Adult Makerspace
- 124 = Laptops
- 125 = Adult Buzz Reads
- 126 = Innovative Items
- 127 = Adult Local Author
- 128 = Adult Citizenship
- 129 = IIC - Adaptability
- 130 = IIC - Arts & Crafts
- 131 = IIC - Electronics & Technology
- 132 = IIC - Experiences
- 133 = IIC - Games: Outdoor
- 134 = IIC - Household
- 135 = IIC - Music
- 136 = IIC - Science & Education
- 137 = IIC - Tools
- 138 = Youth Local Author
- 139 = Youth Local Author
- 140 = Youth Middle School Graphic Novel


## FeeReasonCodes

- -12 = Missing Parts
- -11 = Check Out Charge
- -10 = Borrow By Mail Charge
- -9 = Patron Registration Fee
- -8 = Polaris Fusion Purchase
- -7 = Credit Card Processing Charge
- -6 = Processing Charge
- -5 = Overpayment
- -4 = Credit Refund
- -3 = Hold Request
- -2 = COLLECTION AGENCY
- -1 = Replacement Cost
- 0 = Overdue Item Fee
- 1 = Damaged Item
- 2 = Claimed Return Fee
- 3 = Other Fee
- 4 = Lost Item
- 5 = Lost Card
- 6 = MelCat overdue
- 7 = Library bag purchase
- 8 = NSF check return
- 9 = returned check fee
- 10 = Administrative fee for Claimed items
- 11 = Failed Credit Card Transaction
- 12 = Misplaced item searching fee
- 13 = Lost MeLCat
- 14 = Print Request
- 15 = Unattended Children After Close
- 16 = Missing Piece
- 17 = Eureka Lab Material Cost


## FineCodes

- 1 = $0.25 / $10.00
- 2 = $1.00 / $10.00
- 3 = $1.00 / $15.00
- 4 = $1.00 / $50.00
- 5 = Removed #1
- 6 = Removed #2
- 7 = Removed #3
- 8 = $0.25 / $3.00
- 9 = $0.25 / $25.00
- 10 = $1.00 / $100.00
- 11 = $5.00 / $75.00
- 12 = $1.00 / $25.00
- 13 = $1.00 / $40.00
- 14 = $1.00 / $35.00
- 15 = $5.00 / $100.00
- 16 = $0.25 / $15.00
- 17 = $0.25 / $40.00
- 18 = $0.25 / $100.00
- 19 = $0.25 / $50.00


## Genders

- 1 = N/A
- 2 = Female
- 3 = Male


## ItemRecordHistoryActions

- 1 = Created via Acquisitions PO Line Item processing
- 2 = Created via Acquisitions Invoice processing
- 3 = Modified via PO Line Item Receive processing
- 4 = Modified via PO Line Item Segment Undo Receipt processing
- 5 = Created via ILL processing
- 6 = Created via Cataloging
- 7 = Created via NCIP create processing
- 8 = Modified via Item Bulk Change
- 9 = Modified via Cataloging
- 10 = Modified via NCIP accept item processing
- 11 = Checked in
- 12 = Checked in - item was previously lost by the patron
- 13 = Checked out
- 14 = Declared lost
- 15 = Claim was deleted
- 16 = Claim was made by the patron
- 17 = Circulation status modified via Manage Item dialog from Check In
- 18 = Shelf location modified via Manage Item dialog from Check In
- 19 = Returned via ILL processing
- 20 = Item was removed from a course reserve record and moved to another branch
- 21 = Modified via PO Line Item Segment Receive processing
- 22 = Automatic status change from Check In
- 23 = Modified by automatic billed to lost processing
- 24 = Circulation status modified because item was held and request pickup branch was modified
- 25 = Item was added to a route list
- 26 = Circulation status modified by modification of linked route list piece
- 27 = Modified via Floating Collections processing
- 28 = Renewal
- 29 = Transferred due to hold request
- 30 = Transferred due to ILL request
- 31 = Created via Acquisitions
- 32 = Created via Circulation
- 33 = Created via Serials
- 34 = Marked for deletion
- 35 = Undeleted
- 36 = Checked in via In House
- 37 = Inventory date was updated
- 38 = Barcode replaced via Check In
- 39 = Non public note modified via Manage Item dialog from Check In
- 40 = Free text block modified via Manage Item dialog from Check In
- 41 = Library assigned block modified via Manage Item dialog from Check In
- 42 = Assigned collection modified via Manage Item dialog from Check In
- 43 = Material type modified via Manage Item dialog from Check In
- 44 = Bulk checked out via Outreach Services
- 45 = Bulk checked out via Borrow by Mail
- 46 = Modified via Receive Shipment
- 47 = Linked to new bib
- 48 = Linked to new bib via Serials
- 49 = First overdue notice: Mail
- 50 = First overdue notice: Email
- 51 = First overdue notice: Phone
- 52 = First overdue notice: Text Message
- 53 = Second overdue notice: Mail
- 54 = Second overdue notice: Email
- 55 = Second overdue notice: Phone
- 56 = Second overdue notice: Text Message
- 57 = Third overdue notice: Mail
- 58 = Third overdue notice: Email
- 59 = Third overdue notice: Phone
- 60 = Third overdue notice: Text Message
- 61 = Bill notice: Mail
- 62 = Bill notice: Email
- 63 = Bill notice: Phone
- 64 = Bill notice: Text Message
- 65 = Due date reset
- 66 = Held for hold request
- 67 = Held for ILL request
- 68 = Reminder notice: Mail
- 69 = Reminder notice: Email
- 70 = Reminder notice: Phone
- 71 = Reminder notice: Text Message
- 72 = Inventory date was updated - Offline
- 73 = Renewal - PAC
- 74 = Renewal - Phone
- 75 = Checked out - Self Check
- 76 = Renewal - Self Check
- 77 = Checked out - Offline
- 78 = Checked out - PAC
- 79 = Checked out - Mobile PAC
- 80 = Renewal - Mobile PAC
- 81 = Checked out - Third party software
- 82 = Renewal - Third party software
- 83 = Added copy created by API consumer service
- 84 = Item was unlinked from a bibliographic resource entity.
- 85 = Item was transferred to a different bibliographic resource entity.
- 86 = Modified by API consumer service
- 87 = Circulation status modified via Lost Item Transition processing
- 88 = Circulation status modified via Missing Item Transition processing
- 89 = Checked out by associated patron - Self Check
- 90 = Checked out by associated patron - Offline
- 91 = Checked out by associated patron
- 92 = Modified via special item check-in
- 93 = Renewal - Auto-renew
- 94 = Item was shipped to a Resource Sharing library
- 95 = ILL Item to be Returned Uncirculated
- 96 = Item was received at a Resource Sharing library
- 97 = Returning In-Transit from a Resource Sharing library
- 98 = Modified via PO Line Change Fund processing
- 99 = Circulation status modified via Picklist processing
- 100 = Modified via hold cancellation processing
- 101 = Checked out by a Resource Sharing visiting patron
- 102 = First overdue notice: Mobile App
- 103 = Second overdue notice: Mobile App
- 104 = Third overdue notice: Mobile App
- 105 = Bill notice: Mobile App
- 106 = Reminder notice: Mobile App
- 107 = Circulation status modified by Weeding processing
- 108 = Circulation status modified via Damaged Item processing
- 109 = Declared damaged
- 110 = Modified via Display Processing
- 111 = Checked in - Offline


## ItemStatuses

- 1 = In
- 2 = Out
- 3 = Out-ILL
- 4 = Held
- 5 = Transferred
- 6 = In-Transit
- 7 = Lost
- 8 = Claim Returned
- 9 = Claim Never Had
- 10 = Missing
- 11 = Withdrawn
- 12 = Weeded
- 13 = On-Order
- 14 = Repair
- 15 = In-Process
- 16 = Unavailable
- 17 = Returned-ILL
- 18 = Routed
- 19 = Shelving cart
- 20 = Non-circulating
- 21 = Claim Missing Parts
- 22 = EContent External Loan
- 23 = Damaged


## Languages

- 1 = English
- 2 = Spanish
- 3 = German
- 4 = French
- 5 = Italian
- 6 = Hebrew
- 7 = Hungarian
- 8 = Chinese
- 9 = Polish
- 10 = Korean
- 11 = Japanese
- 12 = Arabic
- 13 = Greek
- 14 = Romanian
- 15 = Portuguese
- 16 = Vietnamese
- 17 = Russian
- 18 = Albanian
- 19 = Armenian
- 20 = Bengali
- 21 = Bosnian
- 22 = Bulgarian
- 23 = Czech
- 24 = Dutch
- 25 = Gujarati
- 26 = Hindi
- 27 = Kannada
- 28 = Marathi
- 29 = Persian
- 30 = Panjabi
- 31 = Serbian
- 32 = Tamil
- 33 = Telugu
- 34 = Thai
- 35 = Urdu
- 36 = Hawaiian
- 37 = Haitian Creole
- 38 = Somali
- 39 = Tagalog
- 40 = Filipino
- 41 = Khmer
- 42 = Malay
- 43 = Other
- 44 = Catalan
- 45 = Occitan
- 46 = Swedish
- 47 = Afrikaans
- 48 = Ukrainian


## MaterialTypes

- 1 = Book
- 2 = Audiobook (CD)
- 4 = Book Discussion Book
- 5 = Music (CD)
- 6 = DVD/Blu-ray - Feature Length
- 8 = Kit
- 9 = Circulating Periodical
- 10 = Puppet
- 13 = Video Game
- 14 = Newspaper
- 15 = DELETE - Playaway
- 16 = eBook
- 17 = Book Discussion Kit
- 18 = Low Vision Aid
- 20 = Library cloth bag
- 23 = Laptop
- 25 = eAudio Book
- 26 = DELETE - Tablet -launchpad
- 27 = DELETE - View- video player
- 28 = Tech Kits
- 30 = Blu-ray
- 31 = DELETE - ILL21day
- 32 = DELETE - ILL 07 day
- 33 = ILL28day
- 34 = ILL14day
- 37 = Books in demand
- 39 = Reference Book
- 42 = DVD/Blu-ray - television series
- 43 = Hooked on Phonics
- 44 = Playaway Audiobook
- 45 = Playaway Launchpad
- 46 = Playaway View
- 47 = Adventure Kit
- 48 = Game Kit
- 49 = Hobby Kit
- 50 = Outreach MYLE Kit
- 51 = Puzzles Kit
- 52 = Steam Kit
- 53 = Story Kit
- 54 = DELETE - Tech Kit


## NotificationTypes

- 0 = Combined
- 1 = 1st Overdue
- 2 = Hold
- 3 = Cancel
- 4 = Recall
- 5 = All
- 6 = Route
- 7 = Almost overdue/Auto-renew reminder
- 8 = Fine
- 9 = Inactive Reminder
- 10 = Expiration Reminder
- 11 = Bill
- 12 = 2nd Overdue
- 13 = 3rd Overdue
- 14 = Serial Claim
- 15 = Polaris Fusion Access Request Responses
- 16 = Course Reserves
- 17 = Borrow-By-Mail Failure Notice
- 18 = 2nd Hold
- 19 = Missing Part
- 20 = Manual Bill
- 21 = 2nd Fine Notice


## Organizations

- 4 = Bookmobile (Van)
- 7 = Books by Mail
- 5 = Drive-Up Window
- 15 = Innovative Items Collection
- 6 = Kids’ Bus
- 16 = LX Starter Test
- 3 = Main Library
- 8 = Mini-Branch - Avon on the Lake
- 9 = Mini-Branch - Avon Tower
- 12 = Mini-Branch - Bellbrook
- 11 = Mini-Branch - Danish Village
- 10 = Mini-Branch - OPC
- 13 = Mini-Branch - Waltonwood
- 14 = Resting
- 2 = Rochester Hills
- 1 = Rochester Hills Public Library


## PatronAccTxnCodes

- 1 = Charge
- 2 = Pay
- 3 = Return
- 4 = Deposit
- 5 = Waive
- 6 = Waive
- 7 = Forfeit
- 8 = Credit
- 9 = Refund
- 10 = Auto-waive


## PatronCodes

- 1 = Resident
- 2 = Non-Resident
- 3 = Business
- 4 = MILibrary
- 6 = Home Delivery
- 7 = Staff
- 8 = College Student
- 9 = Collection Agency
- 14 = Rochester Student - non public school
- 15 = eCard - Digital Only
- 17 = Not Eligible
- 19 = In-Library Staff Use
- 20 = Minor Resident no CKO
- 22 = Computer Guest Account
- 24 = OTBS
- 25 = ILL -melcat
- 26 = RCS
- 27 = RCS no check out
- 29 = OTBS - Non-Resident


## RecordStatuses

Applies to BibliographicRecords, CircItemRecords, Patrons, and other record types.
WARNING: "Final" = ACTIVE (fully cataloged/published) — NOT deleted. RecordStatusID=4 = soft-deleted.

- 1 = Final  (active, fully cataloged/published — the normal operational state)
- 2 = Provisional
- 3 = Secured
- 4 = Deleted  (soft-deleted — record remains in table but is marked inactive)


## ShelfLocations

- 1 = Holiday Kit
- 1 = Language Kit
- 1 = Language Kit
- 2 = Picture Book Kit
- 2 = Picture Book Kit
- 2 = Atlas Case
- 2 = Atlas Case
- 3 = Fairy Tale Kit
- 3 = New Releases
- 3 = New Releases
- 4 = Readers Kit
- 4 = New Releases - Fiction
- 4 = New Releases - Fiction
- 5 = Language Kit
- 5 = Language Kit
- 5 = New Releases - Non-Fiction
- 5 = New Releases - Non-Fiction
- 6 = Non-Fiction Kit
- 6 = Oversize
- 6 = Oversize
- 7 = Atlas Case
- 7 = Ask at Outreach Services Desk
- 7 = Ask at Outreach Services Desk
- 8 = New Releases
- 8 = New Releases
- 8 = Ask at Adult Services Desk
- 8 = Ask at Adult Services Desk
- 9 = New Releases - Fiction
- 9 = New Releases - Fiction
- 9 = Ask at Youth Services Desk
- 9 = Ask at Youth Services Desk
- 10 = New Releases - Non-Fiction
- 10 = New Releases - Non-Fiction
- 10 = Storytime Room Ask at Youth Services Desk
- 10 = Storytime Room Ask at Youth Services Desk
- 11 = Foreign Language Films
- 11 = Foreign Language Films
- 12 = Oversize
- 12 = Big Books
- 12 = Big Books
- 13 = Bookmobile Storage Please see a Librarian
- 13 = Bookmobile Storage Please see a Librarian
- 13 = Learning Props
- 13 = Learning Props
- 14 = Ask at Outreach Services Desk
- 14 = Outreach Workroom
- 14 = Hooked on Phonics
- 14 = Hooked on Phonics
- 15 = Ask at Adult Services Desk
- 15 = Kids Bus Storage
- 15 = Kids Bus Storage
- 15 = Big Concerns for Little People
- 15 = Big Concerns for Little People
- 16 = Ask at Youth Services Desk
- 16 = Youth Wonderbook
- 16 = Summer Kids' Bus
- 16 = Ask at Checkout Desk
- 16 = Ask at Checkout Desk
- 17 = Lobby Cart
- 17 = Magazine Alcove Storage
- 17 = Magazine Alcove Storage
- 18 = Storytime Room Ask at Youth Services Desk
- 18 = Van
- 18 = Second floor
- 18 = Second floor
- 19 = Summer Kids' Bus
- 19 = Kids Bus Storage
- 19 = Kids Bus Storage
- 20 = Foreign Language Films
- 20 = Middle School Graphic Novels
- 20 = Middle School Graphic Novels
- 21 = Youth New Releases
- 21 = Youth New Releases
- 22 = STEAM Kit
- 22 = STEAM Kit
- 23 = Youth VOX
- 23 = Youth VOX
- 24 = Big Books
- 24 = AFS
- 24 = AFS
- 25 = Learning Props
- 25 = AMS
- 25 = AMS
- 26 = Hooked on Phonics
- 26 = 4K Blu-ray
- 26 = 4K Blu-ray
- 27 = Big Concerns for Little People
- 27 = Makerspace
- 27 = Makerspace
- 28 = Ask at Checkout Desk
- 28 = Reader Phonics Shelf
- 28 = 2nd Floor Computer Help Desk
- 29 = Magazine Alcove Storage
- 31 = Second floor
- 32 = Kids Bus Storage
- 33 = Middle School Graphic Novels
- 34 = Youth New Releases
- 35 = STEAM Kit
- 36 = Youth VOX
- 37 = AFS
- 38 = AMS
- 39 = 4K Blu-ray
- 40 = Makerspace
- 41 = 2nd Floor Computer Help Desk
- 42 = Reader Phonics Shelf
- 43 = Adult Display


## StatisticalCodes

- 1 = Book Discussion Books
- 1 = Book Discussion Books
- 1 = Book Discussion Books
- 1 = Book Discussion Books
- 1 = Book Discussion Books
- 1 = Book Discussion Books
- 1 = Book Discussion Books
- 2 = Bookmobile
- 2 = Bookmobile
- 2 = Bookmobile
- 2 = Bookmobile
- 2 = Bookmobile
- 2 = Bookmobile
- 2 = Bookmobile
- 3 = Teen Graphic Novels
- 3 = Teen Graphic Novels
- 3 = Teen Graphic Novels
- 3 = Teen Graphic Novels
- 3 = Teen Graphic Novels
- 3 = Teen Graphic Novels
- 3 = Teen Graphic Novels
- 4 = Large Print
- 4 = Large Print
- 4 = Large Print
- 4 = Large Print
- 4 = Large Print
- 4 = Large Print
- 4 = Large Print
- 5 = Teen print
- 5 = Teen print
- 5 = Teen print
- 5 = Teen print
- 5 = Teen print
- 5 = Teen print
- 5 = Teen print
- 6 = Teen Audio visual
- 6 = Teen Audio visual
- 6 = Teen Audio visual
- 6 = Teen Audio visual
- 6 = Teen Audio visual
- 6 = Teen Audio visual
- 6 = Teen Audio visual
- 7 = Magazine
- 7 = Museum Adventure Pass
- 7 = Magazine
- 7 = Museum Adventure Pass
- 7 = Museum Adventure Pass
- 7 = Magazine
- 7 = Magazine
- 8 = Newspaper
- 8 = Newspaper
- 8 = Kids' Bus
- 8 = Newspaper
- 8 = Makerspace
- 9 = Museum Adventure Pass
- 9 = Museum Adventure Pass
- 9 = Museum Adventure Pass
- 9 = Newspaper
- 10 = Overdrive
- 10 = Overdrive
- 10 = Museum Adventure Pass
- 11 = Makerspace
- 11 = Makerspace
- 11 = Overdrive


## SysHoldHistoryActions

- 1 = Request activated during request creation
- 2 = Request reactivated during RTF processing
- 3 = Request reactivated because one item was denied for a branch in RTF
- 4 = Request reactivated because all items were denied for a branch in RTF
- 5 = Request reactivated during circulation processing
- 6 = Primary RTF processing placed request on pick list
- 7 = Request cancelled manually
- 8 = Request cancelled due to item record deletion
- 9 = Request was made inactive during request creation
- 10 = Request was made inactive because activation date modified
- 11 = Request was shipped to the pickup branch
- 12 = An item has trapped and is being held for this request
- 13 = An item was held but not claimed by the patron
- 14 = Request has reached the expiration date
- 15 = Request is not supplied
- 16 = Request is not supplied because the item was denied
- 17 = Request is not supplied because item was declared lost manually
- 18 = Request is not supplied because the item is not holdable
- 19 = Request is not supplied because no bib record exists
- 20 = Request is not supplied because the system determined no items were available for this patron
- 21 = An item linked to this request has been checked out
- 22 = Request is not supplied due to bib record deletion
- 23 = An item was located for this request
- 24 = Request placed on a pick list as a result of a located item returned to RTF processing
- 25 = Secondary RTF processing placed request on pick list
- 26 = Request reactivated as a result of ask me later processing
- 27 = Primary RTF processing placed request on pick list - primary RTF routing cycle completed
- 28 = Secondary RTF processing placed request on pick list - secondary RTF routing cycle completed
- 29 = Secondary RTF processing placed request on pick list - primary RTF routing cycle completed
- 30 = Request reactivated during RTF processing - primary RTF routing cycle completed
- 31 = Request reactivated during RTF processing - secondary RTF routing cycle completed
- 32 = Request reactivated during RTF processing - primary RTF routing cycle completed and moved to secondary RTF
- 33 = Request is not supplied due to item record deletion
- 34 = Request cancelled due to patron merge
- 35 = Request reactivated by system processing
- 36 = Request reactivated due to item record deletion
- 37 = Request reactivated because activation date modified
- 38 = Request cancelled by patron via self check
- 39 = Request reactivated manually by user
- 40 = Request pickup branch was modified
- 41 = Request is not supplied because overdue item was billed and declared lost
- 42 = Request cancelled by patron via Mobile Pac
- 43 = Request cancelled by patron via Power Pac
- 44 = An item record creation resulted in the request being placed on pick list
- 45 = An item record modification resulted in the request being placed on pick list
- 46 = An item record modification resulted in the completion of the RTF routing cycle
- 47 = Request satisfied by associated patron
- 48 = Item was shipped to an INN-Reach library
- 49 = Item was received at an INN-Reach library
- 50 = Request cancelled via INN-Reach
- 51 = Request cancelled by patron via third party software
- 52 = Request transferred to new bibliographic record
- 53 = Request transferred to new item record
- 54 = Request pickup area was modified
- 55 = Request reactivated during RTF processing - tertiary RTF routing cycle completed
- 56 = Request reactivated during RTF processing - primary RTF routing cycle completed and moved to tertiary RTF
- 57 = Request reactivated during RTF processing - secondary RTF routing cycle completed and moved to tertiary RTF
- 58 = Tertiary RTF processing placed request on pick list
- 59 = Tertiary RTF processing placed request on pick list - tertiary RTF routing cycle complete
- 60 = Tertiary RTF processing placed request on pick list - secondary RTF routing cycle completed


## SysHoldReasonCodes

- 1 = Barcode not found
- 2 = ISBN not found
- 3 = ISSN not found
- 4 = LCCN not found
- 5 = Title not found
- 6 = Author not found
- 7 = Format not found
- 8 = Publication year not found
- 9 = Not owned
- 10 = Not found as cited
- 11 = Non-circulating
- 12 = Not yet available
- 13 = Not holdable
- 14 = No items available
- 15 = Item was lost
- 16 = Record deleted


## SysHoldStatuses

- 1 = Inactive
- 3 = Active
- 4 = Pending
- 5 = Shipped
- 6 = Held
- 7 = Not Supplied
- 8 = Unclaimed
- 9 = Expired
- 16 = Cancelled
- 17 = Out
- 18 = Located


## TransactionSubTypeCodes

- 105 = check
- 105 = voucher
- 124 = Renewal
- 128 = Normal
- 128 = Bulk Check in
- 128 = Inventory
- 128 = Renewal stopped, item Held Checkin
- 128 = Quick Check in
- 128 = In house check in
- 128 = Offline Check in
- 128 = Offline Inventory checkin
- 128 = Self Check in
- 128 = Offline quick Check in
- 128 = SelfCheck CheckIn to cancel Checkout
- 128 = Checkin Normal Quick-circ
- 128 = Checkin Bulk Quick-circ
- 128 = Checkin SelfCheck Quick-circ
- 128 = Checkin Offline Quick-circ
- 128 = Checkin Receive Shipment
- 128 = Power PAC Checkin
- 128 = Mobile PAC Checkin
- 128 = Third party Checkin
- 128 = Claims view check-in
- 128 = Leap Check in
- 128 = Checkin Leap Quick-circ
- 128 = Checkin Leap Bulk Quick-circ
- 128 = Checkin Leap Bulk
- 128 = Checkin Leap In House
- 128 = Checkin Leap Inventory
- 145 = Offline Check out
- 145 = Self check Check out
- 145 = Power PAC Renewal
- 145 = Active PAC Renewal
- 145 = Circ Checkout and Renewal
- 145 = Third party renewal
- 145 = Inbound Telephony Checkout
- 145 = SelfCheck Checkout to cancel CheckIn
- 145 = Checkout Normal Quick-circ
- 145 = Checkout SelfCheck Quick-circ
- 145 = Checkout Offline Quick-circ
- 145 = Checkout Bulk Outreach Services
- 145 = Checkout Bulk Borrow By Mail
- 145 = Mobile PAC Renewal
- 145 = Power PAC Checkout
- 145 = Mobile PAC Checkout
- 145 = Third party Checkout
- 145 = Auto-renewal
- 145 = Leap Checkout and Renewal
- 145 = Checkout Leap Quick-circ
- 145 = INN-Reach Lending Checkout and Renewal
- 145 = Vega Renewal
- 145 = INN-Reach Visiting Patron Checkout
- 179 = Loan
- 179 = Copy
- 188 = Express Registration
- 188 = Offline Registration
- 188 = PAC Registration
- 188 = Normal Registration
- 188 = Third Party Registration
- 188 = MobilePAC Registration
- 188 = Leap Registration
- 188 = INNReach Virtual Patron
- 232 = PAC
- 232 = Staff Client
- 232 = Express Check
- 232 = MobilePAC
- 232 = Leap
- 235 = Staff Client
- 235 = PAC
- 235 = Express Check
- 235 = Third party software
- 235 = ILL NCIP
- 235 = LEAP
- 235 = INNReach
- 235 = Polaris Admin
- 272 = Denied by User
- 272 = Denied by System
- 272 = Denied by User (INN-Reach)
- 272 = Denied by System (INN-Reach)
- 304 = Ebook
- 304 = Audio ebook
- 304 = Digital video recording
