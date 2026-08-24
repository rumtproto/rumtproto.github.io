---
title: "payments.StarsStatus"
original: "https://core.telegram.org/type/payments.StarsStatus"
section: ref
description: "Info about the current Telegram Star subscriptions, balance and transaction history »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.StarsStatus","url":"/type/payments.StarsStatus/"}]
layout: layout.njk
---

# payments.StarsStatus

Info about the current [Telegram Star subscriptions, balance and transaction history »](/api/stars/#balance-and-transaction-history).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsStatus/">payments.starsStatus</a>#6c9ce8ed flags:<a href="/type/%23/">#</a> balance:<a href="/type/StarsAmount/">StarsAmount</a> subscriptions:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsSubscription/">StarsSubscription</a>&gt; subscriptions_next_offset:flags.2?<a href="/type/string/">string</a> subscriptions_missing_balance:flags.4?<a href="/type/long/">long</a> history:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsTransaction/">StarsTransaction</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.StarsStatus/" class="current_page_link">payments.StarsStatus</a>;

---functions---

<a href="/method/payments.getStarsStatus/">payments.getStarsStatus</a>#4ea9b3bf flags:<a href="/type/%23/">#</a> ton:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/payments.StarsStatus/" class="current_page_link">payments.StarsStatus</a>;
<a href="/method/payments.getStarsTransactions/">payments.getStarsTransactions</a>#69da4557 flags:<a href="/type/%23/">#</a> inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?<a href="/type/string/">string</a> peer:<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.StarsStatus/" class="current_page_link">payments.StarsStatus</a>;
<a href="/method/payments.getStarsTransactionsByID/">payments.getStarsTransactionsByID</a>#2dca16b8 flags:<a href="/type/%23/">#</a> ton:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputStarsTransaction/">InputStarsTransaction</a>&gt; = <a href="/type/payments.StarsStatus/" class="current_page_link">payments.StarsStatus</a>;
<a href="/method/payments.getStarsSubscriptions/">payments.getStarsSubscriptions</a>#32512c5 flags:<a href="/type/%23/">#</a> missing_balance:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> = <a href="/type/payments.StarsStatus/" class="current_page_link">payments.StarsStatus</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsStatus/">payments.starsStatus</a></td><td>Info about the current <a href="/api/stars/#balance-and-transaction-history">Telegram Star subscriptions, balance and transaction history »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsStatus/">payments.getStarsStatus</a></td><td>Get the current <a href="/api/stars/">Telegram Stars balance</a> of the current account (with peer=<a href="/constructor/inputPeerSelf/">inputPeerSelf</a>), or the stars balance of the bot or channel specified in <code>peer</code>.</td></tr><tr><td><a href="/method/payments.getStarsTransactions/">payments.getStarsTransactions</a></td><td>Fetch <a href="/api/stars/#balance-and-transaction-history">Telegram Stars transactions</a>.<br><br>The <code>inbound</code> and <code>outbound</code> flags are mutually exclusive: if none of the two are set, both incoming and outgoing transactions are fetched.</td></tr><tr><td><a href="/method/payments.getStarsTransactionsByID/">payments.getStarsTransactionsByID</a></td><td>Obtain info about <a href="/api/stars/#balance-and-transaction-history">Telegram Star transactions »</a> using specific transaction IDs.</td></tr><tr><td><a href="/method/payments.getStarsSubscriptions/">payments.getStarsSubscriptions</a></td><td>Obtain a list of active, expired or cancelled <a href="/api/invites/#paid-invite-links">Telegram Star subscriptions »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
