---
title: "secureValueErrorFiles"
original: "https://core.telegram.org/constructor/secureValueErrorFiles"
section: ref
description: "Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureValueErrorFiles","url":"/constructor/secureValueErrorFiles/"}]
layout: layout.njk
---

# secureValueErrorFiles

Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureValueErrorFiles/" class="current_page_link">secureValueErrorFiles</a>#666220e9 type:<a href="/type/SecureValueType/">SecureValueType</a> file_hash:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; text:<a href="/type/string/">string</a> = <a href="/type/SecureValueError/">SecureValueError</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType/">SecureValueType</a></td><td>One of <a href="/constructor/secureValueTypeUtilityBill/">secureValueTypeUtilityBill</a>, <a href="/constructor/secureValueTypeBankStatement/">secureValueTypeBankStatement</a>, <a href="/constructor/secureValueTypeRentalAgreement/">secureValueTypeRentalAgreement</a>, <a href="/constructor/secureValueTypePassportRegistration/">secureValueTypePassportRegistration</a>, <a href="/constructor/secureValueTypeTemporaryRegistration/">secureValueTypeTemporaryRegistration</a></td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>File hash</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Error message</td></tr></tbody></table>

### Type

[SecureValueError](/type/SecureValueError/)

### Related pages

#### [secureValueTypeUtilityBill](/constructor/secureValueTypeUtilityBill/)

Utility bill

#### [secureValueTypeBankStatement](/constructor/secureValueTypeBankStatement/)

Bank statement

#### [secureValueTypeRentalAgreement](/constructor/secureValueTypeRentalAgreement/)

Rental agreement

#### [secureValueTypePassportRegistration](/constructor/secureValueTypePassportRegistration/)

Internal registration [passport](/passport/)

#### [secureValueTypeTemporaryRegistration](/constructor/secureValueTypeTemporaryRegistration/)

Temporary registration
