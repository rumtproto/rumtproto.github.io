---
title: "webPagePending"
original: "https://core.telegram.org/constructor/webPagePending"
section: ref
description: "A preview of the webpage is currently being generated"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webPagePending","url":"/constructor/webPagePending/"}]
layout: layout.njk
---

# webPagePending

A preview of the webpage is currently being generated

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webPagePending/" class="current_page_link">webPagePending</a>#b0d13e47 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> url:flags.0?<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> = <a href="/type/WebPage/">WebPage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of preview</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>URL of the webpage</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the processing started</td></tr></tbody></table>

### Type

[WebPage](/type/WebPage/)
