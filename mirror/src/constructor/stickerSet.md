---
title: "stickerSet"
original: "https://core.telegram.org/constructor/stickerSet"
section: ref
description: "Represents a stickerset (stickerpack)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stickerSet","url":"/constructor/stickerSet/"}]
layout: layout.njk
---

# stickerSet

Represents a stickerset (stickerpack)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stickerSet/" class="current_page_link">stickerSet</a>#2dd14edc flags:<a href="/type/%23/">#</a> archived:flags.1?true official:flags.2?true masks:flags.3?true emojis:flags.7?true text_color:flags.9?true channel_emoji_status:flags.10?true creator:flags.11?true installed_date:flags.0?<a href="/type/int/">int</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> title:<a href="/type/string/">string</a> short_name:<a href="/type/string/">string</a> thumbs:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; thumb_dc_id:flags.4?<a href="/type/int/">int</a> thumb_version:flags.4?<a href="/type/int/">int</a> thumb_document_id:flags.8?<a href="/type/long/">long</a> count:<a href="/type/int/">int</a> hash:<a href="/type/int/">int</a> = <a href="/type/StickerSet/">StickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>archived</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this stickerset was archived (due to too many saved stickers in the current account)</td></tr><tr><td><strong>official</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Is this stickerset official</td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Is this a mask stickerset</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>This is a custom emoji stickerset</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether the color of this TGS custom emoji stickerset should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context.</td></tr><tr><td><strong>channel_emoji_status</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>If set, this custom emoji stickerset can be used in <a href="/api/emoji-status/">channel/supergroup emoji statuses</a>.</td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>Whether we created this stickerset</td></tr><tr><td><strong>installed_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>When was this stickerset installed</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the stickerset</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash of stickerset</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Title of stickerset</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name of stickerset, used when sharing stickerset using <a href="/api/links/#stickerset-links">stickerset deep links</a>.</td></tr><tr><td><strong>thumbs</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt;</td><td>Stickerset thumbnail</td></tr><tr><td><strong>thumb_dc_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>DC ID of thumbnail</td></tr><tr><td><strong>thumb_version</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Thumbnail version</td></tr><tr><td><strong>thumb_document_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/long/">long</a></td><td>Document ID of custom emoji thumbnail, fetch the document using <a href="/method/messages.getCustomEmojiDocuments/">messages.getCustomEmojiDocuments</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of stickers in pack</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Hash</td></tr></tbody></table>

### Type

[StickerSet](/type/StickerSet/)

### Related pages

#### [Emoji status](/api/emoji-status/)

Telegram allows users to set an emoticon or a custom emoji as status, to show next to their name in chats and profiles.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/)

Fetch [custom emoji stickers »](/api/custom-emoji/).

Returns a list of [documents](/constructor/document/) with the animated custom emoji in TGS format, and a [documentAttributeCustomEmoji](/constructor/documentAttributeCustomEmoji/) attribute with the original emoji and info about the emoji stickerset this custom emoji belongs to.
