---
title: "chatPhoto"
original: "https://core.telegram.org/constructor/chatPhoto"
section: ref
description: "How to transfer large data batches correctly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"chatPhoto","url":"/constructor/chatPhoto/"}]
layout: layout.njk
---

# chatPhoto

Group profile photo.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatPhoto/" class="current_page_link">chatPhoto</a>#1c6e1c11 flags:<a href="/type/%23/">#</a> has_video:flags.0?true photo_id:<a href="/type/long/">long</a> stripped_thumb:flags.1?<a href="/type/bytes/">bytes</a> dc_id:<a href="/type/int/">int</a> = <a href="/type/ChatPhoto/">ChatPhoto</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the user has an animated profile picture</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Photo ID</td></tr><tr><td><strong>stripped_thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/bytes/">bytes</a></td><td><a href="/api/files/#stripped-thumbnails">Stripped thumbnail</a></td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC where this photo is stored</td></tr></tbody></table>

### Type

[ChatPhoto](/type/ChatPhoto/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
