---
title: "upload.getWebfile"
original: "https://core.telegram.org/method/upload.getWebFile"
section: ref
description: "Returns content of a web file, by proxying the request through telegram, see the webfile docs for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.getWebfile","url":"/method/upload.getWebFile/"}]
layout: layout.njk
---

# upload.getWebfile

Returns content of a web file, by proxying the request through telegram, see the [webfile docs for more info](/api/files/#downloading-webfiles).

**Note**: the query must be sent to the DC specified in the `webfile_dc_id` [MTProto configuration field](/api/config/#mtproto-configuration).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/upload.webFile/">upload.webFile</a>#21e753bc size:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> file_type:<a href="/type/storage.FileType/">storage.FileType</a> mtime:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/upload.WebFile/">upload.WebFile</a>;
---functions---
<a href="/method/upload.getWebFile/" class="current_page_link">upload.getWebFile</a>#24e6818d location:<a href="/type/InputWebFileLocation/">InputWebFileLocation</a> offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/upload.WebFile/">upload.WebFile</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/type/InputWebFileLocation/">InputWebFileLocation</a></td><td>The file to download</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of bytes to be skipped</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of bytes to be returned</td></tr></tbody></table>

### Result

[upload.WebFile](/type/upload.WebFile/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>The provided location is invalid.</td></tr></tbody></table>

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
