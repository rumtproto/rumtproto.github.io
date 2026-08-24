---
title: "photo"
original: "https://core.telegram.org/constructor/photo"
section: ref
description: "How to handle file references."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photo","url":"/constructor/photo/"}]
layout: layout.njk
---

# photo

Photo

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photo/" class="current_page_link">photo</a>#fb197a65 flags:<a href="/type/%23/">#</a> has_stickers:flags.0?true id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> sizes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; video_sizes:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt; dc_id:<a href="/type/int/">int</a> = <a href="/type/Photo/">Photo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the photo has mask stickers attached to it</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/file-references/">file reference</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of upload</td></tr><tr><td><strong>sizes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt;</td><td>Available sizes for download</td></tr><tr><td><strong>video_sizes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt;</td><td><a href="/api/files/#animated-profile-pictures">For animated profiles</a>, the MPEG4 videos</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC ID to use for download</td></tr></tbody></table>

### Type

[Photo](/type/Photo/)

### Related pages

#### [File references](/api/file-references/)

How to handle file references.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
