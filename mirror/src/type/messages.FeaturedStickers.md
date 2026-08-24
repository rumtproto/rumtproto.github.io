---
title: "Messages.FeaturedStickers"
original: "https://core.telegram.org/type/messages.FeaturedStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.FeaturedStickers","url":"/type/messages.FeaturedStickers/"}]
layout: layout.njk
---

# Messages.FeaturedStickers

Featured stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.featuredStickersNotModified/">messages.featuredStickersNotModified</a>#c6dc0c66 count:<a href="/type/int/">int</a> = <a href="/type/messages.FeaturedStickers/" class="current_page_link">messages.FeaturedStickers</a>;
<a href="/constructor/messages.featuredStickers/">messages.featuredStickers</a>#be382906 flags:<a href="/type/%23/">#</a> premium:flags.0?true hash:<a href="/type/long/">long</a> count:<a href="/type/int/">int</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; unread:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/messages.FeaturedStickers/" class="current_page_link">messages.FeaturedStickers</a>;

---functions---

<a href="/method/messages.getFeaturedStickers/">messages.getFeaturedStickers</a>#64780b14 hash:<a href="/type/long/">long</a> = <a href="/type/messages.FeaturedStickers/" class="current_page_link">messages.FeaturedStickers</a>;
<a href="/method/messages.getOldFeaturedStickers/">messages.getOldFeaturedStickers</a>#7ed094a1 offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.FeaturedStickers/" class="current_page_link">messages.FeaturedStickers</a>;
<a href="/method/messages.getFeaturedEmojiStickers/">messages.getFeaturedEmojiStickers</a>#ecf6736 hash:<a href="/type/long/">long</a> = <a href="/type/messages.FeaturedStickers/" class="current_page_link">messages.FeaturedStickers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.featuredStickersNotModified/">messages.featuredStickersNotModified</a></td><td>Featured stickers haven't changed</td></tr><tr><td><a href="/constructor/messages.featuredStickers/">messages.featuredStickers</a></td><td>Featured stickersets</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getFeaturedStickers/">messages.getFeaturedStickers</a></td><td>Get featured stickers</td></tr><tr><td><a href="/method/messages.getOldFeaturedStickers/">messages.getOldFeaturedStickers</a></td><td>Method for fetching previously featured stickers</td></tr><tr><td><a href="/method/messages.getFeaturedEmojiStickers/">messages.getFeaturedEmojiStickers</a></td><td>Gets featured custom emoji stickersets.</td></tr></tbody></table>
