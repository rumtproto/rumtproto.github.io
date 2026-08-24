---
title: "messageActionGiveawayResults"
original: "https://core.telegram.org/constructor/messageActionGiveawayResults"
section: ref
description: "Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGiveawayResults","url":"/constructor/messageActionGiveawayResults/"}]
layout: layout.njk
---

# messageActionGiveawayResults

A [giveaway](/api/giveaways/) has ended.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGiveawayResults/" class="current_page_link">messageActionGiveawayResults</a>#87e2f155 flags:<a href="/type/%23/">#</a> stars:flags.0?true winners_count:<a href="/type/int/">int</a> unclaimed_count:<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, this is a <a href="/api/stars/#star-giveaways">Telegram Star giveaway</a></td></tr><tr><td><strong>winners_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of winners in the giveaway</td></tr><tr><td><strong>unclaimed_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of undistributed prizes</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
