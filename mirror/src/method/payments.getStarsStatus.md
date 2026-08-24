---
title: "payments.getStarsStatus"
original: "https://core.telegram.org/method/payments.getStarsStatus"
section: ref
description: "Get the current Telegram Stars balance of the current account (with peer=inputPeerSelf), or the stars balance of the bot or channel specified in peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getStarsStatus","url":"/method/payments.getStarsStatus/"}]
layout: layout.njk
---

# payments.getStarsStatus

Get the current [Telegram Stars balance](/api/stars/) of the current account (with peer=[inputPeerSelf](/constructor/inputPeerSelf/)), or the stars balance of the bot or channel specified in `peer`.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.starsStatus/">payments.starsStatus</a>#6c9ce8ed flags:<a href="/type/%23/">#</a> balance:<a href="/type/StarsAmount/">StarsAmount</a> subscriptions:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsSubscription/">StarsSubscription</a>&gt; subscriptions_next_offset:flags.2?<a href="/type/string/">string</a> subscriptions_missing_balance:flags.4?<a href="/type/long/">long</a> history:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsTransaction/">StarsTransaction</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.StarsStatus/">payments.StarsStatus</a>;
---functions---
<a href="/method/payments.getStarsStatus/" class="current_page_link">payments.getStarsStatus</a>#4ea9b3bf flags:<a href="/type/%23/">#</a> ton:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/payments.StarsStatus/">payments.StarsStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, returns the channel/ad revenue balance in nanograms.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer of which to get the balance.</td></tr></tbody></table>

### Result

[payments.StarsStatus](/type/payments.StarsStatus/)

### Only users can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>The specified method <em>can</em> be used over a <a href="/api/bots/connected-business-bots/">business connection</a> for some operations, but the specified query attempted an operation that is not allowed over a business connection.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
