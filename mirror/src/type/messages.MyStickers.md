---
title: "messages.MyStickers"
original: "https://core.telegram.org/type/messages.MyStickers"
section: ref
description: "The list of stickersets owned by the current account »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.MyStickers","url":"/type/messages.MyStickers/"}]
layout: layout.njk
---

# messages.MyStickers

The list of [stickersets owned by the current account »](/api/stickers/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.myStickers/">messages.myStickers</a>#faff629d count:<a href="/type/int/">int</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; = <a href="/type/messages.MyStickers/" class="current_page_link">messages.MyStickers</a>;

---functions---

<a href="/method/messages.getMyStickers/">messages.getMyStickers</a>#d0b5e1fc offset_id:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.MyStickers/" class="current_page_link">messages.MyStickers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.myStickers/">messages.myStickers</a></td><td>The list of <a href="/api/stickers/">stickersets owned by the current account »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getMyStickers/">messages.getMyStickers</a></td><td>Fetch all <a href="/api/stickers/">stickersets »</a> owned by the current user.</td></tr></tbody></table>

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
