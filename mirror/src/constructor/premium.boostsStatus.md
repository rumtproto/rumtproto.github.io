---
title: "premium.boostsStatus"
original: "https://core.telegram.org/constructor/premium.boostsStatus"
section: ref
description: "Contains info about the current boost status of a peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"premium.boostsStatus","url":"/constructor/premium.boostsStatus/"}]
layout: layout.njk
---

# premium.boostsStatus

Contains info about the current [boost status](/api/boost/) of a peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premium.boostsStatus/" class="current_page_link">premium.boostsStatus</a>#4959427a flags:<a href="/type/%23/">#</a> my_boost:flags.2?true level:<a href="/type/int/">int</a> current_level_boosts:<a href="/type/int/">int</a> boosts:<a href="/type/int/">int</a> gift_boosts:flags.4?<a href="/type/int/">int</a> next_level_boosts:flags.0?<a href="/type/int/">int</a> premium_audience:flags.1?<a href="/type/StatsPercentValue/">StatsPercentValue</a> boost_url:<a href="/type/string/">string</a> prepaid_giveaways:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrepaidGiveaway/">PrepaidGiveaway</a>&gt; my_boost_slots:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/premium.BoostsStatus/">premium.BoostsStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>my_boost</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether we're currently boosting this channel/supergroup, <code>my_boost_slots</code> will also be set.</td></tr><tr><td><strong>level</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The current boost level of the channel/supergroup.</td></tr><tr><td><strong>current_level_boosts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of boosts acquired so far in the current level.</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of boosts acquired so far.</td></tr><tr><td><strong>gift_boosts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>The number of boosts acquired from created Telegram Premium <a href="/api/giveaways/">gift codes</a> and <a href="/api/giveaways/">giveaways</a>; only returned to channel/supergroup admins.</td></tr><tr><td><strong>next_level_boosts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Total number of boosts needed to reach the next level; if absent, the next level isn't available.</td></tr><tr><td><strong>premium_audience</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/StatsPercentValue/">StatsPercentValue</a></td><td>Only returned to channel/supergroup admins: contains the approximated number of Premium users subscribed to the channel/supergroup, related to the total number of subscribers.</td></tr><tr><td><strong>boost_url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/links/#boost-links">Boost deep link »</a> that can be used to boost the chat.</td></tr><tr><td><strong>prepaid_giveaways</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PrepaidGiveaway/">PrepaidGiveaway</a>&gt;</td><td>A list of prepaid <a href="/api/giveaways/">giveaways</a> available for the chat; only returned to channel/supergroup admins.</td></tr><tr><td><strong>my_boost_slots</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Indicates which of our <a href="/api/boost/">boost slots</a> we've assigned to this peer (populated if <code>my_boost</code> is set).</td></tr></tbody></table>

### Type

[premium.BoostsStatus](/type/premium.BoostsStatus/)

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
