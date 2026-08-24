---
title: "auth.checkRecoveryPassword"
original: "https://core.telegram.org/method/auth.checkRecoveryPassword"
section: ref
description: "Check if the 2FA recovery code sent using auth.requestPasswordRecovery is valid, before passing it to auth.recoverPassword."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.checkRecoveryPassword","url":"/method/auth.checkRecoveryPassword/"}]
layout: layout.njk
---

# auth.checkRecoveryPassword

Check if the [2FA recovery code](/api/srp/) sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/) is valid, before passing it to [auth.recoverPassword](/method/auth.recoverPassword/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/auth.checkRecoveryPassword/" class="current_page_link">auth.checkRecoveryPassword</a>#d36bf79 code:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Code received via email</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CODE_EMPTY</td><td>The provided code is empty.</td></tr><tr><td>400</td><td>PASSWORD_RECOVERY_EXPIRED</td><td>The recovery code has expired.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/)

Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](/api/srp/#email-verification).

#### [auth.recoverPassword](/method/auth.recoverPassword/)

Reset the [2FA password](/api/srp/) using the recovery code sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/).
