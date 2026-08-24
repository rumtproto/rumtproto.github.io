---
title: "photoPathSize"
original: "https://core.telegram.org/constructor/photoPathSize"
section: ref
description: "Messages with animated stickers can have a compressed svg (&lt; 300 bytes) to show the outline of the sticker before fetching the actual lottie animation."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photoPathSize","url":"/constructor/photoPathSize/"}]
layout: layout.njk
---

# photoPathSize

Messages with animated stickers can have a compressed svg (&lt; 300 bytes) to show the outline of the sticker before fetching the actual lottie animation.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photoPathSize/" class="current_page_link">photoPathSize</a>#d8214d41 type:<a href="/type/string/">string</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/PhotoSize/">PhotoSize</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Always <a href="/api/files/#vector-thumbnails"><code>j</code> »</a></td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Compressed SVG path payload, see <a href="/api/files/#vector-thumbnails">vector thumbnails »</a></td></tr></tbody></table>

### Type

[PhotoSize](/type/PhotoSize/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
