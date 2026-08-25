---
title: "secureData"
original: "https://core.telegram.org/constructor/secureData"
section: ref
description: "Secure passport data, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureData","url":"/constructor/secureData/"}]
layout: layout.njk
---

# secureData

Secure [passport](/passport/) data, for more info [see the passport docs »](/passport/encryption/#securedata)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureData/" class="current_page_link">secureData</a>#8aeabec3 data:<a href="/type/bytes/">bytes</a> data_hash:<a href="/type/bytes/">bytes</a> secret:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureData/">SecureData</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Data</td></tr><tr><td><strong>data_hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Data hash</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Secret</td></tr></tbody></table>

### Type

[SecureData](/type/SecureData/)

### Related pages

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](/passport/encryption/)

How Telegram Passport data is stored and encrypted end-to-end.
