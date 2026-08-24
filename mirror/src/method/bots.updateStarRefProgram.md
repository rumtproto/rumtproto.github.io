---
title: "bots.updateStarRefProgram"
original: "https://core.telegram.org/method/bots.updateStarRefProgram"
section: ref
description: "Create, edit or delete the affiliate program of a bot we own"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.updateStarRefProgram","url":"/method/bots.updateStarRefProgram/"}]
layout: layout.njk
---

# bots.updateStarRefProgram

Create, edit or delete the [affiliate program](/api/bots/referrals/) of a bot we own

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starRefProgram/">starRefProgram</a>#dd0c66f2 flags:<a href="/type/%23/">#</a> bot_id:<a href="/type/long/">long</a> commission_permille:<a href="/type/int/">int</a> duration_months:flags.0?<a href="/type/int/">int</a> end_date:flags.1?<a href="/type/int/">int</a> daily_revenue_per_user:flags.2?<a href="/type/StarsAmount/">StarsAmount</a> = <a href="/type/StarRefProgram/">StarRefProgram</a>;
---functions---
<a href="/method/bots.updateStarRefProgram/" class="current_page_link">bots.updateStarRefProgram</a>#778b5ab3 flags:<a href="/type/%23/">#</a> bot:<a href="/type/InputUser/">InputUser</a> commission_permille:<a href="/type/int/">int</a> duration_months:flags.0?<a href="/type/int/">int</a> = <a href="/type/StarRefProgram/">StarRefProgram</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot</td></tr><tr><td><strong>commission_permille</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The permille commission rate: it indicates the share of Telegram Stars received by affiliates for every transaction made by users they referred inside of the bot.<br>The minimum and maximum values for this parameter are contained in the <a href="/api/config/#starref-min-commission-permille">starref_min_commission_permille</a> and <a href="/api/config/#starref-max-commission-permille">starref_max_commission_permille</a> client configuration parameters.<br>Can be <code>0</code> to terminate the affiliate program.<br>Both the duration and the commission may only be raised after creation of the program: to lower them, the program must first be terminated and a new one created.</td></tr><tr><td><strong>duration_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Indicates the duration of the affiliate program; if not set, there is no expiration date.</td></tr></tbody></table>

### Result

[StarRefProgram](/type/StarRefProgram/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>STARREF_AWAITING_END</td><td>The previous referral program was terminated less than 24 hours ago: further changes can be made after the date specified in userFull.starref_program.end_date.</td></tr><tr><td>400</td><td>STARREF_PERMILLE_INVALID</td><td>The specified commission_permille is invalid: the minimum and maximum values for this parameter are contained in the <a href="/api/config/#starref-min-commission-permille">starref_min_commission_permille</a> and <a href="/api/config/#starref-max-commission-permille">starref_max_commission_permille</a> client configuration parameters.</td></tr><tr><td>400</td><td>STARREF_PERMILLE_TOO_LOW</td><td>The specified commission_permille is too low: the minimum and maximum values for this parameter are contained in the <a href="/api/config/#starref-min-commission-permille">starref_min_commission_permille</a> and <a href="/api/config/#starref-max-commission-permille">starref_max_commission_permille</a> client configuration parameters.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
