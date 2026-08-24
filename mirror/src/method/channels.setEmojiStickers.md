---
title: "channels.setEmojiStickers"
original: "https://core.telegram.org/method/channels.setEmojiStickers"
section: ref
description: "Set a custom emoji stickerset for supergroups. Only usable after reaching at least the boost level » specified in the group_emoji_stickers_level_min » config parameter."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.setEmojiStickers","url":"/method/channels.setEmojiStickers/"}]
layout: layout.njk
---

# channels.setEmojiStickers

Set a [custom emoji stickerset](/api/custom-emoji/) for supergroups. Only usable after reaching at least the [boost level »](/api/boost/) specified in the [`group_emoji_stickers_level_min` »](/api/config/#group-emoji-stickers-level-min) config parameter.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/channels.setEmojiStickers/" class="current_page_link">channels.setEmojiStickers</a>#3cd930b7 channel:<a href="/type/InputChannel/">InputChannel</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>The supergroup</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>The custom emoji stickerset to associate to the supergroup</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr></tbody></table>

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
