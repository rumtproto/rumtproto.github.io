---
title: "messageEntityBlockquote"
original: "https://core.telegram.org/constructor/messageEntityBlockquote"
section: ref
description: "Message entity representing a block quote."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityBlockquote","url":"/constructor/messageEntityBlockquote/"}]
layout: layout.njk
---

# messageEntityBlockquote

Message entity representing a block quote.

#### [End-to-end schema](/schema/end-to-end/)

```
===101===
messageEntityBlockquote#020df5d0 offset:int length:int = MessageEntity;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityBlockquote/" class="current_page_link">messageEntityBlockquote</a>#f1ccaaac flags:<a href="/type/%23/">#</a> collapsed:flags.0?true offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>collapsed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the quote is collapsed by default.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
