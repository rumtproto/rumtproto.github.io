---
title: "messageEntityDiffReplace"
original: "https://core.telegram.org/constructor/messageEntityDiffReplace"
section: ref
description: "Represents an diff replacement, render it as follows:"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityDiffReplace","url":"/constructor/messageEntityDiffReplace/"}]
layout: layout.njk
---

# messageEntityDiffReplace

Represents an diff replacement, render it as follows:

-   Insert `old_text` into the text at offset `offset`, underline it and color it in red: note that this insertion does not affect the offsets of entities that come after it.
-   underline the section delimited by `offset` and `limit` and color it in green.

See [here »](/api/entities/#diff-entities) for more info on how to render diff entities.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/messageEntityDiffReplace?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>old_text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The chunk of text that was removed.</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
