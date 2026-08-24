---
title: "Messages.AllStickers"
original: "https://core.telegram.org/type/messages.AllStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.AllStickers","url":"/type/messages.AllStickers/"}]
layout: layout.njk
---

# Messages.AllStickers

All stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.allStickersNotModified/">messages.allStickersNotModified</a>#e86602c3 = <a href="/type/messages.AllStickers/" class="current_page_link">messages.AllStickers</a>;
<a href="/constructor/messages.allStickers/">messages.allStickers</a>#cdbbcebb hash:<a href="/type/long/">long</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSet/">StickerSet</a>&gt; = <a href="/type/messages.AllStickers/" class="current_page_link">messages.AllStickers</a>;

---functions---

<a href="/method/messages.getAllStickers/">messages.getAllStickers</a>#b8a0a1a8 hash:<a href="/type/long/">long</a> = <a href="/type/messages.AllStickers/" class="current_page_link">messages.AllStickers</a>;
<a href="/method/messages.getMaskStickers/">messages.getMaskStickers</a>#640f82b8 hash:<a href="/type/long/">long</a> = <a href="/type/messages.AllStickers/" class="current_page_link">messages.AllStickers</a>;
<a href="/method/messages.getEmojiStickers/">messages.getEmojiStickers</a>#fbfca18f hash:<a href="/type/long/">long</a> = <a href="/type/messages.AllStickers/" class="current_page_link">messages.AllStickers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.allStickersNotModified/">messages.allStickersNotModified</a></td><td>Info about all installed stickers hasn't changed</td></tr><tr><td><a href="/constructor/messages.allStickers/">messages.allStickers</a></td><td>Info about all installed stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getAllStickers/">messages.getAllStickers</a></td><td>Get all installed stickers</td></tr><tr><td><a href="/method/messages.getMaskStickers/">messages.getMaskStickers</a></td><td>Get installed mask stickers</td></tr><tr><td><a href="/method/messages.getEmojiStickers/">messages.getEmojiStickers</a></td><td>Gets the list of currently installed <a href="/api/custom-emoji/">custom emoji stickersets</a>.</td></tr></tbody></table>
