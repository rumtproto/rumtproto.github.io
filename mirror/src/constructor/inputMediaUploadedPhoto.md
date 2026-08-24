---
title: "inputMediaUploadedPhoto"
original: "https://core.telegram.org/constructor/inputMediaUploadedPhoto"
section: ref
description: "How to transfer large data batches correctly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaUploadedPhoto","url":"/constructor/inputMediaUploadedPhoto/"}]
layout: layout.njk
---

# inputMediaUploadedPhoto

Photo

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaUploadedPhoto/" class="current_page_link">inputMediaUploadedPhoto</a>#1e287d04 flags:<a href="/type/%23/">#</a> spoiler:flags.2?true file:<a href="/type/InputFile/">InputFile</a> stickers:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputDocument/">InputDocument</a>&gt; ttl_seconds:flags.1?<a href="/type/int/">int</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>live_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether this is a live photo, i.e. a still photo paired with the short <code>video</code> clip captured alongside it</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile/">InputFile</a></td><td>The <a href="/api/files/">uploaded file</a></td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputDocument/">InputDocument</a>&gt;</td><td>Attached mask stickers</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Time to live of self-destructing photo, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the photo immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/InputDocument/">InputDocument</a></td><td>The short video clip of the live photo</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
