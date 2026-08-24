---
title: "payments.getStarsSubscriptions"
original: "https://core.telegram.org/method/payments.getStarsSubscriptions"
section: ref
description: "Obtain a list of active, expired or cancelled Telegram Star subscriptions »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsSubscriptions","url":"/method/payments.getStarsSubscriptions/"}]
layout: layout.njk
---

# payments.getStarsSubscriptions

Obtain a list of active, expired or cancelled [Telegram Star subscriptions »](/api/invites/#paid-invite-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsStatus/">payments.starsStatus</a>#6c9ce8ed flags:<a href="/type/%23/">#</a> balance:<a href="/type/StarsAmount/">StarsAmount</a> subscriptions:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsSubscription/">StarsSubscription</a>&gt; subscriptions_next_offset:flags.2?<a href="/type/string/">string</a> subscriptions_missing_balance:flags.4?<a href="/type/long/">long</a> history:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsTransaction/">StarsTransaction</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.StarsStatus/">payments.StarsStatus</a>;
---functions---
<a href="/method/payments.getStarsSubscriptions/" class="current_page_link">payments.getStarsSubscriptions</a>#32512c5 flags:<a href="/type/%23/">#</a> missing_balance:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> = <a href="/type/payments.StarsStatus/">payments.StarsStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>missing_balance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to return only subscriptions expired due to an excessively low Telegram Star balance.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Always pass <a href="/constructor/inputPeerSelf/">inputPeerSelf</a>.</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for pagination, taken from <a href="/constructor/payments.starsStatus/">payments.starsStatus</a>.<code>subscriptions_next_offset</code>.</td></tr></tbody></table>

### Result

[payments.StarsStatus](/type/payments.StarsStatus/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [payments.starsStatus](/constructor/payments.starsStatus/)

Info about the current [Telegram Star subscriptions, balance and transaction history »](/api/stars/#balance-and-transaction-history).

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
