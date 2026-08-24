---
title: "InputSecureFile"
original: "https://core.telegram.org/type/InputSecureFile"
section: ref
description: "Secure passport file, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputSecureFile","url":"/type/InputSecureFile/"}]
layout: layout.njk
---

# InputSecureFile

Secure [passport](https://core.telegram.org/passport) file, for more info [see the passport docs »](https://core.telegram.org/passport/encryption#inputsecurefile)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputSecureFileUploaded/">inputSecureFileUploaded</a>#3334b0f0 id:<a href="/type/long/">long</a> parts:<a href="/type/int/">int</a> md5_checksum:<a href="/type/string/">string</a> file_hash:<a href="/type/bytes/">bytes</a> secret:<a href="/type/bytes/">bytes</a> = <a href="/type/InputSecureFile/" class="current_page_link">InputSecureFile</a>;
<a href="/constructor/inputSecureFile/">inputSecureFile</a>#5367e5be id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputSecureFile/" class="current_page_link">InputSecureFile</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputSecureFileUploaded/">inputSecureFileUploaded</a></td><td>Uploaded secure file, for more info <a href="https://core.telegram.org/passport/encryption#inputsecurefile">see the passport docs »</a></td></tr><tr><td><a href="/constructor/inputSecureFile/">inputSecureFile</a></td><td>Pre-uploaded <a href="https://core.telegram.org/passport">passport</a> file, for more info <a href="https://core.telegram.org/passport/encryption#inputsecurefile">see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
