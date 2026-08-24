---
title: "inputMediaPhotoExternal"
original: "https://core.telegram.org/constructor/inputMediaPhotoExternal"
section: ref
description: "New photo that will be uploaded by the server using the specified URL"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMediaPhotoExternal","url":"/constructor/inputMediaPhotoExternal/"}]
layout: layout.njk
---

# inputMediaPhotoExternal

New photo that will be uploaded by the server using the specified URL

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputMediaPhotoExternal/" class="current_page_link">inputMediaPhotoExternal</a>#e5bbfe1a flags:<a href="/type/%23/">#</a> spoiler:flags.1?true url:<a href="/type/string/">string</a> ttl_seconds:flags.0?<a href="/type/int/">int</a> = <a href="/type/InputMedia/">InputMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>spoiler</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this media should be hidden behind a spoiler warning</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>URL of the photo</td></tr><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Time to live of self-destructing photo, can be <code>0</code> to disable self-destruction, <code>0x7FFFFFFF</code> to self-destruct the photo immediately after it's played; otherwise self-destructs <code>ttl_seconds</code> after it's played.</td></tr></tbody></table>

### Type

[InputMedia](/type/InputMedia/)
