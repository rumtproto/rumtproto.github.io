---
title: "maskCoords"
original: "https://core.telegram.org/constructor/maskCoords"
section: ref
description: "Position on a photo where a mask should be placed when attaching stickers to media »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"maskCoords","url":"/constructor/maskCoords/"}]
layout: layout.njk
---

# maskCoords

Position on a photo where a mask should be placed when [attaching stickers to media »](/api/stickers/#attached-stickers)

The `n` position indicates where the mask should be placed:

-   0 => Relative to the forehead
-   1 => Relative to the eyes
-   2 => Relative to the mouth
-   3 => Relative to the chin

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/maskCoords/" class="current_page_link">maskCoords</a>#aed6dbb2 n:<a href="/type/int/">int</a> x:<a href="/type/double/">double</a> y:<a href="/type/double/">double</a> zoom:<a href="/type/double/">double</a> = <a href="/type/MaskCoords/">MaskCoords</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>n</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Part of the face, relative to which the mask should be placed</td></tr><tr><td><strong>x</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position)</td></tr><tr><td><strong>y</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Shift by Y-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just below the default mask position)</td></tr><tr><td><strong>zoom</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Mask scaling coefficient. (For example, 2.0 means a doubled size)</td></tr></tbody></table>

### Type

[MaskCoords](/type/MaskCoords/)

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
