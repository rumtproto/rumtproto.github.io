---
title: "prepaidGiveaway"
original: "https://core.telegram.org/constructor/prepaidGiveaway"
section: ref
description: "Contains info about a prepaid giveaway »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"prepaidGiveaway","url":"/constructor/prepaidGiveaway/"}]
layout: layout.njk
---

# prepaidGiveaway

Contains info about a [prepaid giveaway »](/api/giveaways/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/prepaidGiveaway/" class="current_page_link">prepaidGiveaway</a>#b2539d54 id:<a href="/type/long/">long</a> months:<a href="/type/int/">int</a> quantity:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> = <a href="/type/PrepaidGiveaway/">PrepaidGiveaway</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Prepaid giveaway ID.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration in months of each gifted <a href="/api/premium/">Telegram Premium</a> subscription.</td></tr><tr><td><strong>quantity</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of given away <a href="/api/premium/">Telegram Premium</a> subscriptions.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Payment date.</td></tr></tbody></table>

### Type

[PrepaidGiveaway](/type/PrepaidGiveaway/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
