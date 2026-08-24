---
title: "photos.updateProfilePhoto"
original: "https://core.telegram.org/method/photos.updateProfilePhoto"
section: ref
description: "Installs a previously uploaded photo as a profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"photos.updateProfilePhoto","url":"/method/photos.updateProfilePhoto/"}]
layout: layout.njk
---

# photos.updateProfilePhoto

Installs a previously uploaded photo as a profile photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photos.photo/">photos.photo</a>#20212ca8 photo:<a href="/type/Photo/">Photo</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photo/">photos.Photo</a>;
---functions---
<a href="/method/photos.updateProfilePhoto/" class="current_page_link">photos.updateProfilePhoto</a>#9e82039 flags:<a href="/type/%23/">#</a> fallback:flags.0?true bot:flags.1?<a href="/type/InputUser/">InputUser</a> id:<a href="/type/InputPhoto/">InputPhoto</a> = <a href="/type/photos.Photo/">photos.Photo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>fallback</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputUser/">InputUser</a></td><td>Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputPhoto/">InputPhoto</a></td><td>Input photo</td></tr></tbody></table>

### Result

[photos.Photo](/type/photos.Photo/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ALBUM_PHOTOS_TOO_MANY</td><td>You have uploaded too many profile photos, delete some before retrying.</td></tr><tr><td>400</td><td>BOT_FALLBACK_UNSUPPORTED</td><td>The fallback flag can't be set for bots.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>The number of file parts is invalid.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>The provided location is invalid.</td></tr><tr><td>400</td><td>PHOTO_CROP_SIZE_SMALL</td><td>Photo is too small.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>The extension of the photo is invalid.</td></tr><tr><td>400</td><td>PHOTO_ID_INVALID</td><td>Photo ID invalid.</td></tr></tbody></table>
