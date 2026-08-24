---
title: "InputCheckPasswordSRP"
original: "https://core.telegram.org/type/InputCheckPasswordSRP"
section: ref
description: "Constructors for checking the validity of a 2FA SRP password."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputCheckPasswordSRP","url":"/type/InputCheckPasswordSRP/"}]
layout: layout.njk
---

# InputCheckPasswordSRP

Constructors for checking the validity of a [2FA SRP password](/api/srp/).

See [here »](/api/srp/#using-the-2fa-password) for more info on the 2FA authentication flow for methods that require it, before and after login.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputCheckPasswordEmpty/">inputCheckPasswordEmpty</a>#9880f658 = <a href="/type/InputCheckPasswordSRP/" class="current_page_link">InputCheckPasswordSRP</a>;
<a href="/constructor/inputCheckPasswordSRP/">inputCheckPasswordSRP</a>#d27ff082 srp_id:<a href="/type/long/">long</a> A:<a href="/type/bytes/">bytes</a> M1:<a href="/type/bytes/">bytes</a> = <a href="/type/InputCheckPasswordSRP/" class="current_page_link">InputCheckPasswordSRP</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputCheckPasswordEmpty/">inputCheckPasswordEmpty</a></td><td>There is no password</td></tr><tr><td><a href="/constructor/inputCheckPasswordSRP/">inputCheckPasswordSRP</a></td><td>Constructor for checking the validity of a 2FA SRP password (see <a href="/api/srp/">SRP</a>)</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
