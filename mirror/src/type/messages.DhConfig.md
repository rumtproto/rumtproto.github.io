---
title: "Messages.DhConfig"
original: "https://core.telegram.org/type/messages.DhConfig"
section: ref
description: "Contains Diffie-Hellman key generation protocol parameters."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.DhConfig","url":"/type/messages.DhConfig/"}]
layout: layout.njk
---

# Messages.DhConfig

Contains Diffie-Hellman key generation protocol parameters.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.dhConfigNotModified/">messages.dhConfigNotModified</a>#c0e24635 random:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.DhConfig/" class="current_page_link">messages.DhConfig</a>;
<a href="/constructor/messages.dhConfig/">messages.dhConfig</a>#2c221edd g:<a href="/type/int/">int</a> p:<a href="/type/bytes/">bytes</a> version:<a href="/type/int/">int</a> random:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.DhConfig/" class="current_page_link">messages.DhConfig</a>;

---functions---

<a href="/method/messages.getDhConfig/">messages.getDhConfig</a>#26cf8950 version:<a href="/type/int/">int</a> random_length:<a href="/type/int/">int</a> = <a href="/type/messages.DhConfig/" class="current_page_link">messages.DhConfig</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.dhConfigNotModified/">messages.dhConfigNotModified</a></td><td>Configuring parameters did not change.</td></tr><tr><td><a href="/constructor/messages.dhConfig/">messages.dhConfig</a></td><td>New set of configuring parameters.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getDhConfig/">messages.getDhConfig</a></td><td>Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length.</td></tr></tbody></table>
