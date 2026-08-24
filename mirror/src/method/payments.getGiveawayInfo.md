---
title: "payments.getGiveawayInfo"
original: "https://core.telegram.org/method/payments.getGiveawayInfo"
section: ref
description: "Obtain information about a Telegram Premium giveaway »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getGiveawayInfo","url":"/method/payments.getGiveawayInfo/"}]
layout: layout.njk
---

# payments.getGiveawayInfo

Obtain information about a [Telegram Premium giveaway »](/api/giveaways/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.giveawayInfo/">payments.giveawayInfo</a>#4367daa0 flags:<a href="/type/%23/">#</a> participating:flags.0?true preparing_results:flags.3?true start_date:<a href="/type/int/">int</a> joined_too_early_date:flags.1?<a href="/type/int/">int</a> admin_disallowed_chat_id:flags.2?<a href="/type/long/">long</a> disallowed_country:flags.4?<a href="/type/string/">string</a> = <a href="/type/payments.GiveawayInfo/">payments.GiveawayInfo</a>;
<a href="/constructor/payments.giveawayInfoResults/">payments.giveawayInfoResults</a>#e175e66f flags:<a href="/type/%23/">#</a> winner:flags.0?true refunded:flags.1?true start_date:<a href="/type/int/">int</a> gift_code_slug:flags.3?<a href="/type/string/">string</a> stars_prize:flags.4?<a href="/type/long/">long</a> finish_date:<a href="/type/int/">int</a> winners_count:<a href="/type/int/">int</a> activated_count:flags.2?<a href="/type/int/">int</a> = <a href="/type/payments.GiveawayInfo/">payments.GiveawayInfo</a>;
---functions---
<a href="/method/payments.getGiveawayInfo/" class="current_page_link">payments.getGiveawayInfo</a>#f4239425 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> = <a href="/type/payments.GiveawayInfo/">payments.GiveawayInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The peer where the giveaway was posted.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID of the <a href="/constructor/messageActionGiveawayLaunch/">messageActionGiveawayLaunch</a> service message</td></tr></tbody></table>

### Result

[payments.GiveawayInfo](/type/payments.GiveawayInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [messageActionGiveawayLaunch](/constructor/messageActionGiveawayLaunch/)

A [giveaway](/api/giveaways/) was started.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
