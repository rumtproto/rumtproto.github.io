---
title: "pageBlockTable"
original: "https://core.telegram.org/constructor/pageBlockTable"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageBlockTable","url":"/constructor/pageBlockTable/"}]
layout: layout.njk
---

# pageBlockTable

Table

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageBlockTable/" class="current_page_link">pageBlockTable</a>#bf4dea82 flags:<a href="/type/%23/">#</a> bordered:flags.0?true striped:flags.1?true title:<a href="/type/RichText/">RichText</a> rows:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageTableRow/">PageTableRow</a>&gt; = <a href="/type/PageBlock/">PageBlock</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bordered</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Does the table have a visible border?</td></tr><tr><td><strong>striped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Is the table striped?</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/RichText/">RichText</a></td><td>Title</td></tr><tr><td><strong>rows</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageTableRow/">PageTableRow</a>&gt;</td><td>Table rows</td></tr></tbody></table>

### Type

[PageBlock](/type/PageBlock/)
