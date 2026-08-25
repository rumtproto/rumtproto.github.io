---
title: "SecureFile"
original: "https://core.telegram.org/type/SecureFile"
section: ref
description: "Secure passport file, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecureFile","url":"/type/SecureFile/"}]
layout: layout.njk
---

# SecureFile

Secure [passport](/passport/) file, for more info [see the passport docs »](/passport/encryption/#inputsecurefile)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureFileEmpty/">secureFileEmpty</a>#64199744 = <a href="/type/SecureFile/" class="current_page_link">SecureFile</a>;
<a href="/constructor/secureFile/">secureFile</a>#7d09c27e id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> size:<a href="/type/long/">long</a> dc_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> file_hash:<a href="/type/bytes/">bytes</a> secret:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureFile/" class="current_page_link">SecureFile</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/secureFileEmpty/">secureFileEmpty</a></td><td>Empty constructor</td></tr><tr><td><a href="/constructor/secureFile/">secureFile</a></td><td>Secure <a href="/passport/">passport</a> file, for more info <a href="/passport/encryption/#inputsecurefile">see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](/passport/encryption/)

How Telegram Passport data is stored and encrypted end-to-end.
