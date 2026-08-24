---
title: "WebDocument"
original: "https://core.telegram.org/type/WebDocument"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebDocument","url":"/type/WebDocument/"}]
layout: layout.njk
---

# WebDocument

Remote document

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webDocument/">webDocument</a>#1c570ed1 url:<a href="/type/string/">string</a> access_hash:<a href="/type/long/">long</a> size:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/WebDocument/" class="current_page_link">WebDocument</a>;
<a href="/constructor/webDocumentNoProxy/">webDocumentNoProxy</a>#f9c8bcc6 url:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/WebDocument/" class="current_page_link">WebDocument</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webDocument/">webDocument</a></td><td>Remote document</td></tr><tr><td><a href="/constructor/webDocumentNoProxy/">webDocumentNoProxy</a></td><td>Remote document that can be downloaded without <a href="/api/files/">proxying through telegram</a></td></tr></tbody></table>
