---
title: "messageEntityItalic"
original: "https://core.telegram.org/constructor/messageEntityItalic"
section: ref
description: "Message entity representing _italic text_."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityItalic","url":"/constructor/messageEntityItalic/"}]
layout: layout.njk
---

# messageEntityItalic

Message entity representing _italic text_.

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
messageEntityItalic#826f8b60 offset:int length:int = MessageEntity;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityItalic/" class="current_page_link">messageEntityItalic</a>#826f8b60 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
