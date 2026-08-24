---
title: "payments.giveawayInfoResults"
original: "https://core.telegram.org/constructor/payments.giveawayInfoResults"
section: ref
description: "Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.giveawayInfoResults","url":"/constructor/payments.giveawayInfoResults/"}]
layout: layout.njk
---

# payments.giveawayInfoResults

A [giveaway](/api/giveaways/) has ended.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.giveawayInfoResults/" class="current_page_link">payments.giveawayInfoResults</a>#e175e66f flags:<a href="/type/%23/">#</a> winner:flags.0?true refunded:flags.1?true start_date:<a href="/type/int/">int</a> gift_code_slug:flags.3?<a href="/type/string/">string</a> stars_prize:flags.4?<a href="/type/long/">long</a> finish_date:<a href="/type/int/">int</a> winners_count:<a href="/type/int/">int</a> activated_count:flags.2?<a href="/type/int/">int</a> = <a href="/type/payments.GiveawayInfo/">payments.GiveawayInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>winner</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether we're one of the winners of this giveaway.</td></tr><tr><td><strong>refunded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the giveaway was canceled and was fully refunded.</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Start date of the giveaway</td></tr><tr><td><strong>gift_code_slug</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>If we're one of the winners of this giveaway, contains the <a href="/api/links/#premium-giftcode-links">Premium gift code</a>, see <a href="/api/giveaways/">here »</a> for more info on the full giveaway flow.</td></tr><tr><td><strong>stars_prize</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/long/">long</a></td><td>If we're one of the winners of this <a href="/api/giveaways/#star-giveaways">Telegram Star giveaway</a>, the number <a href="/api/stars/">Telegram Stars</a> we won.</td></tr><tr><td><strong>finish_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>End date of the giveaway. May be bigger than the end date specified in parameters of the giveaway.</td></tr><tr><td><strong>winners_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of winners in the giveaway</td></tr><tr><td><strong>activated_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Number of winners, which activated their <a href="/api/links/#premium-giftcode-links">gift codes</a>.</td></tr></tbody></table>

### Type

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
