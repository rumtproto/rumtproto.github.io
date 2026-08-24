---
title: "inputFileLocation"
original: "https://core.telegram.org/constructor/inputFileLocation"
section: ref
description: "DEPRECATED location of a photo"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputFileLocation","url":"/constructor/inputFileLocation/"}]
layout: layout.njk
---

# inputFileLocation

DEPRECATED location of a photo

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputFileLocation/" class="current_page_link">inputFileLocation</a>#dfdaabe1 volume_id:<a href="/type/long/">long</a> local_id:<a href="/type/int/">int</a> secret:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> = <a href="/type/InputFileLocation/">InputFileLocation</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>volume_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Server volume</td></tr><tr><td><strong>local_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>File identifier</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Check sum to access the file</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/file-references/">File reference</a></td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)

### Related pages

#### [File references](/api/file-references/)

How to handle file references.
