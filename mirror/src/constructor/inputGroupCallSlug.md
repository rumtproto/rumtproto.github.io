---
title: "inputGroupCallSlug"
original: "https://core.telegram.org/constructor/inputGroupCallSlug"
section: ref
description: "Identify a conference call » using the slug from its invitation link."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputGroupCallSlug","url":"/constructor/inputGroupCallSlug/"}]
layout: layout.njk
---

# inputGroupCallSlug

Identify a [conference call »](/api/group-calls/#conference-calls) using the slug from its invitation link.

This constructor can only be used for conference calls. It cannot be used for video chats/livestreams, live stories or any other group call type.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputGroupCallSlug/" class="current_page_link">inputGroupCallSlug</a>#fe06823f slug:<a href="/type/string/">string</a> = <a href="/type/InputGroupCall/">InputGroupCall</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Slug from the <a href="/api/links/#conference-links">conference link »</a>.</td></tr></tbody></table>

### Type

[InputGroupCall](/type/InputGroupCall/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
