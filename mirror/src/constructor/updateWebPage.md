---
title: "updateWebPage"
original: "https://core.telegram.org/constructor/updateWebPage"
section: ref
description: "An instant view webpage preview was generated"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateWebPage","url":"/constructor/updateWebPage/"}]
layout: layout.njk
---

# updateWebPage

An [instant view](https://instantview.telegram.org) webpage preview was generated

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateWebPage/" class="current_page_link">updateWebPage</a>#7f891213 webpage:<a href="/type/WebPage/">WebPage</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>webpage</strong></td><td style="text-align: center;"><a href="/type/WebPage/">WebPage</a></td><td>Webpage preview</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
