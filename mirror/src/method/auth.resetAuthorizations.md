---
title: "auth.resetAuthorizations"
original: "https://core.telegram.org/method/auth.resetAuthorizations"
section: ref
description: "Terminates all user's authorized sessions except for the current one."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.resetAuthorizations","url":"/method/auth.resetAuthorizations/"}]
layout: layout.njk
---

# auth.resetAuthorizations

Terminates all user's authorized sessions except for the current one.

After calling this method it is necessary to reregister the current device using the method [account.registerDevice](/method/account.registerDevice/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/auth.resetAuthorizations/" class="current_page_link">auth.resetAuthorizations</a>#9fab0d1a = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>You can't logout other sessions if less than 24 hours have passed since you logged on the current session.</td></tr></tbody></table>

### Related pages

#### [account.registerDevice](/method/account.registerDevice/)

Register device to receive [PUSH notifications](/api/push-updates/)
