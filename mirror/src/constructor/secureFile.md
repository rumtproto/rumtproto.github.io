---
title: "secureFile"
original: "https://core.telegram.org/constructor/secureFile"
section: ref
description: "Secure passport file, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureFile","url":"/constructor/secureFile/"}]
layout: layout.njk
---

# secureFile

Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureFile/" class="current_page_link">secureFile</a>#7d09c27e id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> size:<a href="/type/long/">long</a> dc_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> file_hash:<a href="/type/bytes/">bytes</a> secret:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureFile/">SecureFile</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>File size</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of upload</td></tr><tr><td><strong>file_hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>File hash</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Secret</td></tr></tbody></table>

### Type

[SecureFile](/type/SecureFile/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
