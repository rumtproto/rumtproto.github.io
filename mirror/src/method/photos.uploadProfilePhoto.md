---
title: "photos.uploadProfilePhoto"
original: "https://core.telegram.org/method/photos.uploadProfilePhoto"
section: ref
description: "Updates current user profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"photos.uploadProfilePhoto","url":"/method/photos.uploadProfilePhoto/"}]
layout: layout.njk
---

# photos.uploadProfilePhoto

Updates current user profile photo.

The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photos.photo/">photos.photo</a>#20212ca8 photo:<a href="/type/Photo/">Photo</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photo/">photos.Photo</a>;
---functions---
<a href="/method/photos.uploadProfilePhoto/" class="current_page_link">photos.uploadProfilePhoto</a>#388a3b5 flags:<a href="/type/%23/">#</a> fallback:flags.3?true bot:flags.5?<a href="/type/InputUser/">InputUser</a> file:flags.0?<a href="/type/InputFile/">InputFile</a> video:flags.1?<a href="/type/InputFile/">InputFile</a> video_start_ts:flags.2?<a href="/type/double/">double</a> video_emoji_markup:flags.4?<a href="/type/VideoSize/">VideoSize</a> = <a href="/type/photos.Photo/">photos.Photo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>fallback</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/InputUser/">InputUser</a></td><td>Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user.</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputFile/">InputFile</a></td><td>Profile photo</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputFile/">InputFile</a></td><td><a href="/api/files/#animated-profile-pictures">Animated profile picture</a> video</td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/double/">double</a></td><td>Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if <code>video</code> or <code>video_emoji_markup</code> is set.</td></tr><tr><td><strong>video_emoji_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/VideoSize/">VideoSize</a></td><td>Animated sticker profile picture, must contain either a <a href="/constructor/videoSizeEmojiMarkup/">videoSizeEmojiMarkup</a> or a <a href="/constructor/videoSizeStickerMarkup/">videoSizeStickerMarkup</a> constructor.</td></tr></tbody></table>

### Result

[photos.Photo](/type/photos.Photo/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ALBUM_PHOTOS_TOO_MANY</td><td>You have uploaded too many profile photos, delete some before retrying.</td></tr><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>EMOJI_MARKUP_INVALID</td><td>The specified <code>video_emoji_markup</code> was invalid.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>The number of file parts is invalid.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>400</td><td>PHOTO_CROP_FILE_MISSING</td><td>Photo crop file missing.</td></tr><tr><td>400</td><td>PHOTO_CROP_SIZE_SMALL</td><td>Photo is too small.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>The extension of the photo is invalid.</td></tr><tr><td>400</td><td>PHOTO_FILE_MISSING</td><td>Profile photo file missing.</td></tr><tr><td>400</td><td>PHOTO_INVALID</td><td>Photo invalid.</td></tr><tr><td>400</td><td>STICKER_MIME_INVALID</td><td>The specified sticker MIME type is invalid.</td></tr><tr><td>400</td><td>VIDEO_FILE_INVALID</td><td>The specified video file is invalid.</td></tr></tbody></table>

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [custom emoji sticker](/api/custom-emoji/).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [sticker](/api/stickers/).
