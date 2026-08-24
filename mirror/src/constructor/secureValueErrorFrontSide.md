---
title: "secureValueErrorFrontSide"
original: "https://core.telegram.org/constructor/secureValueErrorFrontSide"
section: ref
description: "Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureValueErrorFrontSide","url":"/constructor/secureValueErrorFrontSide/"}]
layout: layout.njk
---

# secureValueErrorFrontSide

Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureValueErrorFrontSide/" class="current_page_link">secureValueErrorFrontSide</a>#be3dfa type:<a href="/type/SecureValueType/">SecureValueType</a> file_hash:<a href="/type/bytes/">bytes</a> text:<a href="/type/string/">string</a> = <a href="/type/SecureValueError/">SecureValueError</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType/">SecureValueType</a></td><td>One of <a href="/constructor/secureValueTypePassport/">secureValueTypePassport</a>, <a href="/constructor/secureValueTypeDriverLicense/">secureValueTypeDriverLicense</a>, <a href="/constructor/secureValueTypeIdentityCard/">secureValueTypeIdentityCard</a>, <a href="/constructor/secureValueTypeInternalPassport/">secureValueTypeInternalPassport</a></td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>File hash</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Error message</td></tr></tbody></table>

### Type

[SecureValueError](/type/SecureValueError/)

### Related pages

#### [secureValueTypePassport](/constructor/secureValueTypePassport/)

Passport

#### [secureValueTypeDriverLicense](/constructor/secureValueTypeDriverLicense/)

Driver's license

#### [secureValueTypeIdentityCard](/constructor/secureValueTypeIdentityCard/)

Identity card

#### [secureValueTypeInternalPassport](/constructor/secureValueTypeInternalPassport/)

Internal [passport](https://core.telegram.org/passport)
