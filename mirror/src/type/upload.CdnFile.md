---
title: "upload.CdnFile"
original: "https://core.telegram.org/type/upload.CdnFile"
section: ref
description: "Represents the download status of a CDN file"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"upload.CdnFile","url":"/type/upload.CdnFile/"}]
layout: layout.njk
---

# upload.CdnFile

Represents the download status of a CDN file

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/upload.cdnFileReuploadNeeded/">upload.cdnFileReuploadNeeded</a>#eea8e46e request_token:<a href="/type/bytes/">bytes</a> = <a href="/type/upload.CdnFile/" class="current_page_link">upload.CdnFile</a>;
<a href="/constructor/upload.cdnFile/">upload.cdnFile</a>#a99fca4f bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/upload.CdnFile/" class="current_page_link">upload.CdnFile</a>;

---functions---

<a href="/method/upload.getCdnFile/">upload.getCdnFile</a>#395f69da file_token:<a href="/type/bytes/">bytes</a> offset:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/upload.CdnFile/" class="current_page_link">upload.CdnFile</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/upload.cdnFileReuploadNeeded/">upload.cdnFileReuploadNeeded</a></td><td>The file was cleared from the temporary RAM cache of the <a href="/cdn/">CDN</a> and has to be re-uploaded.</td></tr><tr><td><a href="/constructor/upload.cdnFile/">upload.cdnFile</a></td><td>Represent a chunk of a <a href="/cdn/">CDN</a> file.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/upload.getCdnFile/">upload.getCdnFile</a></td><td>Download a <a href="/cdn/">CDN</a> file.</td></tr></tbody></table>
