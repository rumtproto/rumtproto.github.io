---
title: "PageListOrderedItem"
original: "https://core.telegram.org/type/PageListOrderedItem"
section: ref
description: "Represents an instant view ordered list"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PageListOrderedItem","url":"/type/PageListOrderedItem/"}]
layout: layout.njk
---

# PageListOrderedItem

Represents an [instant view ordered list](https://instantview.telegram.org)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageListOrderedItemText/">pageListOrderedItemText</a>#5e068047 num:<a href="/type/string/">string</a> text:<a href="/type/RichText/">RichText</a> = <a href="/type/PageListOrderedItem/" class="current_page_link">PageListOrderedItem</a>;
<a href="/constructor/pageListOrderedItemBlocks/">pageListOrderedItemBlocks</a>#98dd8936 num:<a href="/type/string/">string</a> blocks:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PageBlock/">PageBlock</a>&gt; = <a href="/type/PageListOrderedItem/" class="current_page_link">PageListOrderedItem</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/pageListOrderedItemText/">pageListOrderedItemText</a></td><td>Ordered list of text items</td></tr><tr><td><a href="/constructor/pageListOrderedItemBlocks/">pageListOrderedItemBlocks</a></td><td>Ordered list of <a href="https://instantview.telegram.org">IV</a> blocks</td></tr></tbody></table>
