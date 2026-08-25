---
title: "auth.SentCode"
original: "https://core.telegram.org/type/auth.SentCode"
section: ref
description: "Contains info on a confirmation code message sent via SMS, phone call or Telegram."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.SentCode","url":"/type/auth.SentCode/"}]
layout: layout.njk
---

# auth.SentCode

Contains info on a confirmation code message sent via SMS, phone call or Telegram.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;
<a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a>#2390fe44 authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;
<a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;

---functions---

<a href="/method/auth.sendCode/">auth.sendCode</a>#a677244f phone_number:<a href="/type/string/">string</a> api_id:<a href="/type/int/">int</a> api_hash:<a href="/type/string/">string</a> settings:<a href="/type/CodeSettings/">CodeSettings</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;
<a href="/method/auth.resendCode/">auth.resendCode</a>#cae47523 flags:<a href="/type/%23/">#</a> phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> reason:flags.0?<a href="/type/string/">string</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;
<a href="/method/auth.resetLoginEmail/">auth.resetLoginEmail</a>#7e960193 phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;
<a href="/method/auth.checkPaidAuth/">auth.checkPaidAuth</a>#56e59f9c phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> form_id:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;

<a href="/method/account.sendChangePhoneCode/">account.sendChangePhoneCode</a>#82574ae5 phone_number:<a href="/type/string/">string</a> settings:<a href="/type/CodeSettings/">CodeSettings</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;
<a href="/method/account.sendConfirmPhoneCode/">account.sendConfirmPhoneCode</a>#1b3faa88 hash:<a href="/type/string/">string</a> settings:<a href="/type/CodeSettings/">CodeSettings</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;
<a href="/method/account.sendVerifyPhoneCode/">account.sendVerifyPhoneCode</a>#a5a356f9 phone_number:<a href="/type/string/">string</a> settings:<a href="/type/CodeSettings/">CodeSettings</a> = <a href="/type/auth.SentCode/" class="current_page_link">auth.SentCode</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.sentCode/">auth.sentCode</a></td><td>Contains info about a sent verification code.</td></tr><tr><td><a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a></td><td>The user successfully authorized using <a href="/api/auth/#future-auth-tokens">future auth tokens</a></td></tr><tr><td><a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a></td><td>Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a <a href="/api/premium/">Telegram Premium</a> subscription in order to proceed with the login/signup, see <a href="/api/auth/#paid-auth">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.sendCode/">auth.sendCode</a></td><td>Send the verification code for login</td></tr><tr><td><a href="/method/auth.resendCode/">auth.resendCode</a></td><td>Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see <a href="/api/auth/">login</a> for more info.</td></tr><tr><td><a href="/method/auth.resetLoginEmail/">auth.resetLoginEmail</a></td><td>Reset the <a href="/api/auth/#email-verification">login email »</a>.</td></tr><tr><td><a href="/method/auth.checkPaidAuth/">auth.checkPaidAuth</a></td><td>Checks the status of a <a href="/api/auth/#paid-auth">login payment</a>.</td></tr><tr><td><a href="/method/account.sendChangePhoneCode/">account.sendChangePhoneCode</a></td><td>Verify a new phone number to associate to the current account</td></tr><tr><td><a href="/method/account.sendConfirmPhoneCode/">account.sendConfirmPhoneCode</a></td><td>Send confirmation code to cancel account deletion, for more info <a href="/api/account-deletion/">click here »</a></td></tr><tr><td><a href="/method/account.sendVerifyPhoneCode/">account.sendVerifyPhoneCode</a></td><td>Send the verification phone code for telegram <a href="/passport/">passport</a>.</td></tr></tbody></table>
