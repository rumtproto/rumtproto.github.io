---
title: "account.tmpPassword"
original: "https://core.telegram.org/constructor/account.tmpPassword"
section: ref
description: "Temporary payment password"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.tmpPassword","url":"/constructor/account.tmpPassword/"}]
layout: layout.njk
---

# account.tmpPassword

Temporary payment password

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.tmpPassword/" class="current_page_link">account.tmpPassword</a>#db64fd34 tmp_password:<a href="/type/bytes/">bytes</a> valid_until:<a href="/type/int/">int</a> = <a href="/type/account.TmpPassword/">account.TmpPassword</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>tmp_password</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Temporary password</td></tr><tr><td><strong>valid_until</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Validity period</td></tr></tbody></table>

### Type

[account.TmpPassword](/type/account.TmpPassword/)
