---
title: "account.sendChangePhoneCode"
original: "https://core.telegram.org/method/account.sendChangePhoneCode"
section: ref
description: "Verify a new phone number to associate to the current account"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.sendChangePhoneCode","url":"/method/account.sendChangePhoneCode/"}]
layout: layout.njk
---

# account.sendChangePhoneCode

Verify a new phone number to associate to the current account

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a>#2390fe44 authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
---functions---
<a href="/method/account.sendChangePhoneCode/" class="current_page_link">account.sendChangePhoneCode</a>#82574ae5 phone_number:<a href="/type/string/">string</a> settings:<a href="/type/CodeSettings/">CodeSettings</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>New phone number</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings/">CodeSettings</a></td><td>Phone code settings</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>FRESH_CHANGE_PHONE_FORBIDDEN</td><td>You can't change phone number right after logging in, please wait at least 24 hours.</td></tr><tr><td>400</td><td>PHONE_NUMBER_BANNED</td><td>The provided phone number is banned from telegram.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>400</td><td>PHONE_NUMBER_OCCUPIED</td><td>The phone number is already in use.</td></tr></tbody></table>
