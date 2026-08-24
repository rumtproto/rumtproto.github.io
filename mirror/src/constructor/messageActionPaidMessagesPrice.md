---
title: "messageActionPaidMessagesPrice"
original: "https://core.telegram.org/constructor/messageActionPaidMessagesPrice"
section: ref
description: "The price of paid messages » in this chat was changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionPaidMessagesPrice","url":"/constructor/messageActionPaidMessagesPrice/"}]
layout: layout.njk
---

# messageActionPaidMessagesPrice

The price of [paid messages »](/api/paid-messages/) in this chat was changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionPaidMessagesPrice/" class="current_page_link">messageActionPaidMessagesPrice</a>#84b88578 flags:<a href="/type/%23/">#</a> broadcast_messages_allowed:flags.0?true stars:<a href="/type/long/">long</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>broadcast_messages_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Can only be set for channels, if set indicates that <a href="/api/monoforum/">direct messages were enabled »</a>, otherwise indicates that direct messages were disabled; the price of paid messages is related to the price of direct messages (aka those sent to the associated <a href="/api/monoforum/">monoforum</a>).</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The new price in <a href="/api/stars/">Telegram Stars</a>, can be <code>0</code> if messages are now free.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
