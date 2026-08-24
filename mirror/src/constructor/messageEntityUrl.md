---
title: "messageEntityUrl"
original: "https://core.telegram.org/constructor/messageEntityUrl"
section: ref
description: "Message entity representing an in-text url: https://google.com; for text urls, use messageEntityTextUrl."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityUrl","url":"/constructor/messageEntityUrl/"}]
layout: layout.njk
---

# messageEntityUrl

Message entity representing an in-text url: [https://google.com](https://google.com); for [text urls](https://google.com), use [messageEntityTextUrl](/constructor/messageEntityTextUrl/).

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
messageEntityUrl#6ed02538 offset:int length:int = MessageEntity;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityUrl/" class="current_page_link">messageEntityUrl</a>#6ed02538 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [messageEntityTextUrl](/constructor/messageEntityTextUrl/)

Message entity representing a [text url](https://google.com): for in-text urls like [https://google.com](https://google.com) use [messageEntityUrl](/constructor/messageEntityUrl/).

Note that an additional confirmation popup with the full URL must be displayed to the user before opening this link, unless the domain satisfies the conditions specified in the [domain whitelist documentation »](/api/config/#whitelisted-domains).
