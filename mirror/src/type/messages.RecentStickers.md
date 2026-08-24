---
title: "Messages.RecentStickers"
original: "https://core.telegram.org/type/messages.RecentStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.RecentStickers","url":"/type/messages.RecentStickers/"}]
layout: layout.njk
---

# Messages.RecentStickers

Recent stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.recentStickersNotModified/">messages.recentStickersNotModified</a>#b17f890 = <a href="/type/messages.RecentStickers/" class="current_page_link">messages.RecentStickers</a>;
<a href="/constructor/messages.recentStickers/">messages.recentStickers</a>#88d37c56 hash:<a href="/type/long/">long</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; dates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.RecentStickers/" class="current_page_link">messages.RecentStickers</a>;

---functions---

<a href="/method/messages.getRecentStickers/">messages.getRecentStickers</a>#9da9403b flags:<a href="/type/%23/">#</a> attached:flags.0?true hash:<a href="/type/long/">long</a> = <a href="/type/messages.RecentStickers/" class="current_page_link">messages.RecentStickers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.recentStickersNotModified/">messages.recentStickersNotModified</a></td><td>No new recent sticker was found</td></tr><tr><td><a href="/constructor/messages.recentStickers/">messages.recentStickers</a></td><td>Recently used stickers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getRecentStickers/">messages.getRecentStickers</a></td><td>Get recent stickers</td></tr></tbody></table>
