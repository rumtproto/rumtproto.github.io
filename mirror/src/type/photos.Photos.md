---
title: "photos.Photos"
original: "https://core.telegram.org/type/photos.Photos"
section: ref
description: "Object contains list of photos with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photos.Photos","url":"/type/photos.Photos/"}]
layout: layout.njk
---

# photos.Photos

Object contains list of photos with auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photos.photos/">photos.photos</a>#8dca6aa5 photos:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photos/" class="current_page_link">photos.Photos</a>;
<a href="/constructor/photos.photosSlice/">photos.photosSlice</a>#15051f54 count:<a href="/type/int/">int</a> photos:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photos/" class="current_page_link">photos.Photos</a>;

---functions---

<a href="/method/photos.getUserPhotos/">photos.getUserPhotos</a>#91cd32a8 user_id:<a href="/type/InputUser/">InputUser</a> offset:<a href="/type/int/">int</a> max_id:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/photos.Photos/" class="current_page_link">photos.Photos</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/photos.photos/">photos.photos</a></td><td>Full list of photos with auxiliary data.</td></tr><tr><td><a href="/constructor/photos.photosSlice/">photos.photosSlice</a></td><td>Incomplete list of photos with auxiliary data.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/photos.getUserPhotos/">photos.getUserPhotos</a></td><td>Returns the list of user photos.</td></tr></tbody></table>
