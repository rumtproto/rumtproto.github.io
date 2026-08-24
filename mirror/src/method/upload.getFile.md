---
title: "upload.getFile"
original: "https://core.telegram.org/method/upload.getFile"
section: ref
description: "Returns content of a whole file or its part."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.getFile","url":"/method/upload.getFile/"}]
layout: layout.njk
---

# upload.getFile

Returns content of a whole file or its part.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/upload.file/">upload.file</a>#96a18d5 type:<a href="/type/storage.FileType/">storage.FileType</a> mtime:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/upload.File/">upload.File</a>;
<a href="/constructor/upload.fileCdnRedirect/">upload.fileCdnRedirect</a>#f18cda44 dc_id:<a href="/type/int/">int</a> file_token:<a href="/type/bytes/">bytes</a> encryption_key:<a href="/type/bytes/">bytes</a> encryption_iv:<a href="/type/bytes/">bytes</a> file_hashes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FileHash/">FileHash</a>&gt; = <a href="/type/upload.File/">upload.File</a>;
---functions---
<a href="/method/upload.getFile/" class="current_page_link">upload.getFile</a>#be5335be flags:<a href="/type/%23/">#</a> precise:flags.0?true cdn_supported:flags.1?true location:<a href="/type/InputFileLocation/">InputFileLocation</a> offset:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/upload.File/">upload.File</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>precise</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Disable some checks on limit and offset values, useful for example to stream videos by keyframes</td></tr><tr><td><strong>cdn_supported</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the current client supports <a href="https://core.telegram.org/cdn">CDN downloads</a></td></tr><tr><td><strong>location</strong></td><td style="text-align: center;"><a href="/type/InputFileLocation/">InputFileLocation</a></td><td>File location</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Number of bytes to be skipped</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of bytes to be returned</td></tr></tbody></table>

### Result

[upload.File](/type/upload.File/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>You can't call this method in a CDN DC.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>406</td><td>FILEREF_UPGRADE_NEEDED</td><td>The client has to be updated in order to support <a href="/api/file-references/">file references</a>.</td></tr><tr><td>400</td><td>FILE_ID_INVALID</td><td>The provided file id is invalid.</td></tr><tr><td>400</td><td>FILE_REFERENCE_EMPTY</td><td>An empty <a href="/api/file-references/">file reference</a> was specified.</td></tr><tr><td>400</td><td>FILE_REFERENCE_EXPIRED</td><td>File reference expired, it must be refetched as described in <a href="/api/file-references/">the documentation</a>.</td></tr><tr><td>400</td><td>FILE_REFERENCE_INVALID</td><td>The specified <a href="/api/file-references/">file reference</a> is invalid.</td></tr><tr><td>420</td><td>FLOOD_PREMIUM_WAIT_%d</td><td>Please wait %d seconds before repeating the action, or purchase a <a href="/api/premium/">Telegram Premium subscription</a> to remove this rate limit.</td></tr><tr><td>400</td><td>LIMIT_INVALID</td><td>The provided limit is invalid.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>The provided location is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>OFFSET_INVALID</td><td>The provided offset is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.

#### [File references](/api/file-references/)

How to handle file references.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
