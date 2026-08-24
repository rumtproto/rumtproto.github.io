---
title: "account.declinePasswordReset"
original: "https://core.telegram.org/method/account.declinePasswordReset"
section: ref
description: "Abort a pending 2FA password reset, see here for more info »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.declinePasswordReset","url":"/method/account.declinePasswordReset/"}]
layout: layout.njk
---

# account.declinePasswordReset

Abort a pending 2FA password reset, [see here for more info »](/api/srp/#password-reset)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.declinePasswordReset/" class="current_page_link">account.declinePasswordReset</a>#4c9409f6 = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RESET_REQUEST_MISSING</td><td>No password reset is in progress.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
