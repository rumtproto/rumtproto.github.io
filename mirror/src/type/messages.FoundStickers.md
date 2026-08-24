---
title: "Messages.FoundStickers"
original: "https://core.telegram.org/type/messages.FoundStickers"
section: ref
description: "Telegram clients support displaying static and animated stickers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.FoundStickers","url":"/type/messages.FoundStickers/"}]
layout: layout.njk
---

# Messages.FoundStickers

Found [stickers](/api/stickers/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.foundStickersNotModified/">messages.foundStickersNotModified</a>#6010c534 flags:<a href="/type/%23/">#</a> next_offset:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.FoundStickers/" class="current_page_link">messages.FoundStickers</a>;
<a href="/constructor/messages.foundStickers/">messages.foundStickers</a>#82c9e290 flags:<a href="/type/%23/">#</a> next_offset:flags.0?<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.FoundStickers/" class="current_page_link">messages.FoundStickers</a>;

---functions---

<a href="/method/messages.searchStickers/">messages.searchStickers</a>#29b1c66a flags:<a href="/type/%23/">#</a> emojis:flags.0?true q:<a href="/type/string/">string</a> emoticon:<a href="/type/string/">string</a> lang_code:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.FoundStickers/" class="current_page_link">messages.FoundStickers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.foundStickersNotModified/">messages.foundStickersNotModified</a></td><td>No new stickers were found for the specified query</td></tr><tr><td><a href="/constructor/messages.foundStickers/">messages.foundStickers</a></td><td>Found stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.searchStickers/">messages.searchStickers</a></td><td>Search for stickers using AI-powered keyword search</td></tr></tbody></table>

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
