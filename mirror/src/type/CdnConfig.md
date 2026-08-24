---
title: "CdnConfig"
original: "https://core.telegram.org/type/CdnConfig"
section: ref
description: "Configuration for CDN file downloads."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"CdnConfig","url":"/type/CdnConfig/"}]
layout: layout.njk
---

# CdnConfig

Configuration for [CDN](https://core.telegram.org/cdn) file downloads.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/cdnConfig/">cdnConfig</a>#5725e40a public_keys:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/CdnPublicKey/">CdnPublicKey</a>&gt; = <a href="/type/CdnConfig/" class="current_page_link">CdnConfig</a>;

---functions---

<a href="/method/help.getCdnConfig/">help.getCdnConfig</a>#52029342 = <a href="/type/CdnConfig/" class="current_page_link">CdnConfig</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/cdnConfig/">cdnConfig</a></td><td>Configuration for <a href="https://core.telegram.org/cdn">CDN</a> file downloads.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getCdnConfig/">help.getCdnConfig</a></td><td>Get configuration for <a href="https://core.telegram.org/cdn">CDN</a> file downloads.</td></tr></tbody></table>

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
