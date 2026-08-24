---
title: "messages.getAttachedStickers"
original: "https://core.telegram.org/method/messages.getAttachedStickers"
section: ref
description: "Get stickers attached to a photo or video"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAttachedStickers","url":"/method/messages.getAttachedStickers/"}]
layout: layout.njk
---

# messages.getAttachedStickers

Get stickers attached to a photo or video

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.getAttachedStickers/" class="current_page_link">messages.getAttachedStickers</a>#cc5b67cc media:<a href="/type/InputStickeredMedia/">InputStickeredMedia</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputStickeredMedia/">InputStickeredMedia</a></td><td>Stickered media</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[StickerSetCovered](/type/StickerSetCovered/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MEDIA_EMPTY</td><td>The provided media object is invalid.</td></tr></tbody></table>
