---
title: "securePlainEmail"
original: "https://core.telegram.org/constructor/securePlainEmail"
section: ref
description: "Email address to use in telegram passport: it must be verified, first »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"securePlainEmail","url":"/constructor/securePlainEmail/"}]
layout: layout.njk
---

# securePlainEmail

Email address to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/securePlainEmail/" class="current_page_link">securePlainEmail</a>#21ec5a5f email:<a href="/type/string/">string</a> = <a href="/type/SecurePlainData/">SecurePlainData</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Email address</td></tr></tbody></table>

### Type

[SecurePlainData](/type/SecurePlainData/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
