---
title: "messageActionPaidMessagesRefunded"
original: "https://core.telegram.org/constructor/messageActionPaidMessagesRefunded"
section: ref
description: "Sent from peer A to B, indicates that A refunded all stars B previously paid to send messages to A, see here » for more info on paid messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionPaidMessagesRefunded","url":"/constructor/messageActionPaidMessagesRefunded/"}]
layout: layout.njk
---

# messageActionPaidMessagesRefunded

Sent from peer A to B, indicates that A refunded all [stars](/api/stars/) B previously paid to send messages to A, see [here »](/api/paid-messages/) for more info on paid messages.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionPaidMessagesRefunded/" class="current_page_link">messageActionPaidMessagesRefunded</a>#ac1f1fcd count:<a href="/type/int/">int</a> stars:<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of paid messages affected by the refund.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Number of refunded stars.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
