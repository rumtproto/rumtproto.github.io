---
title: "Messages.Stickers"
original: "https://core.telegram.org/type/messages.Stickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.Stickers","url":"/type/messages.Stickers/"}]
layout: layout.njk
---

# Messages.Stickers

Stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickersNotModified/">messages.stickersNotModified</a>#f1749a22 = <a href="/type/messages.Stickers/" class="current_page_link">messages.Stickers</a>;
<a href="/constructor/messages.stickers/">messages.stickers</a>#30a6ec7e hash:<a href="/type/long/">long</a> stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.Stickers/" class="current_page_link">messages.Stickers</a>;

---functions---

<a href="/method/messages.getStickers/">messages.getStickers</a>#d5a5d3a1 emoticon:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.Stickers/" class="current_page_link">messages.Stickers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickersNotModified/">messages.stickersNotModified</a></td><td>No new stickers were found for the given query</td></tr><tr><td><a href="/constructor/messages.stickers/">messages.stickers</a></td><td>Found stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getStickers/">messages.getStickers</a></td><td>Get stickers by emoji</td></tr></tbody></table>
