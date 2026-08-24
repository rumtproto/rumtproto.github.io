---
title: "upload.getFileHashes"
original: "https://core.telegram.org/method/upload.getFileHashes"
section: ref
description: "Get SHA256 hashes for verifying downloaded files"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.getFileHashes","url":"/method/upload.getFileHashes/"}]
layout: layout.njk
---

# upload.getFileHashes

Get SHA256 hashes for verifying downloaded files

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/upload.getFileHashes/" class="current_page_link">upload.getFileHashes</a>#9156982a location:<a href="/type/InputFileLocation/">InputFileLocation</a> offset:<a href="/type/long/">long</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FileHash/">FileHash</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/type/InputFileLocation/">InputFileLocation</a></td><td>File</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Offset from which to get file hashes</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[FileHash](/type/FileHash/)\>

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>LOCATION_INVALID</td><td>The provided location is invalid.</td></tr></tbody></table>
