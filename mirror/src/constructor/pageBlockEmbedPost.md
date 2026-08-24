---
title: "pageBlockEmbedPost"
original: "https://core.telegram.org/constructor/pageBlockEmbedPost"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageBlockEmbedPost","url":"/constructor/pageBlockEmbedPost/"}]
layout: layout.njk
---

# pageBlockEmbedPost

An embedded post

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageBlockEmbedPost/" class="current_page_link">pageBlockEmbedPost</a>#f259a80b url:<a href="/type/string/">string</a> webpage_id:<a href="/type/long/">long</a> author_photo_id:<a href="/type/long/">long</a> author:<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> blocks:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageBlock/">PageBlock</a>&gt; caption:<a href="/type/PageCaption/">PageCaption</a> = <a href="/type/PageBlock/">PageBlock</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Web page URL</td></tr><tr><td><strong>webpage_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of generated webpage preview</td></tr><tr><td><strong>author_photo_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the author's photo</td></tr><tr><td><strong>author</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Author name</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Creation date</td></tr><tr><td><strong>blocks</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageBlock/">PageBlock</a>&gt;</td><td>Post contents</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption/">PageCaption</a></td><td>Caption</td></tr></tbody></table>

### Type

[PageBlock](/type/PageBlock/)
