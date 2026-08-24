---
title: "sendMessageTextDraftAction"
original: "https://core.telegram.org/constructor/sendMessageTextDraftAction"
section: ref
description: "Used by bots to implement live message streaming »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"sendMessageTextDraftAction","url":"/constructor/sendMessageTextDraftAction/"}]
layout: layout.njk
---

# sendMessageTextDraftAction

Used by bots to implement [live message streaming »](/api/bots/ai/#live-response-streaming).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/sendMessageTextDraftAction/" class="current_page_link">sendMessageTextDraftAction</a>#376d975c random_id:<a href="/type/long/">long</a> text:<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/SendMessageAction/">SendMessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Live draft ID: used by graphical clients to slightly change the rendering behavior, see <a href="/api/bots/ai/#live-response-streaming">here »</a> for more info. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities/">TextWithEntities</a></td><td>The contents of the live draft.</td></tr></tbody></table>

### Type

[SendMessageAction](/type/SendMessageAction/)

### Related pages

#### [AI features for bots](/api/bots/ai/)

Telegram bots offer a number of features for AI chatbots.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
