---
title: "inputInvoiceBusinessBotTransferStars"
original: "https://core.telegram.org/constructor/inputInvoiceBusinessBotTransferStars"
section: ref
description: "Transfer stars from the balance of a user account connected to a business bot, to the balance of the business bot, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputInvoiceBusinessBotTransferStars","url":"/constructor/inputInvoiceBusinessBotTransferStars/"}]
layout: layout.njk
---

# inputInvoiceBusinessBotTransferStars

Transfer stars from the balance of a user account [connected to a business bot](/api/bots/connected-business-bots/), to the balance of the [business bot](/api/bots/connected-business-bots/), see [here »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputInvoiceBusinessBotTransferStars/" class="current_page_link">inputInvoiceBusinessBotTransferStars</a>#f4997e42 bot:<a href="/type/InputUser/">InputUser</a> stars:<a href="/type/long/">long</a> = <a href="/type/InputInvoice/">InputInvoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Always <a href="/constructor/inputUserSelf/">inputUserSelf</a>.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The number of stars to transfer.</td></tr></tbody></table>

### Type

[InputInvoice](/type/InputInvoice/)

### Related pages

#### [inputUserSelf](/constructor/inputUserSelf/)

Defines the current user.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
