---
title: "account.paidMessagesRevenue"
original: "https://core.telegram.org/constructor/account.paidMessagesRevenue"
section: ref
description: "Total number of non-refunded Telegram Stars a user has spent on sending us messages either directly or through a channel, see here » for more info on paid messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.paidMessagesRevenue","url":"/constructor/account.paidMessagesRevenue/"}]
layout: layout.njk
---

# account.paidMessagesRevenue

Total number of non-refunded [Telegram Stars](/api/stars/) a user has spent on sending us messages either directly or through a channel, see [here »](/api/paid-messages/) for more info on paid messages.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.paidMessagesRevenue/" class="current_page_link">account.paidMessagesRevenue</a>#1e109708 stars_amount:<a href="/type/long/">long</a> = <a href="/type/account.PaidMessagesRevenue/">account.PaidMessagesRevenue</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stars_amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount in <a href="/api/stars/">Stars</a>.</td></tr></tbody></table>

### Type

[account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
