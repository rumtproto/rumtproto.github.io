---
title: "auth.loginToken"
original: "https://core.telegram.org/constructor/auth.loginToken"
section: ref
description: "Login token (for QR code login)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.loginToken","url":"/constructor/auth.loginToken/"}]
layout: layout.njk
---

# auth.loginToken

Login token (for [QR code login](/api/qr-login/))

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.loginToken/" class="current_page_link">auth.loginToken</a>#629f1980 expires:<a href="/type/int/">int</a> token:<a href="/type/bytes/">bytes</a> = <a href="/type/auth.LoginToken/">auth.LoginToken</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Expiration date of QR code</td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Token to render in QR code</td></tr></tbody></table>

### Type

[auth.LoginToken](/type/auth.LoginToken/)

### Related pages

#### [Login via QR code](/api/qr-login/)

QR code login flow
