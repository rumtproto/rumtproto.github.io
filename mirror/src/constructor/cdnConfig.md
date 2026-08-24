---
title: "cdnConfig"
original: "https://core.telegram.org/constructor/cdnConfig"
section: ref
description: "Configuration for CDN file downloads."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"cdnConfig","url":"/constructor/cdnConfig/"}]
layout: layout.njk
---

# cdnConfig

Configuration for [CDN](https://core.telegram.org/cdn) file downloads.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/cdnConfig/" class="current_page_link">cdnConfig</a>#5725e40a public_keys:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/CdnPublicKey/">CdnPublicKey</a>&gt; = <a href="/type/CdnConfig/">CdnConfig</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>public_keys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/CdnPublicKey/">CdnPublicKey</a>&gt;</td><td>Vector of public keys to use <strong>only</strong> during handshakes to <a href="https://core.telegram.org/cdn">CDN</a> DCs.</td></tr></tbody></table>

### Type

[CdnConfig](/type/CdnConfig/)

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
