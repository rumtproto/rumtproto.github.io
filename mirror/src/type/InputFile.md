---
title: "InputFile"
original: "https://core.telegram.org/type/InputFile"
section: ref
description: "Defines a file uploaded by the client."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputFile","url":"/type/InputFile/"}]
layout: layout.njk
---

# InputFile

Defines a file uploaded by the client.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputFile/">inputFile</a>#f52ff27f id:<a href="/type/long/">long</a> parts:<a href="/type/int/">int</a> name:<a href="/type/string/">string</a> md5_checksum:<a href="/type/string/">string</a> = <a href="/type/InputFile/" class="current_page_link">InputFile</a>;
<a href="/constructor/inputFileBig/">inputFileBig</a>#fa4f0bb5 id:<a href="/type/long/">long</a> parts:<a href="/type/int/">int</a> name:<a href="/type/string/">string</a> = <a href="/type/InputFile/" class="current_page_link">InputFile</a>;
<a href="/constructor/inputFileStoryDocument/">inputFileStoryDocument</a>#62dc8b48 id:<a href="/type/InputDocument/">InputDocument</a> = <a href="/type/InputFile/" class="current_page_link">InputFile</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputFile/">inputFile</a></td><td>Defines a file saved in parts using the method <a href="/method/upload.saveFilePart/">upload.saveFilePart</a>.</td></tr><tr><td><a href="/constructor/inputFileBig/">inputFileBig</a></td><td>Assigns a big file (over 10 MB in size), saved in part using the method <a href="/method/upload.saveBigFilePart/">upload.saveBigFilePart</a>.</td></tr><tr><td><a href="/constructor/inputFileStoryDocument/">inputFileStoryDocument</a></td><td>Used to <a href="/api/stories/#editing-stories">edit the thumbnail/static preview of a story, see here »</a> for more info on the full flow.</td></tr></tbody></table>
