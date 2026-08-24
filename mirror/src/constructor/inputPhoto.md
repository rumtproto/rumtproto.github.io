---
title: "inputPhoto"
original: "https://core.telegram.org/constructor/inputPhoto"
section: ref
description: "Defines a photo for further interaction."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPhoto","url":"/constructor/inputPhoto/"}]
layout: layout.njk
---

# inputPhoto

Defines a photo for further interaction.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPhoto/" class="current_page_link">inputPhoto</a>#3bb3b94a id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> = <a href="/type/InputPhoto/">InputPhoto</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Photo identifier</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><strong>access_hash</strong> value from the <a href="/constructor/photo/">photo</a> constructor</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/file-references/">File reference</a></td></tr></tbody></table>

### Type

[InputPhoto](/type/InputPhoto/)

### Related pages

#### [photo](/constructor/photo/)

Photo

#### [File references](/api/file-references/)

How to handle file references.
