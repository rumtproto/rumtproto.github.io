---
title: "starRefProgram"
original: "https://core.telegram.org/constructor/starRefProgram"
section: ref
description: "Info about an affiliate program offered by a bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starRefProgram","url":"/constructor/starRefProgram/"}]
layout: layout.njk
---

# starRefProgram

Info about an [affiliate program offered by a bot](/api/bots/referrals/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starRefProgram/" class="current_page_link">starRefProgram</a>#dd0c66f2 flags:<a href="/type/%23/">#</a> bot_id:<a href="/type/long/">long</a> commission_permille:<a href="/type/int/">int</a> duration_months:flags.0?<a href="/type/int/">int</a> end_date:flags.1?<a href="/type/int/">int</a> daily_revenue_per_user:flags.2?<a href="/type/StarsAmount/">StarsAmount</a> = <a href="/type/StarRefProgram/">StarRefProgram</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the bot that offers the program</td></tr><tr><td><strong>commission_permille</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>An affiliate gets a commission of <a href="/constructor/starRefProgram/">starRefProgram</a>.<code>commission_permille</code>‰ <a href="/api/stars/">Telegram Stars</a> for every mini app transaction made by users they refer</td></tr><tr><td><strong>duration_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>An affiliate gets a commission for every mini app transaction made by users they refer, for <code>duration_months</code> months after a referral link is imported, starting the bot for the first time</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Point in time (Unix timestamp) when the affiliate program will be closed (optional, if not set the affiliate program isn't scheduled to be closed)</td></tr><tr><td><strong>daily_revenue_per_user</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/StarsAmount/">StarsAmount</a></td><td>The amount of daily revenue per user in Telegram Stars of the bot that created the affiliate program.<br>To obtain the approximated revenue per referred user, multiply this value by <code>commission_permille</code> and divide by <code>1000</code>.</td></tr></tbody></table>

### Type

[StarRefProgram](/type/StarRefProgram/)

### Related pages

#### [starRefProgram](/constructor/starRefProgram/)

Info about an [affiliate program offered by a bot](/api/bots/referrals/)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
