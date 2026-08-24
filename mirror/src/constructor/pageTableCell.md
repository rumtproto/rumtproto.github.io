---
title: "pageTableCell"
original: "https://core.telegram.org/constructor/pageTableCell"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageTableCell","url":"/constructor/pageTableCell/"}]
layout: layout.njk
---

# pageTableCell

Table cell

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageTableCell/" class="current_page_link">pageTableCell</a>#34566b6a flags:<a href="/type/%23/">#</a> header:flags.0?true align_center:flags.3?true align_right:flags.4?true valign_middle:flags.5?true valign_bottom:flags.6?true text:flags.7?<a href="/type/RichText/">RichText</a> colspan:flags.1?<a href="/type/int/">int</a> rowspan:flags.2?<a href="/type/int/">int</a> = <a href="/type/PageTableCell/">PageTableCell</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>header</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Is this element part of the column header</td></tr><tr><td><strong>align_center</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Horizontally centered block</td></tr><tr><td><strong>align_right</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Right-aligned block</td></tr><tr><td><strong>valign_middle</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Vertically centered block</td></tr><tr><td><strong>valign_bottom</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Block vertically-aligned to the bottom</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/RichText/">RichText</a></td><td>Content</td></tr><tr><td><strong>colspan</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>For how many columns should this cell extend</td></tr><tr><td><strong>rowspan</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>For how many rows should this cell extend</td></tr></tbody></table>

### Type

[PageTableCell](/type/PageTableCell/)
