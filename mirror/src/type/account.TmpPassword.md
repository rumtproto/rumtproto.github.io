---
title: "Account.TmpPassword"
original: "https://core.telegram.org/type/account.TmpPassword"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.TmpPassword","url":"/type/account.TmpPassword/"}]
layout: layout.njk
---

# Account.TmpPassword

Temporary password

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.tmpPassword/">account.tmpPassword</a>#db64fd34 tmp_password:<a href="/type/bytes/">bytes</a> valid_until:<a href="/type/int/">int</a> = <a href="/type/account.TmpPassword/" class="current_page_link">account.TmpPassword</a>;

---functions---

<a href="/method/account.getTmpPassword/">account.getTmpPassword</a>#449e0b51 password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> period:<a href="/type/int/">int</a> = <a href="/type/account.TmpPassword/" class="current_page_link">account.TmpPassword</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.tmpPassword/">account.tmpPassword</a></td><td>Temporary payment password</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getTmpPassword/">account.getTmpPassword</a></td><td>Get temporary payment password</td></tr></tbody></table>
