---
title: "Messages.StickerSet"
original: "https://core.telegram.org/type/messages.StickerSet"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.StickerSet","url":"/type/messages.StickerSet/"}]
layout: layout.njk
---

# Messages.StickerSet

Stickerset

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSet/">messages.stickerSet</a>#6e153f16 set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/constructor/messages.stickerSetNotModified/">messages.stickerSetNotModified</a>#d3f924eb = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;

---functions---

<a href="/method/messages.getStickerSet/">messages.getStickerSet</a>#c8a0ec74 stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> hash:<a href="/type/int/">int</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;

<a href="/method/stickers.createStickerSet/">stickers.createStickerSet</a>#9021ab67 flags:<a href="/type/%23/">#</a> masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:<a href="/type/InputUser/">InputUser</a> title:<a href="/type/string/">string</a> short_name:<a href="/type/string/">string</a> thumb:flags.2?<a href="/type/InputDocument/">InputDocument</a> stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputStickerSetItem/">InputStickerSetItem</a>&gt; software:flags.3?<a href="/type/string/">string</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/method/stickers.removeStickerFromSet/">stickers.removeStickerFromSet</a>#f7760f51 sticker:<a href="/type/InputDocument/">InputDocument</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/method/stickers.changeStickerPosition/">stickers.changeStickerPosition</a>#ffb6d4ca sticker:<a href="/type/InputDocument/">InputDocument</a> position:<a href="/type/int/">int</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/method/stickers.addStickerToSet/">stickers.addStickerToSet</a>#8653febe stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> sticker:<a href="/type/InputStickerSetItem/">InputStickerSetItem</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/method/stickers.setStickerSetThumb/">stickers.setStickerSetThumb</a>#a76a5392 flags:<a href="/type/%23/">#</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> thumb:flags.0?<a href="/type/InputDocument/">InputDocument</a> thumb_document_id:flags.1?<a href="/type/long/">long</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/method/stickers.changeSticker/">stickers.changeSticker</a>#f5537ebc flags:<a href="/type/%23/">#</a> sticker:<a href="/type/InputDocument/">InputDocument</a> emoji:flags.0?<a href="/type/string/">string</a> mask_coords:flags.1?<a href="/type/MaskCoords/">MaskCoords</a> keywords:flags.2?<a href="/type/string/">string</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/method/stickers.renameStickerSet/">stickers.renameStickerSet</a>#124b1c00 stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> title:<a href="/type/string/">string</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;
<a href="/method/stickers.replaceSticker/">stickers.replaceSticker</a>#4696459a sticker:<a href="/type/InputDocument/">InputDocument</a> new_sticker:<a href="/type/InputStickerSetItem/">InputStickerSetItem</a> = <a href="/type/messages.StickerSet/" class="current_page_link">messages.StickerSet</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.stickerSet/">messages.stickerSet</a></td><td>Stickerset and stickers inside it</td></tr><tr><td><a href="/constructor/messages.stickerSetNotModified/">messages.stickerSetNotModified</a></td><td>The stickerset hasn't changed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getStickerSet/">messages.getStickerSet</a></td><td>Get info about a stickerset</td></tr><tr><td><a href="/method/stickers.createStickerSet/">stickers.createStickerSet</a></td><td>Create a stickerset.</td></tr><tr><td><a href="/method/stickers.removeStickerFromSet/">stickers.removeStickerFromSet</a></td><td>Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot.</td></tr><tr><td><a href="/method/stickers.changeStickerPosition/">stickers.changeStickerPosition</a></td><td>Changes the absolute position of a sticker in the set to which it belongs. The sticker set must have been created by the current user/bot.</td></tr><tr><td><a href="/method/stickers.addStickerToSet/">stickers.addStickerToSet</a></td><td>Add a sticker to a stickerset. The sticker set must have been created by the current user/bot.</td></tr><tr><td><a href="/method/stickers.setStickerSetThumb/">stickers.setStickerSetThumb</a></td><td>Set stickerset thumbnail</td></tr><tr><td><a href="/method/stickers.changeSticker/">stickers.changeSticker</a></td><td>Update the keywords, emojis or <a href="/api/stickers/#mask-stickers">mask coordinates</a> of a sticker.</td></tr><tr><td><a href="/method/stickers.renameStickerSet/">stickers.renameStickerSet</a></td><td>Renames a stickerset.</td></tr><tr><td><a href="/method/stickers.replaceSticker/">stickers.replaceSticker</a></td><td>Replace a sticker in a <a href="/api/stickers/">stickerset »</a>.</td></tr></tbody></table>
