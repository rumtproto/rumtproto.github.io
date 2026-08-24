---
title: "account.getTmpPassword"
original: "https://core.telegram.org/method/account.getTmpPassword"
section: ref
description: "Get temporary payment password"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getTmpPassword","url":"/method/account.getTmpPassword/"}]
layout: layout.njk
---

# account.getTmpPassword

Get temporary payment password

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.tmpPassword/">account.tmpPassword</a>#db64fd34 tmp_password:<a href="/type/bytes/">bytes</a> valid_until:<a href="/type/int/">int</a> = <a href="/type/account.TmpPassword/">account.TmpPassword</a>;
---functions---
<a href="/method/account.getTmpPassword/" class="current_page_link">account.getTmpPassword</a>#449e0b51 password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> period:<a href="/type/int/">int</a> = <a href="/type/account.TmpPassword/">account.TmpPassword</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a></td><td>SRP password parameters</td></tr><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Time during which the temporary password will be valid, in seconds; should be between 60 and 86400</td></tr></tbody></table>

### Result

[account.TmpPassword](/type/account.TmpPassword/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr><tr><td>400</td><td>SRP_A_INVALID</td><td>The specified inputCheckPasswordSRP.A value is invalid.</td></tr><tr><td>400</td><td>TMP_PASSWORD_DISABLED</td><td>The temporary password is disabled.</td></tr></tbody></table>
