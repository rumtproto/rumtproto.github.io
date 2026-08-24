---
title: "vector"
original: "https://core.telegram.org/constructor/vector"
section: ref
description: "A universal vector constructor."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"vector","url":"/constructor/vector/"}]
layout: layout.njk
---

# vector

A universal vector constructor.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/vector/" class="current_page_link">vector</a>#1cb5c415 {t:Type} # [ t ] = <a href="/type/Vector%20t/">Vector t</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Type

[Vector t](/type/Vector%20t/)

### Params additional

For serialization write the constructor id `0x1cb5c415`:**int**, then the number of vector elements - #:**int**, then, one after another, the # of the elements of the type **t**, that was implicitly passed to the constructor.
