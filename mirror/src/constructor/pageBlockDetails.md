---
title: "pageBlockDetails"
original: "https://core.telegram.org/constructor/pageBlockDetails"
section: ref
description: "A collapsible details block"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageBlockDetails","url":"/constructor/pageBlockDetails/"}]
layout: layout.njk
---

# pageBlockDetails

A collapsible details block

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageBlockDetails/" class="current_page_link">pageBlockDetails</a>#76768bed flags:<a href="/type/%23/">#</a> open:flags.0?true blocks:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageBlock/">PageBlock</a>&gt; title:<a href="/type/RichText/">RichText</a> = <a href="/type/PageBlock/">PageBlock</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>open</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the block is open by default</td></tr><tr><td><strong>blocks</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageBlock/">PageBlock</a>&gt;</td><td>Block contents</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/RichText/">RichText</a></td><td>Always visible heading for the block</td></tr></tbody></table>

### Type

[PageBlock](/type/PageBlock/)
