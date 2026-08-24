---
title: "messageMediaGiveaway"
original: "https://core.telegram.org/constructor/messageMediaGiveaway"
section: ref
description: "Contains info about a giveaway, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaGiveaway","url":"/constructor/messageMediaGiveaway/"}]
layout: layout.njk
---

# messageMediaGiveaway

Contains info about a [giveaway, see here »](/api/giveaways/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaGiveaway/" class="current_page_link">messageMediaGiveaway</a>#aa073beb flags:<a href="/type/%23/">#</a> only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; countries_iso2:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; prize_description:flags.3?<a href="/type/string/">string</a> quantity:<a href="/type/int/">int</a> months:flags.4?<a href="/type/int/">int</a> stars:flags.5?<a href="/type/long/">long</a> until_date:<a href="/type/int/">int</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>only_new_subscribers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, only new subscribers starting from the giveaway creation date will be able to participate to the giveaway.</td></tr><tr><td><strong>winners_are_visible</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, giveaway winners are public and will be listed in a <a href="/constructor/messageMediaGiveawayResults/">messageMediaGiveawayResults</a> message that will be automatically sent to the channel once the giveaway ends.</td></tr><tr><td><strong>channels</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>The channels that the user must join to participate in the giveaway.</td></tr><tr><td><strong>countries_iso2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>If set, only users residing in these countries can participate in the giveaway, (specified as a list of two-letter ISO 3166-1 alpha-2 country codes); otherwise there are no country-based limitations.</td></tr><tr><td><strong>prize_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Can contain a textual description of additional giveaway prizes.</td></tr><tr><td><strong>quantity</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of <a href="/api/premium/">Telegram Premium</a> subscriptions given away.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Duration in months of each <a href="/api/premium/">Telegram Premium</a> subscription in the giveaway.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/long/">long</a></td><td>For <a href="/api/stars/#star-giveaways">Telegram Star giveaways</a>, the total number of Telegram Stars being given away.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The end date of the giveaway.</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/)

A [giveaway](/api/giveaways/) with public winners has finished, this constructor contains info about the winners.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
