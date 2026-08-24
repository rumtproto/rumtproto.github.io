---
title: "pageRelatedArticle"
original: "https://core.telegram.org/constructor/pageRelatedArticle"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageRelatedArticle","url":"/constructor/pageRelatedArticle/"}]
layout: layout.njk
---

# pageRelatedArticle

Related article

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageRelatedArticle/" class="current_page_link">pageRelatedArticle</a>#b390dc08 flags:<a href="/type/%23/">#</a> url:<a href="/type/string/">string</a> webpage_id:<a href="/type/long/">long</a> title:flags.0?<a href="/type/string/">string</a> description:flags.1?<a href="/type/string/">string</a> photo_id:flags.2?<a href="/type/long/">long</a> author:flags.3?<a href="/type/string/">string</a> published_date:flags.4?<a href="/type/int/">int</a> = <a href="/type/PageRelatedArticle/">PageRelatedArticle</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>URL of article</td></tr><tr><td><strong>webpage_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Webpage ID of generated IV preview</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Description</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>ID of preview photo</td></tr><tr><td><strong>author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Author name</td></tr><tr><td><strong>published_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Date of publication</td></tr></tbody></table>

### Type

[PageRelatedArticle](/type/PageRelatedArticle/)
