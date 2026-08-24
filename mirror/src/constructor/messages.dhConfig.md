---
title: "messages.dhConfig"
original: "https://core.telegram.org/constructor/messages.dhConfig"
section: ref
description: "New set of configuring parameters."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.dhConfig","url":"/constructor/messages.dhConfig/"}]
layout: layout.njk
---

# messages.dhConfig

New set of configuring parameters.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.dhConfig/" class="current_page_link">messages.dhConfig</a>#2c221edd g:<a href="/type/int/">int</a> p:<a href="/type/bytes/">bytes</a> version:<a href="/type/int/">int</a> random:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.DhConfig/">messages.DhConfig</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" align="center">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>g</strong></td><td align="center"><a href="/type/int/">int</a></td><td>New value <strong>primitive root</strong>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr><tr><td><strong>p</strong></td><td align="center"><a href="/type/bytes/">bytes</a></td><td>New value <strong>prime</strong>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr><tr><td><strong>version</strong></td><td align="center"><a href="/type/int/">int</a></td><td>Version of set of parameters</td></tr><tr><td><strong>random</strong></td><td align="center"><a href="/type/bytes/">bytes</a></td><td>Random sequence of bytes of assigned length</td></tr></tbody></table>

### Type

[messages.DhConfig](/type/messages.DhConfig/)
