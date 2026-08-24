---
title: "starsRevenueStatus"
original: "https://core.telegram.org/constructor/starsRevenueStatus"
section: ref
description: "Describes Telegram Star revenue balances »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsRevenueStatus","url":"/constructor/starsRevenueStatus/"}]
layout: layout.njk
---

# starsRevenueStatus

Describes [Telegram Star revenue balances »](/api/stars/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsRevenueStatus/" class="current_page_link">starsRevenueStatus</a>#febe5491 flags:<a href="/type/%23/">#</a> withdrawal_enabled:flags.0?true current_balance:<a href="/type/StarsAmount/">StarsAmount</a> available_balance:<a href="/type/StarsAmount/">StarsAmount</a> overall_revenue:<a href="/type/StarsAmount/">StarsAmount</a> next_withdrawal_at:flags.1?<a href="/type/int/">int</a> = <a href="/type/StarsRevenueStatus/">StarsRevenueStatus</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>withdrawal_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the user may <a href="/api/stars/#withdrawing-revenue">withdraw</a> up to <code>available_balance</code> stars.</td></tr><tr><td><strong>current_balance</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Amount of not-yet-withdrawn Telegram Stars.</td></tr><tr><td><strong>available_balance</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Amount of withdrawable Telegram Stars.</td></tr><tr><td><strong>overall_revenue</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Total amount of earned Telegram Stars.</td></tr><tr><td><strong>next_withdrawal_at</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Unixtime indicating when will withdrawal be available to the user. If not set, withdrawal can be started now.</td></tr></tbody></table>

### Type

[StarsRevenueStatus](/type/StarsRevenueStatus/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
