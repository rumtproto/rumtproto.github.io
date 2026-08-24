---
title: "account.cancelPasswordEmail"
original: "https://core.telegram.org/method/account.cancelPasswordEmail"
section: ref
description: "Cancel the code that was sent to verify an email to use as 2FA recovery method."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.cancelPasswordEmail","url":"/method/account.cancelPasswordEmail/"}]
layout: layout.njk
---

# account.cancelPasswordEmail

Cancel the code that was sent to verify an email to use as [2FA recovery method](/api/srp/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/account.cancelPasswordEmail/" class="current_page_link">account.cancelPasswordEmail</a>#c1cbd5b6 = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_HASH_EXPIRED</td><td>Email hash expired.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
