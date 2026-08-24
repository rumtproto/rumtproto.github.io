---
title: "auth.sendCode"
original: "https://core.telegram.org/method/auth.sendCode"
section: ref
description: "Send the verification code for login"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.sendCode","url":"/method/auth.sendCode/"}]
layout: layout.njk
---

# auth.sendCode

Send the verification code for login

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a>#2390fe44 authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
---functions---
<a href="/method/auth.sendCode/" class="current_page_link">auth.sendCode</a>#a677244f phone_number:<a href="/type/string/">string</a> api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> settings:<a href="/type/CodeSettings/">CodeSettings</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number in international format</td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Application identifier (see <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Application secret hash (see <a href="https://core.telegram.org/myapp">App configuration</a>)</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings/">CodeSettings</a></td><td>Settings for the code type to send</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>API ID invalid.</td></tr><tr><td>400</td><td>API_ID_PUBLISHED_FLOOD</td><td>This API id was published somewhere, you can't use it now.</td></tr><tr><td>500</td><td>AUTH_RESTART</td><td>Restart the authorization process.</td></tr><tr><td>500</td><td>AUTH_RESTART_%d</td><td>Internal error (debug info %d), please repeat the method call.</td></tr><tr><td>400</td><td>PHONE_NUMBER_APP_SIGNUP_FORBIDDEN</td><td>You can't sign up using this app.</td></tr><tr><td>400</td><td>PHONE_NUMBER_BANNED</td><td>The provided phone number is banned from telegram.</td></tr><tr><td>400</td><td>PHONE_NUMBER_FLOOD</td><td>You asked for the code too many times.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>406</td><td>PHONE_PASSWORD_FLOOD</td><td>You have tried logging in too many times.</td></tr><tr><td>400</td><td>PHONE_PASSWORD_PROTECTED</td><td>This phone is password protected.</td></tr><tr><td>400</td><td>SMS_CODE_CREATE_FAILED</td><td>An error occurred while creating the SMS code.</td></tr><tr><td>406</td><td>UPDATE_APP_TO_LOGIN</td><td>Please update your client to login.</td></tr></tbody></table>
