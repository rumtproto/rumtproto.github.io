---
title: "Telegram Passport Manual"
original: "https://core.telegram.org/passport"
section: other
description: "Telegram Passport is a unified authorization method for services that require personal identification. Users can upload their documents once, then instantly share their data with…"
crumbs: []
layout: layout.njk
---

# Telegram Passport Manual

**Telegram Passport** is a unified authorization method for services that require personal identification. Users can upload their documents once, then instantly share their data with services that require real-world ID (finance, ICOs, etc.). Telegram doesn't have access to the users' personal information thanks to end-to-end encryption.

### Overview

From the perspective of a service that requires real-world ID, the process looks like this:

-   A user presses "Log in with Telegram" on your **website** or in your **app**.
-   You [request](#requesting-information) the [data](#fields) you need.
-   The user accepts your [privacy policy](#privacy-policy) and agrees to share their data.
-   The user's Telegram app downloads and decrypts the data you requested from the end-to-end encrypted storage on Telegram.
-   If some of the data you requested is missing, the user can add it to their Telegram Passport at this point.
-   The user's app encrypts the data with your [public key](#generating-your-public-key) and sends it to you.
-   You [decrypt](#decrypting-data) the data, check it for [errors](#fixing-errors) and re-request any missing or invalid information.
-   You sign the user up for your service. **Tada!**

Check out [this example](/passport/example/) to see Telegram Passport in action.

> To learn more about Telegram Passport from the perspective of a user, please see [this blog post](/blog/passport/) and the [technical MTProto documentation](/api/passport/). See [this page](/passport/encryption/) if you're interested in encryption algorithms used on Telegram's side.

### Recent changes

#### August 25, 2018

**Telegram Passport 1.1** ([blog post](/blog/export-and-more/#improved-telegram-passport))

-   Added support for requesting **several documents of one type**. See the new objects [PassportScope](#passportscope), [PassportScopeElement](#passportscopeelement), [PassportScopeElementOneOfSeveral](#passportscopeelementone) and [PassportScopeElementOne](#passportscopeelementone).
-   Added support for **middle names**.
-   Added support for requesting certified **English translations** for documents (see [Fields](#fields); new field _translation_ also added to the [SecureValue](#securevalue) object). **Note:** Please only request translations _after_ you have received a valid document that requires one.
-   Added support for requesting **names** in the language of the user's country of residence (if other than English). New fields _first\_name\_native_, _last\_name\_native_ and _middle\_name\_native_ added to the [PersonalDetails](#personaldetails) object.
-   Replaced the _payload_ parameter with the new parameter _nonce_, which serves the same function, to make the purpose more obvious (see [Request Parameters](#request-parameters) and the [Credentials](#credentials) object).
-   Updated the [example page](/passport/example/) to support the new functionality.

### Setting Up Telegram Passport

To integrate Telegram Passport into your login or verification flow, you need a working Telegram bot (see [this page](/bots/#how-do-i-create-a-bot) for information on how to get one).

To request data from Telegram Passport users, your bot will need to generate a pair of encryption keys.

#### Generating a private key

First, use a console to generate a **private** key:

```
openssl genrsa 2048 > private.key
```

**WARNING: Keep your private key SECRET!**

#### Generating your public key

Then use the console to print the corresponding **public** key:

```
openssl rsa -in private.key -pubout
```

Use the **/setpublickey** command with [@BotFather](https://t.me/BotFather) to connect this public key with your bot.

#### Privacy Policy

Add a link to your Privacy Policy by using the **/setprivacypolicy** command. Users will see this link when offered to authorize you to access their data.

### Requesting Information

#### SDK

To request information stored in a Telegram Passport, use one of these **SDKs**:

-   [iOS/macOS SDK](/passport/sdk-ios-mac/)
-   [Android SDK](/passport/sdk-android/)
-   [Javascript SDK](/passport/sdk-javascript/)

#### Request Parameters

Use the following parameters to request information with the SDK:

<table class="table"><thead><tr><th scope="col">Parameters</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>bot_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the bot. You can get it from bot token. For example, for the bot token <code>1234567:4TT8bAc8GHUspu3ERYn-KGcvsvGB9u_n4ddy</code>, the bot id is <code>1234567</code>.</td></tr><tr><td>scope</td><td><a href="#passportscope">PassportScope</a></td><td>Yes</td><td>A JSON-serialized object describing the data you want to request</td></tr><tr><td>public_key</td><td>String</td><td>Yes</td><td>Public key of the bot</td></tr><tr><td>nonce</td><td>String</td><td>Yes</td><td>Bot-specified nonce. <strong>Important:</strong> For security purposes it should be a cryptographically secure unique identifier of the request. In particular, it should be long enough and it should be generated using a cryptographically secure pseudorandom number generator. You should never accept credentials with the same nonce twice.</td></tr></tbody></table>

#### PassportScope

This object represents the data to be requested.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>data</td><td>Array of <a href="#passportscopeelement">PassportScopeElement</a></td><td>List of requested elements, each type may be used only once in the entire array of PassportScopeElement objects</td></tr><tr><td>v</td><td>Integer</td><td>Scope version, must be <em>1</em></td></tr></tbody></table>

#### PassportScopeElement

This object represents a requested element, should be one of:

-   [PassportScopeElementOneOfSeveral](#passportscopeelementoneofseveral) - use to request any one of the documents included in the scope.
-   [PassportScopeElementOne](#passportscopeelementone) – use to request one particular document.

#### PassportScopeElementOneOfSeveral

This object represents several elements one of which must be provided.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>one_of</td><td>Array of <a href="#passportscopeelementone">PassportScopeElementOne</a></td><td>List of elements one of which must be provided; must contain either several of “passport”, “driver_license”, “identity_card”, “internal_passport” <strong>or</strong> several of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”</td></tr><tr><td>selfie</td><td>Boolean</td><td><em>Optional.</em> Use this parameter if you want to request a selfie with the document from this list that the user chooses to upload.</td></tr><tr><td>translation</td><td>Boolean</td><td><em>Optional.</em> Use this parameter if you want to request a translation of the document from this list that the user chooses to upload. <strong>Note:</strong> We suggest to only request translations <em>after</em> you have received a valid document that requires one.</td></tr></tbody></table>

#### PassportScopeElementOne

This object represents one particular element that must be provided. If no options are needed, _String_ can be used instead of this object to specify the type of the element.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Element type. One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport", "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration", "temporary_registration", "phone_number", "email"</td></tr><tr><td>selfie</td><td>Boolean</td><td><em>Optional.</em> Use this parameter if you want to request a selfie with the document as well. Available for "passport", "driver_license", "identity_card" and "internal_passport"</td></tr><tr><td>translation</td><td>Boolean</td><td><em>Optional.</em> Use this parameter if you want to request a translation of the document as well. Available for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration". <strong>Note:</strong> We suggest to only request translations <em>after</em> you have received a valid document that requires one.</td></tr><tr><td>native_names</td><td>Boolean</td><td><em>Optional.</em> Use this parameter to request the first, last and middle name of the user in the language of the user's country of residence. Available for "personal_details"</td></tr></tbody></table>

You can also use the special type "id\_document" as an alias for one of "passport", "driver\_license", "identity\_card" and the special type "address\_document" as an alias for one of "utility\_bill", "bank\_statement", "rental\_agreement". So `{"type":"id_document",selfie:true}` is equal to `{"one_of":["passport","driver_license","identity_card"],selfie:true}`.

#### Fields

Your bot can request personal details, one or several types of identity document, residential address, one or several types of proof of address document, a phone number, or an email address. You can also request optional **selfies** with the document and certified **English translations** of the document. This is just a list of data types that can be requested, and the encrypted objects that will contain such data.

> **Note:** We suggest to only request English translations _after_ you have received a valid document that requires one.

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col">Key</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>personal_details</td><td>data</td><td><a href="#personaldetails">PersonalDetails</a></td><td>Personal Details</td></tr><tr><td rowspan="4">passport</td><td>data</td><td><a href="#iddocumentdata">IdDocumentData</a></td><td rowspan="4">Passport</td></tr><tr><td>front_side</td><td><a href="#passportfile">PassportFile</a></td></tr><tr><td>selfie</td><td><i>Optional.</i> <a href="#passportfile">PassportFile</a></td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td rowspan="4">internal_passport</td><td>data</td><td><a href="#iddocumentdata">IdDocumentData</a></td><td rowspan="4">Internal Passport</td></tr><tr><td>front_side</td><td><a href="#passportfile">PassportFile</a></td></tr><tr><td>selfie</td><td><i>Optional.</i> <a href="#passportfile">PassportFile</a></td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td rowspan="5">driver_license</td><td>data</td><td><a href="#iddocumentdata">IdDocumentData</a></td><td rowspan="5">Driver License</td></tr><tr><td>front_side</td><td><a href="#passportfile">PassportFile</a></td></tr><tr><td>reverse_side</td><td><a href="#passportfile">PassportFile</a></td></tr><tr><td>selfie</td><td><i>Optional.</i> <a href="#passportfile">PassportFile</a></td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td rowspan="5">identity_card</td><td>data</td><td><a href="#iddocumentdata">IdDocumentData</a></td><td rowspan="5">Identity Card</td></tr><tr><td>front_side</td><td><a href="#passportfile">PassportFile</a></td></tr><tr><td>reverse_side</td><td><a href="#passportfile">PassportFile</a></td></tr><tr><td>selfie</td><td><i>Optional.</i> <a href="#passportfile">PassportFile</a></td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td>address</td><td>data</td><td><a href="#residentialaddress">ResidentialAddress</a></td><td>Address</td></tr><tr><td rowspan="2">utility_bill</td><td>files</td><td>Array of <a href="#passportfile">PassportFile</a></td><td rowspan="2">Utility Bill</td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td rowspan="2">bank_statement</td><td>files</td><td>Array of <a href="#passportfile">PassportFile</a></td><td rowspan="2">Bank Statement</td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td rowspan="2">rental_agreement</td><td>files</td><td>Array of <a href="#passportfile">PassportFile</a></td><td rowspan="2">Rental Agreement</td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td rowspan="2">passport_registration</td><td>files</td><td>Array of <a href="#passportfile">PassportFile</a></td><td rowspan="2">Registration Page in the Internal Passport</td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td rowspan="2">temporary_registration</td><td>files</td><td>Array of <a href="#passportfile">PassportFile</a></td><td rowspan="2">Temporary Registration</td></tr><tr><td>translation</td><td><i>Optional.</i> Array of <a href="#passportfile">PassportFile</a></td></tr><tr><td>phone_number</td><td></td><td>String</td><td>Phone number</td></tr><tr><td>email</td><td></td><td>String</td><td>Email</td></tr></tbody></table>

#### PersonalDetails

This object represents personal details.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>first_name</td><td>String</td><td>First Name</td></tr><tr><td>last_name</td><td>String</td><td>Last Name</td></tr><tr><td>middle_name</td><td>String</td><td><em>Optional.</em> Middle Name</td></tr><tr><td>birth_date</td><td>String</td><td>Date of birth in DD.MM.YYYY format</td></tr><tr><td>gender</td><td>String</td><td>Gender, <em>male</em> or <em>female</em></td></tr><tr><td>country_code</td><td>String</td><td>Citizenship (ISO 3166-1 alpha-2 country code)</td></tr><tr><td>residence_country_code</td><td>String</td><td>Country of residence (ISO 3166-1 alpha-2 country code)</td></tr><tr><td>first_name_native</td><td>String</td><td>First Name in the language of the user's country of residence</td></tr><tr><td>last_name_native</td><td>String</td><td>Last Name in the language of the user's country of residence</td></tr><tr><td>middle_name_native</td><td>String</td><td><em>Optional.</em> Middle Name in the language of the user's country of residence</td></tr></tbody></table>

#### ResidentialAddress

This object represents a residential address.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>street_line1</td><td>String</td><td>First line for the address</td></tr><tr><td>street_line2</td><td>String</td><td><em>Optional.</em> Second line for the address</td></tr><tr><td>city</td><td>String</td><td>City</td></tr><tr><td>state</td><td>String</td><td><em>Optional.</em> State</td></tr><tr><td>country_code</td><td>String</td><td>ISO 3166-1 alpha-2 country code</td></tr><tr><td>post_code</td><td>String</td><td>Address post code</td></tr></tbody></table>

#### IdDocumentData

This object represents the data of an identity document.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>document_no</td><td>String</td><td>Document number</td></tr><tr><td>expiry_date</td><td>String</td><td><em>Optional.</em> Date of expiry, in DD.MM.YYYY format</td></tr></tbody></table>

#### PassportFile

This object represents a [PassportFile](/bots/api/#passportfile) related to a document. The file is up to 10 MB in size and in the .jpg format.

### Receiving information

When the user confirms your request by pressing the "Authorize" button, the Bot API sends an [Update](/bots/api/#update) with the field _passport\_data_ to the bot that contains encrypted [Telegram Passport data](/bots/api/#passportdata).

> Note that all base64-encoded fields should be decoded before use.

#### Decrypting data

To decrypt the received data, first, decrypt the credentials contained in [EncryptedCredentials](/bots/api/#encryptedcredentials).

1.  Decrypt the credentials secret ( _secret_ field in [EncryptedCredentials](/bots/api/#encryptedcredentials)) using your **private** key (set OAEP padding option, e.g. `OPENSSL_PKCS1_OAEP_PADDING` in PHP)
    
2.  Use this secret and the credentials hash ( _hash_ field in [EncryptedCredentials](/bots/api/#encryptedcredentials)) to calculate _credentials\_key_ and _credentials\_iv_ as described below:
    
    ```
     credentials_secret_hash = SHA512( credentials_secret + credentials_hash )
     credentials_key = slice( credentials_secret_hash, 0, 32 )
     credentials_iv = slice( credentials_secret_hash, 32, 16 )
    ```
    
3.  Decrypt the credentials data ( _data_ field in [EncryptedCredentials](/bots/api/#encryptedcredentials)) by AES256-CBC using these _credentials\_key_ and _credentials\_iv_. **IMPORTANT:** At this step, make sure that the credentials hash is equal to `SHA256( credentials_data )`
    
4.  Credentials data is padded with 32 to 255 random padding bytes to make its length divisible by 16 bytes. The first byte contains the length of this padding (including this byte). Remove the padding to get the data.
    

> Note that all hashes represent as raw binary data, not hexits

#### Credentials

Credentials is a JSON-serialized object.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>secure_data</td><td><a href="#securedata">SecureData</a></td><td>Credentials for encrypted data</td></tr><tr><td>nonce</td><td>String</td><td>Bot-specified nonce</td></tr></tbody></table>

**IMPORTANT:** Make sure that the **nonce** is the same as was passed in the request.

#### SecureData

This object represents the credentials required to decrypt encrypted data. All fields are optional and depend on [fields](#fields) that were requested.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>personal_details</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted personal details</td></tr><tr><td>passport</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted passport</td></tr><tr><td>internal_passport</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted internal passport</td></tr><tr><td>driver_license</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted driver license</td></tr><tr><td>identity_card</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted ID card</td></tr><tr><td>address</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted residential address</td></tr><tr><td>utility_bill</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted utility bill</td></tr><tr><td>bank_statement</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted bank statement</td></tr><tr><td>rental_agreement</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted rental agreement</td></tr><tr><td>passport_registration</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted registration from internal passport</td></tr><tr><td>temporary_registration</td><td><a href="#securevalue">SecureValue</a></td><td><em>Optional.</em> Credentials for encrypted temporary registration</td></tr></tbody></table>

#### SecureValue

This object represents the credentials required to decrypt encrypted values. All fields are optional and depend on the type of [fields](#fields) that were requested.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>data</td><td><a href="#datacredentials">DataCredentials</a></td><td><em>Optional.</em> Credentials for encrypted Telegram Passport data. Available for "personal_details", "passport", "driver_license", "identity_card", "internal_passport" and "address" types.</td></tr><tr><td>front_side</td><td><a href="#filecredentials">FileCredentials</a></td><td><em>Optional.</em> Credentials for an encrypted document's front side. Available for "passport", "driver_license", "identity_card" and "internal_passport".</td></tr><tr><td>reverse_side</td><td><a href="#filecredentials">FileCredentials</a></td><td><em>Optional.</em> Credentials for an encrypted document's reverse side. Available for "driver_license" and "identity_card".</td></tr><tr><td>selfie</td><td><a href="#filecredentials">FileCredentials</a></td><td><em>Optional.</em> Credentials for an encrypted selfie of the user with a document. Available for "passport", "driver_license", "identity_card" and "internal_passport".</td></tr><tr><td>translation</td><td>Array of <a href="#filecredentials">FileCredentials</a></td><td><em>Optional.</em> Credentials for an encrypted translation of the document. Available for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration".</td></tr><tr><td>files</td><td>Array of <a href="#filecredentials">FileCredentials</a></td><td><em>Optional.</em> Credentials for encrypted files. Available for "utility_bill", "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types.</td></tr></tbody></table>

#### DataCredentials

These credentials can be used to decrypt encrypted data from the _data_ field in [EncryptedPassportElement](/bots/api/#encryptedpassportelement).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>data_hash</td><td>String</td><td>Checksum of encrypted data</td></tr><tr><td>secret</td><td>String</td><td>Secret of encrypted data</td></tr></tbody></table>

1.  To decrypt data, use the corresponding secret and data\_hash from [DataCredentials](#datacredentials) as described below:
    
    ```
     data_secret_hash = SHA512( data_secret + data_hash )
     data_key = slice( data_secret_hash, 0, 32 )
     data_iv = slice( data_secret_hash, 32, 16 )
    ```
    
2.  Use AES256-CBC with this _data\_key_ and _data\_iv_ to decrypt the data (the _data_ field in [EncryptedPassportElement](/bots/api/#encryptedpassportelement)). **IMPORTANT:** At this step, make sure that data\_hash from the credentials is equal to `SHA256( data )`.
    
3.  The data is padded with 32 to 255 random padding bytes to make its length divisible by 16 bytes. The first byte contains the length of the padding (including this byte). Remove padding to get the data.
    
4.  The data is a JSON-serialized object of one of the following types: [PersonalDetails](#personaldetails), [IdDocumentData](#iddocumentdata), [ResidentialAddress](#residentialaddress), depending on [type](#fields).
    

#### FileCredentials

These credentials can be used to decrypt encrypted files from the _front\_side_, _reverse\_side_, _selfie_, _files_ and _translation_ fields in [EncryptedPassportElement](/bots/api/#encryptedpassportelement).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_hash</td><td>String</td><td>Checksum of encrypted file</td></tr><tr><td>secret</td><td>String</td><td>Secret of encrypted file</td></tr></tbody></table>

1.  To decrypt the file, use the corresponding secret and file\_hash from [FileCredentials](#filecredentials) as described below:
    
    ```
     file_secret_hash = SHA512( file_secret + file_hash )
     file_key = slice( file_secret_hash, 0, 32 )
     file_iv = slice( file_secret_hash, 32, 16 )
    ```
    
2.  Download the encrypted file using the [getFile](/bots/api/#getfile) method.
    
3.  Use AES256-CBC with this _file\_key_ and _file\_iv_ to decrypt the content of the file. **IMPORTANT:** At this step, make sure that file\_hash from the credentials is equal to `SHA256( file_content )`.
    
4.  The content of the file is padded with 32 to 255 random padding bytes to make its length divisible by 16 bytes. The first byte contains the length of the padding (including that byte). Remove padding to get the file content.
    

### Fixing errors

If the data you received contains errors, the bot can use the [setPassportDataErrors](/bots/api/#setpassportdataerrors) method to inform the user and [request information](#requesting-information) again. The user will not be able to resend the data, until all errors are fixed.
