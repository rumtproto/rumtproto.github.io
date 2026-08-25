---
title: "stickers.createStickerSet"
original: "https://core.telegram.org/method/stickers.createStickerSet"
section: ref
description: "Telegram allows including animated and static custom emojis inside of messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.createStickerSet","url":"/method/stickers.createStickerSet/"}]
layout: layout.njk
---

# stickers.createStickerSet

Create a stickerset.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSet/">messages.stickerSet</a>#6e153f16 set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
<a href="/constructor/messages.stickerSetNotModified/">messages.stickerSetNotModified</a>#d3f924eb = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
---functions---
<a href="/method/stickers.createStickerSet/" class="current_page_link">stickers.createStickerSet</a>#9021ab67 flags:<a href="/type/%23/">#</a> masks:flags.0?true emojis:flags.5?true text_color:flags.6?true user_id:<a href="/type/InputUser/">InputUser</a> title:<a href="/type/string/">string</a> short_name:<a href="/type/string/">string</a> thumb:flags.2?<a href="/type/InputDocument/">InputDocument</a> stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputStickerSetItem/">InputStickerSetItem</a>&gt; software:flags.3?<a href="/type/string/">string</a> = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this is a mask stickerset</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether this is a <a href="/api/custom-emoji/">custom emoji</a> stickerset.</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether the color of TGS custom emojis contained in this set should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context. For custom emoji stickersets only.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Stickerset owner</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Stickerset name, <code>1-64</code> chars</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name of sticker set, to be used in <a href="/api/links/#stickerset-links">sticker deep links »</a>. Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and, <strong>if called by a bot</strong>, must end in <code>"_by_&lt;bot_username&gt;"</code>. <code>&lt;bot_username&gt;</code> is case insensitive. 1-64 characters.</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputDocument/">InputDocument</a></td><td>Thumbnail</td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputStickerSetItem/">InputStickerSetItem</a>&gt;</td><td>Stickers</td></tr><tr><td><strong>software</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Used when <a href="/import-stickers/">importing stickers using the sticker import SDKs</a>, specifies the name of the software that created the stickers</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PACK_SHORT_NAME_INVALID</td><td>Short pack name invalid.</td></tr><tr><td>400</td><td>PACK_SHORT_NAME_OCCUPIED</td><td>A stickerpack with this name already exists.</td></tr><tr><td>400</td><td>PACK_TITLE_INVALID</td><td>The stickerpack title is invalid.</td></tr><tr><td>400</td><td>PACK_TYPE_INVALID</td><td>The masks and emojis flags are mutually exclusive.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>STICKERS_EMPTY</td><td>No sticker provided.</td></tr><tr><td>400</td><td>STICKER_EMOJI_INVALID</td><td>Sticker emoji invalid.</td></tr><tr><td>400</td><td>STICKER_FILE_INVALID</td><td>Sticker file invalid.</td></tr><tr><td>400</td><td>STICKER_GIF_DIMENSIONS</td><td>The specified video sticker has invalid dimensions.</td></tr><tr><td>400</td><td>STICKER_PNG_DIMENSIONS</td><td>Sticker png dimensions invalid.</td></tr><tr><td>400</td><td>STICKER_PNG_NOPNG</td><td>One of the specified stickers is not a valid PNG file.</td></tr><tr><td>400</td><td>STICKER_TGS_NODOC</td><td>You must send the animated sticker as a document.</td></tr><tr><td>400</td><td>STICKER_TGS_NOTGS</td><td>Invalid TGS sticker provided.</td></tr><tr><td>400</td><td>STICKER_THUMB_PNG_NOPNG</td><td>Incorrect stickerset thumb file provided, PNG / WEBP expected.</td></tr><tr><td>400</td><td>STICKER_THUMB_TGS_NOTGS</td><td>Incorrect stickerset TGS thumb file provided.</td></tr><tr><td>400</td><td>STICKER_VIDEO_BIG</td><td>The specified video sticker is too big.</td></tr><tr><td>400</td><td>STICKER_VIDEO_NODOC</td><td>You must send the video sticker as a document.</td></tr><tr><td>400</td><td>STICKER_VIDEO_NOWEBM</td><td>The specified video sticker is not in webm format.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
