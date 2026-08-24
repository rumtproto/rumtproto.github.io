---
title: "StarsGiveawayOption"
original: "https://core.telegram.org/type/StarsGiveawayOption"
section: ref
description: "Contains info about a Telegram Star giveaway option."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsGiveawayOption","url":"/type/StarsGiveawayOption/"}]
layout: layout.njk
---

# StarsGiveawayOption

Contains info about a [Telegram Star giveaway](/api/giveaways/#star-giveaways) option.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsGiveawayOption/">starsGiveawayOption</a>#94ce852a flags:<a href="/type/%23/">#</a> extended:flags.0?true default:flags.1?true stars:<a href="/type/long/">long</a> yearly_boosts:<a href="/type/int/">int</a> store_product:flags.2?<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> winners:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsGiveawayWinnersOption/">StarsGiveawayWinnersOption</a>&gt; = <a href="/type/StarsGiveawayOption/" class="current_page_link">StarsGiveawayOption</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsGiveawayOption/">starsGiveawayOption</a></td><td>Contains info about a <a href="/api/giveaways/#star-giveaways">Telegram Star giveaway</a> option.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
