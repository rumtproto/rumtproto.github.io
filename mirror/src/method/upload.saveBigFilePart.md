---
title: "upload.saveBigFilePart"
original: "https://core.telegram.org/method/upload.saveBigFilePart"
section: ref
description: "Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.saveBigFilePart","url":"/method/upload.saveBigFilePart/"}]
layout: layout.njk
---

# upload.saveBigFilePart

Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/upload.saveBigFilePart/" class="current_page_link">upload.saveBigFilePart</a>#de7b673d file_id:<a href="/type/long/">long</a> file_part:<a href="/type/int/">int</a> file_total_parts:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>file_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random file id, created by the client</td></tr><tr><td><strong>file_part</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Part sequence number</td></tr><tr><td><strong>file_total_parts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of parts</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Binary data, part contents</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>The number of file parts is invalid.</td></tr><tr><td>400</td><td>FILE_PART_EMPTY</td><td>The provided file part is empty.</td></tr><tr><td>400</td><td>FILE_PART_INVALID</td><td>The file part number is invalid.</td></tr><tr><td>400</td><td>FILE_PART_SIZE_CHANGED</td><td>Provided file part size has changed.</td></tr><tr><td>400</td><td>FILE_PART_SIZE_INVALID</td><td>The provided file part size is invalid.</td></tr><tr><td>400</td><td>FILE_PART_TOO_BIG</td><td>The uploaded file part is too big.</td></tr><tr><td>400</td><td>FILE_PART_TOO_SMALL</td><td>The size of the uploaded file part is too small, please see the documentation for the allowed sizes.</td></tr></tbody></table>
