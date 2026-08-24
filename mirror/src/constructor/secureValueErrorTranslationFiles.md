---
title: "secureValueErrorTranslationFiles"
original: "https://core.telegram.org/constructor/secureValueErrorTranslationFiles"
section: ref
description: "Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation changes."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureValueErrorTranslationFiles","url":"/constructor/secureValueErrorTranslationFiles/"}]
layout: layout.njk
---

# secureValueErrorTranslationFiles

Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation changes.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureValueErrorTranslationFiles/" class="current_page_link">secureValueErrorTranslationFiles</a>#34636dd8 type:<a href="/type/SecureValueType/">SecureValueType</a> file_hash:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; text:<a href="/type/string/">string</a> = <a href="/type/SecureValueError/">SecureValueError</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType/">SecureValueType</a></td><td>One of <a href="/constructor/secureValueTypePersonalDetails/">secureValueTypePersonalDetails</a>, <a href="/constructor/secureValueTypePassport/">secureValueTypePassport</a>, <a href="/constructor/secureValueTypeDriverLicense/">secureValueTypeDriverLicense</a>, <a href="/constructor/secureValueTypeIdentityCard/">secureValueTypeIdentityCard</a>, <a href="/constructor/secureValueTypeInternalPassport/">secureValueTypeInternalPassport</a>, <a href="/constructor/secureValueTypeUtilityBill/">secureValueTypeUtilityBill</a>, <a href="/constructor/secureValueTypeBankStatement/">secureValueTypeBankStatement</a>, <a href="/constructor/secureValueTypeRentalAgreement/">secureValueTypeRentalAgreement</a>, <a href="/constructor/secureValueTypePassportRegistration/">secureValueTypePassportRegistration</a>, <a href="/constructor/secureValueTypeTemporaryRegistration/">secureValueTypeTemporaryRegistration</a></td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>Hash</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Error message</td></tr></tbody></table>

### Type

[SecureValueError](/type/SecureValueError/)

### Related pages

#### [secureValueTypePersonalDetails](/constructor/secureValueTypePersonalDetails/)

Personal details

#### [secureValueTypePassport](/constructor/secureValueTypePassport/)

Passport

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Driver's license

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Identity card

#### [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/)

Internal [passport](https://core.telegram.org/passport)

#### [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/)

Utility bill

#### [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/)

Bank statement

#### [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/)

Rental agreement

#### [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/)

Internal registration [passport](https://core.telegram.org/passport)

#### [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/)

Temporary registration
