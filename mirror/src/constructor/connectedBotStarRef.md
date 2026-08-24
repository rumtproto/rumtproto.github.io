---
title: "connectedBotStarRef"
original: "https://core.telegram.org/constructor/connectedBotStarRef"
section: ref
description: "Info about an active affiliate program we have with a Mini App"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"connectedBotStarRef","url":"/constructor/connectedBotStarRef/"}]
layout: layout.njk
---

# connectedBotStarRef

Info about an [active affiliate program we have with a Mini App](/api/bots/referrals/#becoming-an-affiliate)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/connectedBotStarRef/" class="current_page_link">connectedBotStarRef</a>#19a13f71 flags:<a href="/type/%23/">#</a> revoked:flags.1?true url:<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> bot_id:<a href="/type/long/">long</a> commission_permille:<a href="/type/int/">int</a> duration_months:flags.0?<a href="/type/int/">int</a> participants:<a href="/type/long/">long</a> revenue:<a href="/type/long/">long</a> = <a href="/type/ConnectedBotStarRef/">ConnectedBotStarRef</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>revoked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, this affiliation was revoked by the affiliate using <a href="/method/payments.editConnectedStarRefBot/">payments.editConnectedStarRefBot</a>, or by the affiliation program owner using <a href="/method/bots.updateStarRefProgram/">bots.updateStarRefProgram</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/links/#referral-links">Referral link</a> to be shared</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When did we affiliate with <code>bot_id</code></td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the mini app that created the affiliate program</td></tr><tr><td><strong>commission_permille</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by <code>bot_id</code></td></tr><tr><td><strong>duration_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Number of months the program will be active; if not set, there is no expiration date.</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The number of users that used the affiliate program</td></tr><tr><td><strong>revenue</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The number of Telegram Stars that were earned by the affiliate program</td></tr></tbody></table>

### Type

[ConnectedBotStarRef](/type/ConnectedBotStarRef/)

### Related pages

#### [payments.editConnectedStarRefBot](/method/payments.editConnectedStarRefBot/)

Leave a bot's [affiliate program »](/api/bots/referrals/#becoming-an-affiliate)

#### [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/)

Create, edit or delete the [affiliate program](/api/bots/referrals/) of a bot we own

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
