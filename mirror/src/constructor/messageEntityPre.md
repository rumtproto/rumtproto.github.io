---
title: "messageEntityPre"
original: "https://core.telegram.org/constructor/messageEntityPre"
section: ref
description: "Message entity representing a preformatted codeblock, allowing the user to specify a programming language for the codeblock."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityPre","url":"/constructor/messageEntityPre/"}]
layout: layout.njk
---

# messageEntityPre

Message entity representing a preformatted `codeblock`, allowing the user to specify a programming language for the codeblock.

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityPre/" class="current_page_link">messageEntityPre</a>#73924be0 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> language:<a href="/type/string/">string</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>language</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Programming language of the code</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
