---
title: "SecureData"
original: "https://core.telegram.org/type/SecureData"
section: ref
description: "Secure passport data, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecureData","url":"/type/SecureData/"}]
layout: layout.njk
---

# SecureData

Secure [passport](/passport/) data, for more info [see the passport docs »](/passport/encryption/#securedata)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureData/">secureData</a>#8aeabec3 data:<a href="/type/bytes/">bytes</a> data_hash:<a href="/type/bytes/">bytes</a> secret:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureData/" class="current_page_link">SecureData</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/secureData/">secureData</a></td><td>Secure <a href="/passport/">passport</a> data, for more info <a href="/passport/encryption/#securedata">see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](/passport/encryption/)

How Telegram Passport data is stored and encrypted end-to-end.
