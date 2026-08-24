---
title: "inputFile"
original: "https://core.telegram.org/constructor/inputFile"
section: ref
description: "Defines a file saved in parts using the method upload.saveFilePart."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputFile","url":"/constructor/inputFile/"}]
layout: layout.njk
---

# inputFile

Defines a file saved in parts using the method [upload.saveFilePart](/method/upload.saveFilePart/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputFile/" class="current_page_link">inputFile</a>#f52ff27f id:<a href="/type/long/">long</a> parts:<a href="/type/int/">int</a> name:<a href="/type/string/">string</a> md5_checksum:<a href="/type/string/">string</a> = <a href="/type/InputFile/">InputFile</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random file identifier created by the client</td></tr><tr><td><strong>parts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of parts saved</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Full name of the file</td></tr><tr><td><strong>md5_checksum</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>In case the file's <a href="https://en.wikipedia.org/wiki/MD5#MD5_hashes">md5-hash</a> was passed, contents of the file will be checked prior to use</td></tr></tbody></table>

### Type

[InputFile](/type/InputFile/)

### Related pages

#### [upload.saveFilePart](/method/upload.saveFilePart/)

Saves a part of file for further sending to one of the methods.
