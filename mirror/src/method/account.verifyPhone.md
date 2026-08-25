---
title: "account.verifyPhone"
original: "https://core.telegram.org/method/account.verifyPhone"
section: ref
description: "Verify a phone number for telegram passport."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.verifyPhone","url":"/method/account.verifyPhone/"}]
layout: layout.njk
---

# account.verifyPhone

Verify a phone number for telegram [passport](/passport/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.verifyPhone/" class="current_page_link">account.verifyPhone</a>#4dd3a7f6 phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> phone_code:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone code hash received from the call to <a href="/method/account.sendVerifyPhoneCode/">account.sendVerifyPhoneCode</a></td></tr><tr><td><strong>phone_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Code received after the call to <a href="/method/account.sendVerifyPhoneCode/">account.sendVerifyPhoneCode</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>

### Related pages

#### [account.sendVerifyPhoneCode](/method/account.sendVerifyPhoneCode/)

Send the verification phone code for telegram [passport](/passport/).

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.
