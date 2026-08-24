---
title: "boost"
original: "https://core.telegram.org/constructor/boost"
section: ref
description: "Info about one or more boosts applied by a specific user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"boost","url":"/constructor/boost/"}]
layout: layout.njk
---

# boost

Info about one or more [boosts](/api/boost/) applied by a specific user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boost/" class="current_page_link">boost</a>#4b3e14d6 flags:<a href="/type/%23/">#</a> gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:<a href="/type/string/">string</a> user_id:flags.0?<a href="/type/long/">long</a> giveaway_msg_id:flags.2?<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> expires:<a href="/type/int/">int</a> used_gift_slug:flags.4?<a href="/type/string/">string</a> multiplier:flags.5?<a href="/type/int/">int</a> stars:flags.6?<a href="/type/long/">long</a> = <a href="/type/Boost/">Boost</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this boost was applied because the channel/supergroup <a href="/api/giveaways/">directly gifted a subscription to the user</a>.</td></tr><tr><td><strong>giveaway</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this boost was applied because the user was chosen in a <a href="/api/giveaways/">giveaway started by the channel/supergroup</a>.</td></tr><tr><td><strong>unclaimed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, the user hasn't yet invoked <a href="/method/payments.applyGiftCode/">payments.applyGiftCode</a> to claim a subscription gifted <a href="/api/giveaways/">directly or in a giveaway by the channel</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Unique ID for this set of boosts.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>ID of the user that applied the boost.</td></tr><tr><td><strong>giveaway_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>The message ID of the <a href="/api/giveaways/">giveaway</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the boost applied</td></tr><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When does the boost expire</td></tr><tr><td><strong>used_gift_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>The created Telegram Premium gift code, only set if either <code>gift</code> or <code>giveaway</code> are set AND it is either a gift code for the currently logged in user or if it was already claimed.</td></tr><tr><td><strong>multiplier</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>If set, this boost counts as <code>multiplier</code> boosts, otherwise it counts as a single boost.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/long/">long</a></td><td>Number of Telegram Stars distributed among the winners of the giveaway.</td></tr></tbody></table>

### Type

[Boost](/type/Boost/)

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [payments.applyGiftCode](/method/payments.applyGiftCode/)

Apply a [Telegram Premium giftcode »](/api/giveaways/)

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
