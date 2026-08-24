---
title: "DecryptedMessageLayer"
original: "https://core.telegram.org/type/DecryptedMessageLayer"
section: ref
description: "Object describes encrypted message content in relation to the required layer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DecryptedMessageLayer","url":"/type/DecryptedMessageLayer/"}]
layout: layout.njk
---

# DecryptedMessageLayer

Object describes encrypted message content in relation to the required layer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===17===
<a href="/constructor/decryptedMessageLayer/">decryptedMessageLayer</a>#1be31789 random_bytes:<a href="/type/bytes/">bytes</a> layer:<a href="/type/int/">int</a> in_seq_no:<a href="/type/int/">int</a> out_seq_no:<a href="/type/int/">int</a> message:<a href="/type/DecryptedMessage/">DecryptedMessage</a> = <a href="/type/DecryptedMessageLayer/" class="current_page_link">DecryptedMessageLayer</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessageLayer/">decryptedMessageLayer</a></td><td>Sets the layer number for the contents of an encrypted message.</td></tr></tbody></table>
