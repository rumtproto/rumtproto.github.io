---
title: "Payments.GiveawayInfo"
original: "https://core.telegram.org/type/payments.GiveawayInfo"
section: ref
description: "Info about a Telegram Premium Giveaway."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.GiveawayInfo","url":"/type/payments.GiveawayInfo/"}]
layout: layout.njk
---

# Payments.GiveawayInfo

Info about a [Telegram Premium Giveaway](/api/giveaways/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.giveawayInfo/">payments.giveawayInfo</a>#4367daa0 flags:<a href="/type/%23/">#</a> participating:flags.0?true preparing_results:flags.3?true start_date:<a href="/type/int/">int</a> joined_too_early_date:flags.1?<a href="/type/int/">int</a> admin_disallowed_chat_id:flags.2?<a href="/type/long/">long</a> disallowed_country:flags.4?<a href="/type/string/">string</a> = <a href="/type/payments.GiveawayInfo/" class="current_page_link">payments.GiveawayInfo</a>;
<a href="/constructor/payments.giveawayInfoResults/">payments.giveawayInfoResults</a>#e175e66f flags:<a href="/type/%23/">#</a> winner:flags.0?true refunded:flags.1?true start_date:<a href="/type/int/">int</a> gift_code_slug:flags.3?<a href="/type/string/">string</a> stars_prize:flags.4?<a href="/type/long/">long</a> finish_date:<a href="/type/int/">int</a> winners_count:<a href="/type/int/">int</a> activated_count:flags.2?<a href="/type/int/">int</a> = <a href="/type/payments.GiveawayInfo/" class="current_page_link">payments.GiveawayInfo</a>;

---functions---

<a href="/method/payments.getGiveawayInfo/">payments.getGiveawayInfo</a>#f4239425 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/payments.GiveawayInfo/" class="current_page_link">payments.GiveawayInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.giveawayInfo/">payments.giveawayInfo</a></td><td>Contains info about an ongoing <a href="/api/giveaways/">giveaway</a>.<br><br>If neither the <code>participating</code>, <code>joined_too_early_date</code>, <code>admin_disallowed_chat_id</code> or <code>disallowed_country</code> flags are set, the user is not currently participating in the giveaway but could participate by joining all the channels specified in the <a href="/constructor/messageMediaGiveaway/">messageMediaGiveaway</a>.<code>channels</code> field.</td></tr><tr><td><a href="/constructor/payments.giveawayInfoResults/">payments.giveawayInfoResults</a></td><td>A <a href="/api/giveaways/">giveaway</a> has ended.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getGiveawayInfo/">payments.getGiveawayInfo</a></td><td>Obtain information about a <a href="/api/giveaways/">Telegram Premium giveaway »</a>.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
