---
title: "Photo"
original: "https://core.telegram.org/type/Photo"
section: ref
description: "Object describes a photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Photo","url":"/type/Photo/"}]
layout: layout.njk
---

# Photo

Object describes a photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photoEmpty/">photoEmpty</a>#2331b22d id:<a href="/type/long/">long</a> = <a href="/type/Photo/" class="current_page_link">Photo</a>;
<a href="/constructor/photo/">photo</a>#fb197a65 flags:<a href="/type/%23/">#</a> has_stickers:flags.0?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> sizes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; video_sizes:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt; dc_id:<a href="/type/int/">int</a> = <a href="/type/Photo/" class="current_page_link">Photo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/photoEmpty/">photoEmpty</a></td><td>Empty constructor, non-existent photo</td></tr><tr><td><a href="/constructor/photo/">photo</a></td><td>Photo</td></tr></tbody></table>
