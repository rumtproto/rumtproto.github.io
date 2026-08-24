---
title: "account.resetPassword"
original: "https://core.telegram.org/method/account.resetPassword"
section: ref
description: "Initiate a 2FA password reset: can only be used if the user is already logged-in, see here for more info »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.resetPassword","url":"/method/account.resetPassword/"}]
layout: layout.njk
---

# account.resetPassword

Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](/api/srp/#password-reset)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.resetPasswordFailedWait/">account.resetPasswordFailedWait</a>#e3779861 retry_date:<a href="/type/int/">int</a> = <a href="/type/account.ResetPasswordResult/">account.ResetPasswordResult</a>;
<a href="/constructor/account.resetPasswordRequestedWait/">account.resetPasswordRequestedWait</a>#e9effc7d until_date:<a href="/type/int/">int</a> = <a href="/type/account.ResetPasswordResult/">account.ResetPasswordResult</a>;
<a href="/constructor/account.resetPasswordOk/">account.resetPasswordOk</a>#e926d63e = <a href="/type/account.ResetPasswordResult/">account.ResetPasswordResult</a>;
---functions---
<a href="/method/account.resetPassword/" class="current_page_link">account.resetPassword</a>#9308ce1b = <a href="/type/account.ResetPasswordResult/">account.ResetPasswordResult</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[account.ResetPasswordResult](/type/account.ResetPasswordResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_EMPTY</td><td>The provided password is empty.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
