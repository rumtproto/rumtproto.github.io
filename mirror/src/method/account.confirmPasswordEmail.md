---
title: "account.confirmPasswordEmail"
original: "https://core.telegram.org/method/account.confirmPasswordEmail"
section: ref
description: "Verify an email to use as 2FA recovery method."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.confirmPasswordEmail","url":"/method/account.confirmPasswordEmail/"}]
layout: layout.njk
---

# account.confirmPasswordEmail

Verify an email to use as [2FA recovery method](/api/srp/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.confirmPasswordEmail/" class="current_page_link">account.confirmPasswordEmail</a>#8fdf1920 code:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The phone code that was received after <a href="/api/srp/#email-verification">setting a recovery email</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CODE_INVALID</td><td>Code invalid.</td></tr><tr><td>400</td><td>EMAIL_HASH_EXPIRED</td><td>Email hash expired.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
