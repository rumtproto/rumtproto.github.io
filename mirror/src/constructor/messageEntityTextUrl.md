---
title: "messageEntityTextUrl"
original: "https://core.telegram.org/constructor/messageEntityTextUrl"
section: ref
description: "Message entity representing a text url: for in-text urls like https://google.com use messageEntityUrl."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageEntityTextUrl","url":"/constructor/messageEntityTextUrl/"}]
layout: layout.njk
---

# messageEntityTextUrl

Message entity representing a [text url](https://google.com): for in-text urls like [https://google.com](https://google.com) use [messageEntityUrl](/constructor/messageEntityUrl/).

Note that an additional confirmation popup with the full URL must be displayed to the user before opening this link, unless the domain satisfies the conditions specified in the [domain whitelist documentation »](/api/config/#whitelisted-domains).

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
messageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageEntityTextUrl/" class="current_page_link">messageEntityTextUrl</a>#76a6d327 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> url:<a href="/type/string/">string</a> = <a href="/type/MessageEntity/">MessageEntity</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offset of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length of message entity within message (in <a href="/api/entities/#entity-length">UTF-16 code units</a>)</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The actual URL</td></tr></tbody></table>

### Type

[MessageEntity](/type/MessageEntity/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [messageEntityUrl](/constructor/messageEntityUrl/)

Message entity representing an in-text url: [https://google.com](https://google.com); for [text urls](https://google.com), use [messageEntityTextUrl](/constructor/messageEntityTextUrl/).

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
