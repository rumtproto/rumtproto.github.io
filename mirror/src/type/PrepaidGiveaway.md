---
title: "PrepaidGiveaway"
original: "https://core.telegram.org/type/PrepaidGiveaway"
section: ref
description: "Contains info about a prepaid giveaway »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PrepaidGiveaway","url":"/type/PrepaidGiveaway/"}]
layout: layout.njk
---

# PrepaidGiveaway

Contains info about a [prepaid giveaway »](/api/giveaways/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/prepaidGiveaway/">prepaidGiveaway</a>#b2539d54 id:<a href="/type/long/">long</a> months:<a href="/type/int/">int</a> quantity:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> = <a href="/type/PrepaidGiveaway/" class="current_page_link">PrepaidGiveaway</a>;
<a href="/constructor/prepaidStarsGiveaway/">prepaidStarsGiveaway</a>#9a9d77e0 id:<a href="/type/long/">long</a> stars:<a href="/type/long/">long</a> quantity:<a href="/type/int/">int</a> boosts:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> = <a href="/type/PrepaidGiveaway/" class="current_page_link">PrepaidGiveaway</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/prepaidGiveaway/">prepaidGiveaway</a></td><td>Contains info about a <a href="/api/giveaways/">prepaid giveaway »</a>.</td></tr><tr><td><a href="/constructor/prepaidStarsGiveaway/">prepaidStarsGiveaway</a></td><td>Contains info about a <a href="/api/giveaways/#star-giveaways">prepaid Telegram Star giveaway »</a>.</td></tr></tbody></table>

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
