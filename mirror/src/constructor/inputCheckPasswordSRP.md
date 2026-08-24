---
title: "inputCheckPasswordSRP"
original: "https://core.telegram.org/constructor/inputCheckPasswordSRP"
section: ref
description: "Constructor for checking the validity of a 2FA SRP password (see SRP)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputCheckPasswordSRP","url":"/constructor/inputCheckPasswordSRP/"}]
layout: layout.njk
---

# inputCheckPasswordSRP

Constructor for checking the validity of a 2FA SRP password (see [SRP](/api/srp/))

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputCheckPasswordSRP/" class="current_page_link">inputCheckPasswordSRP</a>#d27ff082 srp_id:<a href="/type/long/">long</a> A:<a href="/type/bytes/">bytes</a> M1:<a href="/type/bytes/">bytes</a> = <a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>srp_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/srp/">SRP ID</a></td></tr><tr><td><strong>A</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><code>A</code> parameter (see <a href="/api/srp/">SRP</a>)</td></tr><tr><td><strong>M1</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><code>M1</code> parameter (see <a href="/api/srp/">SRP</a>)</td></tr></tbody></table>

### Type

[InputCheckPasswordSRP](/type/InputCheckPasswordSRP/)

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
