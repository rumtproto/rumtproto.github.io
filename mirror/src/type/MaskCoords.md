---
title: "MaskCoords"
original: "https://core.telegram.org/type/MaskCoords"
section: ref
description: "Mask coordinates (if this is a mask sticker, attached to a photo)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MaskCoords","url":"/type/MaskCoords/"}]
layout: layout.njk
---

# MaskCoords

Mask coordinates (if this is a mask sticker, attached to a photo)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/maskCoords/">maskCoords</a>#aed6dbb2 n:<a href="/type/int/">int</a> x:<a href="/type/double/">double</a> y:<a href="/type/double/">double</a> zoom:<a href="/type/double/">double</a> = <a href="/type/MaskCoords/" class="current_page_link">MaskCoords</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/maskCoords/">maskCoords</a></td><td>Position on a photo where a mask should be placed when <a href="/api/stickers/#attached-stickers">attaching stickers to media »</a><br><br>The <code>n</code> position indicates where the mask should be placed:<br><br>- 0 =&gt; Relative to the forehead<br>- 1 =&gt; Relative to the eyes<br>- 2 =&gt; Relative to the mouth<br>- 3 =&gt; Relative to the chin</td></tr></tbody></table>
