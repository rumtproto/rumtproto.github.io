---
title: "StickerSetCovered"
original: "https://core.telegram.org/type/StickerSetCovered"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StickerSetCovered","url":"/type/StickerSetCovered/"}]
layout: layout.njk
---

# StickerSetCovered

Stickerset preview

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stickerSetCovered/">stickerSetCovered</a>#6410a5d2 set:<a href="/type/StickerSet/">StickerSet</a> cover:<a href="/type/Document/">Document</a> = <a href="/type/StickerSetCovered/" class="current_page_link">StickerSetCovered</a>;
<a href="/constructor/stickerSetMultiCovered/">stickerSetMultiCovered</a>#3407e51b set:<a href="/type/StickerSet/">StickerSet</a> covers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/StickerSetCovered/" class="current_page_link">StickerSetCovered</a>;
<a href="/constructor/stickerSetFullCovered/">stickerSetFullCovered</a>#40d13c0e set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/StickerSetCovered/" class="current_page_link">StickerSetCovered</a>;
<a href="/constructor/stickerSetNoCovered/">stickerSetNoCovered</a>#77b15d1c set:<a href="/type/StickerSet/">StickerSet</a> = <a href="/type/StickerSetCovered/" class="current_page_link">StickerSetCovered</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stickerSetCovered/">stickerSetCovered</a></td><td>Stickerset with a single sticker as preview</td></tr><tr><td><a href="/constructor/stickerSetMultiCovered/">stickerSetMultiCovered</a></td><td>Stickerset, with multiple stickers as preview</td></tr><tr><td><a href="/constructor/stickerSetFullCovered/">stickerSetFullCovered</a></td><td>Stickerset preview with all stickers of the stickerset included.<br>Currently used only for <a href="/api/custom-emoji/">custom emoji stickersets</a>, to avoid a further call to <a href="/method/messages.getStickerSet/">messages.getStickerSet</a>.</td></tr><tr><td><a href="/constructor/stickerSetNoCovered/">stickerSetNoCovered</a></td><td>Just the stickerset information, with no previews.</td></tr></tbody></table>
