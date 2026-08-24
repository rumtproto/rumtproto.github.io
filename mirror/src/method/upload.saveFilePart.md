---
title: "upload.saveFilePart"
original: "https://core.telegram.org/method/upload.saveFilePart"
section: ref
description: "Saves a part of file for further sending to one of the methods."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"upload.saveFilePart","url":"/method/upload.saveFilePart/"}]
layout: layout.njk
---

# upload.saveFilePart

Saves a part of file for further sending to one of the methods.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/upload.saveFilePart/" class="current_page_link">upload.saveFilePart</a>#b304a621 file_id:<a href="/type/long/">long</a> file_part:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>file_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random file identifier created by the client</td></tr><tr><td><strong>file_part</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Numerical order of a part</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Binary data, content of a part</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILE_PART_EMPTY</td><td>The provided file part is empty.</td></tr><tr><td>400</td><td>FILE_PART_INVALID</td><td>The file part number is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>
