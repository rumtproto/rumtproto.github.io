---
title: "userProfilePhoto"
original: "https://core.telegram.org/constructor/userProfilePhoto"
section: ref
description: "How to transfer large data batches correctly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"userProfilePhoto","url":"/constructor/userProfilePhoto/"}]
layout: layout.njk
---

# userProfilePhoto

User profile photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/userProfilePhoto/" class="current_page_link">userProfilePhoto</a>#82d1f706 flags:<a href="/type/%23/">#</a> has_video:flags.0?true personal:flags.2?true photo_id:<a href="/type/long/">long</a> stripped_thumb:flags.1?<a href="/type/bytes/">bytes</a> dc_id:<a href="/type/int/">int</a> = <a href="/type/UserProfilePhoto/">UserProfilePhoto</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether an <a href="/api/files/#animated-profile-pictures">animated profile picture</a> is available for this user</td></tr><tr><td><strong>personal</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this profile photo is only visible to us (i.e. it was set using <a href="/method/photos.uploadContactProfilePhoto/">photos.uploadContactProfilePhoto</a>).</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier of the respective photo</td></tr><tr><td><strong>stripped_thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/bytes/">bytes</a></td><td><a href="/api/files/#stripped-thumbnails">Stripped thumbnail</a></td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC ID where the photo is stored</td></tr></tbody></table>

### Type

[UserProfilePhoto](/type/UserProfilePhoto/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/)

Upload a custom profile picture for a contact, or suggest a new profile picture to a contact.

The `file`, `video` and `video_emoji_markup` flags are mutually exclusive.
