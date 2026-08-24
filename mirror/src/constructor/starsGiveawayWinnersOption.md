---
title: "starsGiveawayWinnersOption"
original: "https://core.telegram.org/constructor/starsGiveawayWinnersOption"
section: ref
description: "Allowed options for the number of giveaway winners."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsGiveawayWinnersOption","url":"/constructor/starsGiveawayWinnersOption/"}]
layout: layout.njk
---

# starsGiveawayWinnersOption

Allowed options for the number of giveaway winners.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsGiveawayWinnersOption/" class="current_page_link">starsGiveawayWinnersOption</a>#54236209 flags:<a href="/type/%23/">#</a> default:flags.0?true users:<a href="/type/int/">int</a> per_user_stars:<a href="/type/long/">long</a> = <a href="/type/StarsGiveawayWinnersOption/">StarsGiveawayWinnersOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, this option must be pre-selected by default in the option list.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of users that will be randomly chosen as winners.</td></tr><tr><td><strong>per_user_stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The number of <a href="/api/stars/">Telegram Stars</a> each winner will receive.</td></tr></tbody></table>

### Type

[StarsGiveawayWinnersOption](/type/StarsGiveawayWinnersOption/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
