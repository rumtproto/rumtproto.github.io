---
title: "account.getPaidMessagesRevenue"
original: "https://core.telegram.org/method/account.getPaidMessagesRevenue"
section: ref
description: "Get the number of stars we have received from the specified user thanks to paid messages »; the received amount will be equal to the sent amount multiplied by…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getPaidMessagesRevenue","url":"/method/account.getPaidMessagesRevenue/"}]
layout: layout.njk
---

# account.getPaidMessagesRevenue

Get the number of stars we have received from the specified user thanks to [paid messages »](/api/paid-messages/); the received amount will be equal to the sent amount multiplied by [stars\_paid\_message\_commission\_permille](/api/config/#stars-paid-message-commission-permille) divided by 1000.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.paidMessagesRevenue/">account.paidMessagesRevenue</a>#1e109708 stars_amount:<a href="/type/long/">long</a> = <a href="/type/account.PaidMessagesRevenue/">account.PaidMessagesRevenue</a>;
---functions---
<a href="/method/account.getPaidMessagesRevenue/" class="current_page_link">account.getPaidMessagesRevenue</a>#19ba4a67 flags:<a href="/type/%23/">#</a> parent_peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> user_id:<a href="/type/InputUser/">InputUser</a> = <a href="/type/account.PaidMessagesRevenue/">account.PaidMessagesRevenue</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, can contain the ID of a <a href="/api/monoforum/">monoforum (channel direct messages)</a> to obtain the number of stars the user has spent to send us direct messages via the channel.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user that paid to send us messages.</td></tr></tbody></table>

### Result

[account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PARENT_PEER_INVALID</td><td>The specified <code>parent_peer</code> is invalid.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
