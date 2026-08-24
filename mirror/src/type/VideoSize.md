---
title: "VideoSize"
original: "https://core.telegram.org/type/VideoSize"
section: ref
description: "Represents an animated video thumbnail"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"VideoSize","url":"/type/VideoSize/"}]
layout: layout.njk
---

# VideoSize

Represents an animated video thumbnail

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/videoSize/">videoSize</a>#de33b094 flags:<a href="/type/%23/">#</a> type:<a href="/type/string/">string</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> video_start_ts:flags.0?<a href="/type/double/">double</a> = <a href="/type/VideoSize/" class="current_page_link">VideoSize</a>;
<a href="/constructor/videoSizeEmojiMarkup/">videoSizeEmojiMarkup</a>#f85c413c emoji_id:<a href="/type/long/">long</a> background_colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/VideoSize/" class="current_page_link">VideoSize</a>;
<a href="/constructor/videoSizeStickerMarkup/">videoSizeStickerMarkup</a>#da082fe stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> sticker_id:<a href="/type/long/">long</a> background_colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/VideoSize/" class="current_page_link">VideoSize</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/videoSize/">videoSize</a></td><td>An <a href="/api/files/#animated-profile-pictures">animated profile picture</a> in MPEG4 format</td></tr><tr><td><a href="/constructor/videoSizeEmojiMarkup/">videoSizeEmojiMarkup</a></td><td>An <a href="/api/files/#animated-profile-pictures">animated profile picture</a> based on a <a href="/api/custom-emoji/">custom emoji sticker</a>.</td></tr><tr><td><a href="/constructor/videoSizeStickerMarkup/">videoSizeStickerMarkup</a></td><td>An <a href="/api/files/#animated-profile-pictures">animated profile picture</a> based on a <a href="/api/stickers/">sticker</a>.</td></tr></tbody></table>
