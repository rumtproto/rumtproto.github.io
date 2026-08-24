---
title: "photos.uploadContactProfilePhoto"
original: "https://core.telegram.org/method/photos.uploadContactProfilePhoto"
section: ref
description: "Upload a custom profile picture for a contact, or suggest a new profile picture to a contact."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"photos.uploadContactProfilePhoto","url":"/method/photos.uploadContactProfilePhoto/"}]
layout: layout.njk
---

# photos.uploadContactProfilePhoto

Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.

The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photos.photo/">photos.photo</a>#20212ca8 photo:<a href="/type/Photo/">Photo</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photo/">photos.Photo</a>;
---functions---
<a href="/method/photos.uploadContactProfilePhoto/" class="current_page_link">photos.uploadContactProfilePhoto</a>#e14c4a71 flags:<a href="/type/%23/">#</a> suggest:flags.3?true save:flags.4?true user_id:<a href="/type/InputUser/">InputUser</a> file:flags.0?<a href="/type/InputFile/">InputFile</a> video:flags.1?<a href="/type/InputFile/">InputFile</a> video_start_ts:flags.2?<a href="/type/double/">double</a> video_emoji_markup:flags.5?<a href="/type/VideoSize/">VideoSize</a> = <a href="/type/photos.Photo/">photos.Photo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>suggest</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, will send a <a href="/constructor/messageActionSuggestProfilePhoto/">messageActionSuggestProfilePhoto</a> service message to <code>user_id</code>, suggesting them to use the specified profile picture; otherwise, will set a personal profile picture for the user (only visible to the current user).</td></tr><tr><td><strong>save</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, removes a previously set personal profile picture (does not affect suggested profile pictures, to remove them simply delete the <a href="/constructor/messageActionSuggestProfilePhoto/">messageActionSuggestProfilePhoto</a> service message with <a href="/method/messages.deleteMessages/">messages.deleteMessages</a>).</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The contact</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputFile/">InputFile</a></td><td>Profile photo</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputFile/">InputFile</a></td><td><a href="/api/files/#animated-profile-pictures">Animated profile picture</a> video</td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/double/">double</a></td><td>Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if <code>video</code> or <code>video_emoji_markup</code> is set.</td></tr><tr><td><strong>video_emoji_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/VideoSize/">VideoSize</a></td><td>Animated sticker profile picture, must contain either a <a href="/constructor/videoSizeEmojiMarkup/">videoSizeEmojiMarkup</a> or a <a href="/constructor/videoSizeStickerMarkup/">videoSizeStickerMarkup</a> constructor.</td></tr></tbody></table>

### Result

[photos.Photo](/type/photos.Photo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CONTACT_MISSING</td><td>The specified user is not a contact.</td></tr><tr><td>400</td><td>NEED_ACTION_MISSING</td><td>The caller didn't specify a valid action (either save or suggest) for the contact profile photo upload.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [messageActionSuggestProfilePhoto](/constructor/messageActionSuggestProfilePhoto/)

A new profile picture was suggested using [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/).

#### [messages.deleteMessages](/method/messages.deleteMessages/)

Deletes messages by their identifiers.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [videoSizeEmojiMarkup](/constructor/videoSizeEmojiMarkup/)

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [custom emoji sticker](/api/custom-emoji/).

#### [videoSizeStickerMarkup](/constructor/videoSizeStickerMarkup/)

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [sticker](/api/stickers/).
