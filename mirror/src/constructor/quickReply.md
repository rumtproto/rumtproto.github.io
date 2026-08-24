---
title: "quickReply"
original: "https://core.telegram.org/constructor/quickReply"
section: ref
description: "Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"quickReply","url":"/constructor/quickReply/"}]
layout: layout.njk
---

# quickReply

A [quick reply shortcut](/api/business/#quick-reply-shortcuts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/quickReply/" class="current_page_link">quickReply</a>#697102b shortcut_id:<a href="/type/int/">int</a> shortcut:<a href="/type/string/">string</a> top_message:<a href="/type/int/">int</a> count:<a href="/type/int/">int</a> = <a href="/type/QuickReply/">QuickReply</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Unique shortcut ID.</td></tr><tr><td><strong>shortcut</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Shortcut name.</td></tr><tr><td><strong>top_message</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the last message in the shortcut.</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of messages in the shortcut.</td></tr></tbody></table>

### Type

[QuickReply](/type/QuickReply/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
