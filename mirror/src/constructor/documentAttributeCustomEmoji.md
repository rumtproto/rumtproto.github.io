---
title: "documentAttributeCustomEmoji"
original: "https://core.telegram.org/constructor/documentAttributeCustomEmoji"
section: ref
description: "Info about a custom emoji"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"documentAttributeCustomEmoji","url":"/constructor/documentAttributeCustomEmoji/"}]
layout: layout.njk
---

# documentAttributeCustomEmoji

Info about a custom emoji

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentAttributeCustomEmoji/" class="current_page_link">documentAttributeCustomEmoji</a>#fd149899 flags:<a href="/type/%23/">#</a> free:flags.0?true text_color:flags.1?true alt:<a href="/type/string/">string</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>free</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this custom emoji can be sent by non-Premium users</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the color of this TGS custom emoji should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context.</td></tr><tr><td><strong>alt</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The actual emoji</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>The emoji stickerset to which this emoji belongs.</td></tr></tbody></table>

### Type

[DocumentAttribute](/type/DocumentAttribute/)
