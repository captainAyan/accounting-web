# Accounting Web
## Introduction
Accounting Web is a double entry application. It is a web app made using the MERN stack. β οΈThis is name is temporary.
## Features
### Overview
The user can
1. Create ledgers π
2. Add entries π
3. View those entries π
4. View ledger balances βοΈ
5. View statements π
#### Limitations
1. Users cannot create more than **20 ledgers** and **100 entries**.
2. Users must normalize the ledger balances after reaching the limit
    - Once the user reaches the limit of 100 journal entries, they can normalize the account to keep using the app.
    - On normalizing the accounts, it'll calculate the balance of each and every ledger and store them in the database field *balance*.
    - *Current ledger balances* are not stored in the database. Instead, they are calculated each time the user requests for them.
    - This *balance* field will be taken in to account for further calculations of the *current ledger balance*.
