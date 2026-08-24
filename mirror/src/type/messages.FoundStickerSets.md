---
title: "Messages.FoundStickerSets"
original: "https://core.telegram.org/type/messages.FoundStickerSets"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.FoundStickerSets","url":"/type/messages.FoundStickerSets/"}]
layout: layout.njk
---

# Messages.FoundStickerSets

Found stickersets

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.foundStickerSetsNotModified/">messages.foundStickerSetsNotModified</a>#d54b65d = <a href="/type/messages.FoundStickerSets/" class="current_page_link">messages.FoundStickerSets</a>;
<a href="/constructor/messages.foundStickerSets/">messages.foundStickerSets</a>#8af09dd2 hash:<a href="/type/long/">long</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; = <a href="/type/messages.FoundStickerSets/" class="current_page_link">messages.FoundStickerSets</a>;

---functions---

<a href="/method/messages.searchStickerSets/">messages.searchStickerSets</a>#35705b8a flags:<a href="/type/%23/">#</a> exclude_featured:flags.0?true q:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.FoundStickerSets/" class="current_page_link">messages.FoundStickerSets</a>;
<a href="/method/messages.searchEmojiStickerSets/">messages.searchEmojiStickerSets</a>#92b4494c flags:<a href="/type/%23/">#</a> exclude_featured:flags.0?true q:<a href="/type/string/">string</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.FoundStickerSets/" class="current_page_link">messages.FoundStickerSets</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.foundStickerSetsNotModified/">messages.foundStickerSetsNotModified</a></td><td>No further results were found</td></tr><tr><td><a href="/constructor/messages.foundStickerSets/">messages.foundStickerSets</a></td><td>Found stickersets</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.searchStickerSets/">messages.searchStickerSets</a></td><td>Search for stickersets</td></tr><tr><td><a href="/method/messages.searchEmojiStickerSets/">messages.searchEmojiStickerSets</a></td><td>Search for <a href="/api/custom-emoji/">custom emoji stickersets »</a></td></tr></tbody></table>
