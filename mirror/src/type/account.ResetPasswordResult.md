---
title: "account.ResetPasswordResult"
original: "https://core.telegram.org/type/account.ResetPasswordResult"
section: ref
description: "Result of an account.resetPassword request."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.ResetPasswordResult","url":"/type/account.ResetPasswordResult/"}]
layout: layout.njk
---

# account.ResetPasswordResult

Result of an [account.resetPassword](/method/account.resetPassword/) request.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.resetPasswordFailedWait/">account.resetPasswordFailedWait</a>#e3779861 retry_date:<a href="/type/int/">int</a> = <a href="/type/account.ResetPasswordResult/" class="current_page_link">account.ResetPasswordResult</a>;
<a href="/constructor/account.resetPasswordRequestedWait/">account.resetPasswordRequestedWait</a>#e9effc7d until_date:<a href="/type/int/">int</a> = <a href="/type/account.ResetPasswordResult/" class="current_page_link">account.ResetPasswordResult</a>;
<a href="/constructor/account.resetPasswordOk/">account.resetPasswordOk</a>#e926d63e = <a href="/type/account.ResetPasswordResult/" class="current_page_link">account.ResetPasswordResult</a>;

---functions---

<a href="/method/account.resetPassword/">account.resetPassword</a>#9308ce1b = <a href="/type/account.ResetPasswordResult/" class="current_page_link">account.ResetPasswordResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.resetPasswordFailedWait/">account.resetPasswordFailedWait</a></td><td>You recently requested a password reset that was canceled, please wait until the specified date before requesting another reset.</td></tr><tr><td><a href="/constructor/account.resetPasswordRequestedWait/">account.resetPasswordRequestedWait</a></td><td>You successfully requested a password reset, please wait until the specified date before finalizing the reset.</td></tr><tr><td><a href="/constructor/account.resetPasswordOk/">account.resetPasswordOk</a></td><td>The 2FA password was reset successfully.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.resetPassword/">account.resetPassword</a></td><td>Initiate a 2FA password reset: can only be used if the user is already logged-in, <a href="/api/srp/#password-reset">see here for more info »</a></td></tr></tbody></table>

### Related pages

#### [account.resetPassword](/method/account.resetPassword/)

Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](/api/srp/#password-reset)
