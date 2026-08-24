---
title: "upload.reuploadCdnFile"
original: "https://core.telegram.org/method/upload.reuploadCdnFile"
section: ref
description: "Request a reupload of a certain file to a CDN DC."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.reuploadCdnFile","url":"/method/upload.reuploadCdnFile/"}]
layout: layout.njk
---

# upload.reuploadCdnFile

Request a reupload of a certain file to a [CDN DC](https://core.telegram.org/cdn).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/upload.reuploadCdnFile/" class="current_page_link">upload.reuploadCdnFile</a>#9b2754a8 file_token:<a href="/type/bytes/">bytes</a> request_token:<a href="/type/bytes/">bytes</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FileHash/">FileHash</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>File token</td></tr><tr><td><strong>request_token</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Request token</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[FileHash](/type/FileHash/)\>

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>You can't call this method in a CDN DC.</td></tr><tr><td>500</td><td>CDN_UPLOAD_TIMEOUT</td><td>A server-side timeout occurred while reuploading the file to the CDN DC.</td></tr><tr><td>400</td><td>FILE_TOKEN_INVALID</td><td>The master DC did not accept the <code>file_token</code> (e.g., the token has expired). Continue downloading the file from the master DC using upload.getFile.</td></tr><tr><td>400</td><td>LOCATION_INVALID</td><td>The provided location is invalid.</td></tr><tr><td>400</td><td>REQUEST_TOKEN_INVALID</td><td>The master DC did not accept the <code>request_token</code> from the CDN DC. Continue downloading the file from the master DC using upload.getFile.</td></tr><tr><td>400</td><td>RSA_DECRYPT_FAILED</td><td>Internal RSA decryption failed.</td></tr></tbody></table>

### Related pages

#### [Encrypted CDNs for Speed and Security](https://core.telegram.org/cdn)

How client apps download popular public files from secondary CDN data centers.
