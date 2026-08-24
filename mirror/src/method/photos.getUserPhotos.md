---
title: "photos.getUserPhotos"
original: "https://core.telegram.org/method/photos.getUserPhotos"
section: ref
description: "Returns the list of user photos."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"photos.getUserPhotos","url":"/method/photos.getUserPhotos/"}]
layout: layout.njk
---

# photos.getUserPhotos

Returns the list of user photos.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photos.photos/">photos.photos</a>#8dca6aa5 photos:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photos/">photos.Photos</a>;
<a href="/constructor/photos.photosSlice/">photos.photosSlice</a>#15051f54 count:<a href="/type/int/">int</a> photos:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photos/">photos.Photos</a>;
---functions---
<a href="/method/photos.getUserPhotos/" class="current_page_link">photos.getUserPhotos</a>#91cd32a8 user_id:<a href="/type/InputUser/">InputUser</a> offset:<a href="/type/int/">int</a> max_id:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/photos.Photos/">photos.Photos</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>User ID</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of list elements to be skipped</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>If a positive value was transferred, the method will return only photos with IDs less than the set one. This parameter is often useful when <a href="/api/file-references/">refetching file references »</a>, as in conjuction with <code>limit=1</code> and <code>offset=-1</code> the <a href="/constructor/photo/">photo</a> object with the <code>id</code> specified in <code>max_id</code> can be fetched.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of list elements to be returned</td></tr></tbody></table>

### Result

[photos.Photos](/type/photos.Photos/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MAX_ID_INVALID</td><td>The provided max ID is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [File references](/api/file-references/)

How to handle file references.

#### [photo](/constructor/photo/)

Photo
