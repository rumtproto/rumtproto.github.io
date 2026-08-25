---
title: "secureValueErrorData"
original: "https://core.telegram.org/constructor/secureValueErrorData"
section: ref
description: "Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureValueErrorData","url":"/constructor/secureValueErrorData/"}]
layout: layout.njk
---

# secureValueErrorData

Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureValueErrorData/" class="current_page_link">secureValueErrorData</a>#e8a40bd9 type:<a href="/type/SecureValueType/">SecureValueType</a> data_hash:<a href="/type/bytes/">bytes</a> field:<a href="/type/string/">string</a> text:<a href="/type/string/">string</a> = <a href="/type/SecureValueError/">SecureValueError</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType/">SecureValueType</a></td><td>The section of the user's Telegram Passport which has the error, one of <a href="/constructor/secureValueTypePersonalDetails/">secureValueTypePersonalDetails</a>, <a href="/constructor/secureValueTypePassport/">secureValueTypePassport</a>, <a href="/constructor/secureValueTypeDriverLicense/">secureValueTypeDriverLicense</a>, <a href="/constructor/secureValueTypeIdentityCard/">secureValueTypeIdentityCard</a>, <a href="/constructor/secureValueTypeInternalPassport/">secureValueTypeInternalPassport</a>, <a href="/constructor/secureValueTypeAddress/">secureValueTypeAddress</a></td></tr><tr><td><strong>data_hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Data hash</td></tr><tr><td><strong>field</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of the data field which has the error</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Error message</td></tr></tbody></table>

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

Internal [passport](/passport/)

#### [secureValueTypeAddress](/constructor/secureValueTypeAddress/)

Address
