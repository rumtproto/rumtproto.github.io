---
title: "payments.getStarsTransactionsByID"
original: "https://core.telegram.org/method/payments.getStarsTransactionsByID"
section: ref
description: "Obtain info about Telegram Star transactions » using specific transaction IDs."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsTransactionsByID","url":"/method/payments.getStarsTransactionsByID/"}]
layout: layout.njk
---

# payments.getStarsTransactionsByID

Obtain info about [Telegram Star transactions »](/api/stars/#balance-and-transaction-history) using specific transaction IDs.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsStatus/">payments.starsStatus</a>#6c9ce8ed flags:<a href="/type/%23/">#</a> balance:<a href="/type/StarsAmount/">StarsAmount</a> subscriptions:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsSubscription/">StarsSubscription</a>&gt; subscriptions_next_offset:flags.2?<a href="/type/string/">string</a> subscriptions_missing_balance:flags.4?<a href="/type/long/">long</a> history:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsTransaction/">StarsTransaction</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.StarsStatus/">payments.StarsStatus</a>;
---functions---
<a href="/method/payments.getStarsTransactionsByID/" class="current_page_link">payments.getStarsTransactionsByID</a>#2dca16b8 flags:<a href="/type/%23/">#</a> ton:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputStarsTransaction/">InputStarsTransaction</a>&gt; = <a href="/type/payments.StarsStatus/">payments.StarsStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, returns channel/bot ad revenue transactions in nanograms.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Channel or bot.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputStarsTransaction/">InputStarsTransaction</a>&gt;</td><td>Transaction IDs.</td></tr></tbody></table>

### Result

[payments.StarsStatus](/type/payments.StarsStatus/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TRANSACTION_ID_INVALID</td><td>The specified transaction ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
