---
title: "photos.photosSlice"
original: "https://core.telegram.org/constructor/photos.photosSlice"
section: ref
description: "Incomplete list of photos with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photos.photosSlice","url":"/constructor/photos.photosSlice/"}]
layout: layout.njk
---

# photos.photosSlice

Incomplete list of photos with auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photos.photosSlice/" class="current_page_link">photos.photosSlice</a>#15051f54 count:<a href="/type/int/">int</a> photos:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/photos.Photos/">photos.Photos</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of photos</td></tr><tr><td><strong>photos</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Photo/">Photo</a>&gt;</td><td>List of photos</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>List of mentioned users</td></tr></tbody></table>

### Type

[photos.Photos](/type/photos.Photos/)
