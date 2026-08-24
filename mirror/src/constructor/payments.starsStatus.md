---
title: "payments.starsStatus"
original: "https://core.telegram.org/constructor/payments.starsStatus"
section: ref
description: "Info about the current Telegram Star subscriptions, balance and transaction history »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.starsStatus","url":"/constructor/payments.starsStatus/"}]
layout: layout.njk
---

# payments.starsStatus

Info about the current [Telegram Star subscriptions, balance and transaction history »](/api/stars/#balance-and-transaction-history).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsStatus/" class="current_page_link">payments.starsStatus</a>#6c9ce8ed flags:<a href="/type/%23/">#</a> balance:<a href="/type/StarsAmount/">StarsAmount</a> subscriptions:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsSubscription/">StarsSubscription</a>&gt; subscriptions_next_offset:flags.2?<a href="/type/string/">string</a> subscriptions_missing_balance:flags.4?<a href="/type/long/">long</a> history:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsTransaction/">StarsTransaction</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.StarsStatus/">payments.StarsStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>balance</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Current Telegram Star balance.</td></tr><tr><td><strong>subscriptions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsSubscription/">StarsSubscription</a>&gt;</td><td>Info about current Telegram Star subscriptions, only returned when invoking <a href="/method/payments.getStarsTransactions/">payments.getStarsTransactions</a> and <a href="/method/payments.getStarsSubscriptions/">payments.getStarsSubscriptions</a>.</td></tr><tr><td><strong>subscriptions_next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Offset for pagination of subscriptions: only usable and returned when invoking <a href="/method/payments.getStarsSubscriptions/">payments.getStarsSubscriptions</a>.</td></tr><tr><td><strong>subscriptions_missing_balance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/long/">long</a></td><td>The number of Telegram Stars the user should buy to be able to extend expired subscriptions soon (i.e. the current balance is not enough to extend all expired subscriptions).</td></tr><tr><td><strong>history</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsTransaction/">StarsTransaction</a>&gt;</td><td>List of Telegram Star transactions (partial if <code>next_offset</code> is set).</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Offset to use to fetch more transactions from the transaction history using <a href="/method/payments.getStarsTransactions/">payments.getStarsTransactions</a>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in <code>history</code>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in <code>history</code>.</td></tr></tbody></table>

### Type

[payments.StarsStatus](/type/payments.StarsStatus/)

### Related pages

#### [payments.getStarsTransactions](/method/payments.getStarsTransactions/)

Fetch [Telegram Stars transactions](/api/stars/#balance-and-transaction-history).

The `inbound` and `outbound` flags are mutually exclusive: if none of the two are set, both incoming and outgoing transactions are fetched.

#### [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/)

Obtain a list of active, expired or cancelled [Telegram Star subscriptions »](/api/invites/#paid-invite-links).

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
