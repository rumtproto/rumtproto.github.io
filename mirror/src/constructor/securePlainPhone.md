---
title: "securePlainPhone"
original: "https://core.telegram.org/constructor/securePlainPhone"
section: ref
description: "Phone number to use in telegram passport: it must be verified, first »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"securePlainPhone","url":"/constructor/securePlainPhone/"}]
layout: layout.njk
---

# securePlainPhone

Phone number to use in [telegram passport](https://core.telegram.org/passport): [it must be verified, first »](https://core.telegram.org/passport/encryption#secureplaindata).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/securePlainPhone/" class="current_page_link">securePlainPhone</a>#7d6099dd phone:<a href="/type/string/">string</a> = <a href="/type/SecurePlainData/">SecurePlainData</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr></tbody></table>

### Type

[SecurePlainData](/type/SecurePlainData/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
