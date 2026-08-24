---
title: "payments.giveawayInfo"
original: "https://core.telegram.org/constructor/payments.giveawayInfo"
section: ref
description: "Contains info about an ongoing giveaway."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.giveawayInfo","url":"/constructor/payments.giveawayInfo/"}]
layout: layout.njk
---

# payments.giveawayInfo

Contains info about an ongoing [giveaway](/api/giveaways/).

If neither the `participating`, `joined_too_early_date`, `admin_disallowed_chat_id` or `disallowed_country` flags are set, the user is not currently participating in the giveaway but could participate by joining all the channels specified in the [messageMediaGiveaway](/constructor/messageMediaGiveaway/).`channels` field.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.giveawayInfo/" class="current_page_link">payments.giveawayInfo</a>#4367daa0 flags:<a href="/type/%23/">#</a> participating:flags.0?true preparing_results:flags.3?true start_date:<a href="/type/int/">int</a> joined_too_early_date:flags.1?<a href="/type/int/">int</a> admin_disallowed_chat_id:flags.2?<a href="/type/long/">long</a> disallowed_country:flags.4?<a href="/type/string/">string</a> = <a href="/type/payments.GiveawayInfo/">payments.GiveawayInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>participating</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>The current user is participating in the giveaway.</td></tr><tr><td><strong>preparing_results</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, the giveaway has ended and the results are being prepared.</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the giveaway started</td></tr><tr><td><strong>joined_too_early_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>The current user can't participate in the giveaway, because they were already a member of the channel when the giveaway started, and the <code>only_new_subscribers</code> was set when starting the giveaway.</td></tr><tr><td><strong>admin_disallowed_chat_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>If set, the current user can't participate in the giveaway, because they are an administrator in one of the channels (ID specified in this flag) that created the giveaway.</td></tr><tr><td><strong>disallowed_country</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>If set, the current user can't participate in this giveaway, because their phone number is from the specified disallowed country (specified as a two-letter ISO 3166-1 alpha-2 country code).</td></tr></tbody></table>

### Type

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [messageMediaGiveaway](/constructor/messageMediaGiveaway/)

Contains info about a [giveaway, see here »](/api/giveaways/) for more info.
