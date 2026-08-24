---
title: "messageEntityDiffDelete"
original: "https://core.telegram.org/constructor/messageEntityDiffDelete"
section: ref
description: "Represents an diff deletion: render it by simply underlining the specified section and coloring it in red, see here » for more info on how to render diff entities."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityDiffDelete","url":"/constructor/messageEntityDiffDelete/"}]
layout: layout.njk
---

# messageEntityDiffDelete

Represents an diff deletion: render it by simply underlining the specified section and coloring it in red, see [here »](/api/entities/#diff-entities) for more info on how to render diff entities.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/messageEntityDiffDelete?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
