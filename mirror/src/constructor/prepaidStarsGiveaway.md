---
title: "prepaidStarsGiveaway"
original: "https://core.telegram.org/constructor/prepaidStarsGiveaway"
section: ref
description: "Contains info about a prepaid Telegram Star giveaway »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"prepaidStarsGiveaway","url":"/constructor/prepaidStarsGiveaway/"}]
layout: layout.njk
---

# prepaidStarsGiveaway

Contains info about a [prepaid Telegram Star giveaway »](/api/giveaways/#star-giveaways).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/prepaidStarsGiveaway/" class="current_page_link">prepaidStarsGiveaway</a>#9a9d77e0 id:<a href="/type/long/">long</a> stars:<a href="/type/long/">long</a> quantity:<a href="/type/int/">int</a> boosts:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> = <a href="/type/PrepaidGiveaway/">PrepaidGiveaway</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Prepaid giveaway ID.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Number of given away <a href="/api/stars/">Telegram Stars »</a></td></tr><tr><td><strong>quantity</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of giveaway winners</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of boosts the channel will gain by launching the giveaway.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the giveaway paid for</td></tr></tbody></table>

### Type

[PrepaidGiveaway](/type/PrepaidGiveaway/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
