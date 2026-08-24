---
title: "photoCachedSize"
original: "https://core.telegram.org/constructor/photoCachedSize"
section: ref
description: "Description of an image and its content."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"photoCachedSize","url":"/constructor/photoCachedSize/"}]
layout: layout.njk
---

# photoCachedSize

Description of an image and its content.

#### [End-to-end schema](/schema/end-to-end/)

```
===23===
photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/photoCachedSize/" class="current_page_link">photoCachedSize</a>#21e1ad6 type:<a href="/type/string/">string</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/PhotoSize/">PhotoSize</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/files/#photosize-type-values">PhotoSize.type value »</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Image width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Image height</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Binary data, file content</td></tr></tbody></table>

### Type

[PhotoSize](/type/PhotoSize/)

### Photosize.type values

See [PhotoSize.type values »](/api/files/#photosize-type-values).

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
