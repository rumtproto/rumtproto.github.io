---
title: "videoSizeEmojiMarkup"
original: "https://core.telegram.org/constructor/videoSizeEmojiMarkup"
section: ref
description: "An animated profile picture based on a custom emoji sticker."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"videoSizeEmojiMarkup","url":"/constructor/videoSizeEmojiMarkup/"}]
layout: layout.njk
---

# videoSizeEmojiMarkup

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [custom emoji sticker](/api/custom-emoji/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/videoSizeEmojiMarkup/" class="current_page_link">videoSizeEmojiMarkup</a>#f85c413c emoji_id:<a href="/type/long/">long</a> background_colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/VideoSize/">VideoSize</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>emoji_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/custom-emoji/">Custom emoji ID</a>: the custom emoji sticker is shown at the center of the profile picture and occupies at most 67% of it.</td></tr><tr><td><strong>background_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>1, 2, 3 or 4 RBG-24 colors used to generate a solid (1), gradient (2) or freeform gradient (3, 4) background, similar to how <a href="/api/wallpapers/#fill-types">fill wallpapers</a> are generated. The rotation angle for gradient backgrounds is 0.</td></tr></tbody></table>

### Type

[VideoSize](/type/VideoSize/)

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
