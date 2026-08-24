---
title: "Document"
original: "https://core.telegram.org/type/Document"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Document","url":"/type/Document/"}]
layout: layout.njk
---

# Document

A document.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentEmpty/">documentEmpty</a>#36f8c871 id:<a href="/type/long/">long</a> = <a href="/type/Document/" class="current_page_link">Document</a>;
<a href="/constructor/document/">document</a>#8fd4c4d8 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/long/">long</a> thumbs:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; video_thumbs:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt; dc_id:<a href="/type/int/">int</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/Document/" class="current_page_link">Document</a>;

---functions---

<a href="/method/messages.getDocumentByHash/">messages.getDocumentByHash</a>#b1f2061f sha256:<a href="/type/bytes/">bytes</a> size:<a href="/type/long/">long</a> mime_type:<a href="/type/string/">string</a> = <a href="/type/Document/" class="current_page_link">Document</a>;

<a href="/method/account.uploadTheme/">account.uploadTheme</a>#1c3db333 flags:<a href="/type/%23/">#</a> file:<a href="/type/InputFile/">InputFile</a> thumb:flags.0?<a href="/type/InputFile/">InputFile</a> file_name:<a href="/type/string/">string</a> mime_type:<a href="/type/string/">string</a> = <a href="/type/Document/" class="current_page_link">Document</a>;
<a href="/method/account.uploadRingtone/">account.uploadRingtone</a>#831a83a2 file:<a href="/type/InputFile/">InputFile</a> file_name:<a href="/type/string/">string</a> mime_type:<a href="/type/string/">string</a> = <a href="/type/Document/" class="current_page_link">Document</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/documentEmpty/">documentEmpty</a></td><td>Empty constructor, document doesn't exist.</td></tr><tr><td><a href="/constructor/document/">document</a></td><td>Document</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.uploadTheme/">account.uploadTheme</a></td><td>Upload theme</td></tr><tr><td><a href="/method/account.uploadRingtone/">account.uploadRingtone</a></td><td>Upload notification sound, use <a href="/method/account.saveRingtone/">account.saveRingtone</a> to convert it and add it to the list of saved notification sounds.</td></tr><tr><td><a href="/method/messages.getDocumentByHash/">messages.getDocumentByHash</a></td><td>Get a document by its SHA256 hash, mainly used for gifs</td></tr></tbody></table>
