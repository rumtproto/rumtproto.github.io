---
title: "pageBlockPhoto"
original: "https://core.telegram.org/constructor/pageBlockPhoto"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageBlockPhoto","url":"/constructor/pageBlockPhoto/"}]
layout: layout.njk
---

# pageBlockPhoto

A photo

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageBlockPhoto/" class="current_page_link">pageBlockPhoto</a>#1759c560 flags:<a href="/type/%23/">#</a> photo_id:<a href="/type/long/">long</a> caption:<a href="/type/PageCaption/">PageCaption</a> url:flags.0?<a href="/type/string/">string</a> webpage_id:flags.0?<a href="/type/long/">long</a> = <a href="/type/PageBlock/">PageBlock</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Photo ID</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption/">PageCaption</a></td><td>Caption</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>HTTP URL of page the photo leads to when clicked</td></tr><tr><td><strong>webpage_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>ID of preview of the page the photo leads to when clicked</td></tr></tbody></table>

### Type

[PageBlock](/type/PageBlock/)
