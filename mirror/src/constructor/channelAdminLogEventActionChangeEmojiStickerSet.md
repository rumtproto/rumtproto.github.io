---
title: "channelAdminLogEventActionChangeEmojiStickerSet"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeEmojiStickerSet"
section: ref
description: "The supergroup's custom emoji stickerset was changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionChangeEmojiStickerSet","url":"/constructor/channelAdminLogEventActionChangeEmojiStickerSet/"}]
layout: layout.njk
---

# channelAdminLogEventActionChangeEmojiStickerSet

The supergroup's [custom emoji stickerset](/api/boost/#setting-a-custom-emoji-stickerset-for-supergroups) was changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionChangeEmojiStickerSet/" class="current_page_link">channelAdminLogEventActionChangeEmojiStickerSet</a>#46d840ab prev_stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> new_stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>Old value</td></tr><tr><td><strong>new_stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>New value</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
