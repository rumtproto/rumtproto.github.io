---
title: "inputChatUploadedPhoto"
original: "https://core.telegram.org/constructor/inputChatUploadedPhoto"
section: ref
description: "New photo to be set as group profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputChatUploadedPhoto","url":"/constructor/inputChatUploadedPhoto/"}]
layout: layout.njk
---

# inputChatUploadedPhoto

New photo to be set as group profile photo.

The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputChatUploadedPhoto/" class="current_page_link">inputChatUploadedPhoto</a>#bdcdaec0 flags:<a href="/type/%23/">#</a> file:flags.0?<a href="/type/InputFile/">InputFile</a> video:flags.1?<a href="/type/InputFile/">InputFile</a> video_start_ts:flags.2?<a href="/type/double/">double</a> video_emoji_markup:flags.3?<a href="/type/VideoSize/">VideoSize</a> = <a href="/type/InputChatPhoto/">InputChatPhoto</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputFile/">InputFile</a></td><td>File saved in parts using the method <a href="/method/upload.saveFilePart/">upload.saveFilePart</a></td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputFile/">InputFile</a></td><td>Square video for animated profile picture</td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/double/">double</a></td><td>Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if <code>video</code> or <code>video_emoji_markup</code> is set.</td></tr><tr><td><strong>video_emoji_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/VideoSize/">VideoSize</a></td><td>Animated sticker profile picture, must contain either a <a href="/constructor/videoSizeEmojiMarkup/">videoSizeEmojiMarkup</a> or a <a href="/constructor/videoSizeStickerMarkup/">videoSizeStickerMarkup</a> constructor.</td></tr></tbody></table>

### Type

[InputChatPhoto](/type/InputChatPhoto/)

### Related pages

#### [upload.saveFilePart](/method/upload.saveFilePart/)

Saves a part of file for further sending to one of the methods.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [custom emoji sticker](/api/custom-emoji/).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [sticker](/api/stickers/).
