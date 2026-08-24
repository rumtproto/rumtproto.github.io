---
title: "StarRefProgram"
original: "https://core.telegram.org/type/StarRefProgram"
section: ref
description: "Indo about an affiliate program offered by a bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarRefProgram","url":"/type/StarRefProgram/"}]
layout: layout.njk
---

# StarRefProgram

Indo about an [affiliate program offered by a bot](/api/bots/referrals/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starRefProgram/">starRefProgram</a>#dd0c66f2 flags:<a href="/type/%23/">#</a> bot_id:<a href="/type/long/">long</a> commission_permille:<a href="/type/int/">int</a> duration_months:flags.0?<a href="/type/int/">int</a> end_date:flags.1?<a href="/type/int/">int</a> daily_revenue_per_user:flags.2?<a href="/type/StarsAmount/">StarsAmount</a> = <a href="/type/StarRefProgram/" class="current_page_link">StarRefProgram</a>;

---functions---

<a href="/method/bots.updateStarRefProgram/">bots.updateStarRefProgram</a>#778b5ab3 flags:<a href="/type/%23/">#</a> bot:<a href="/type/InputUser/">InputUser</a> commission_permille:<a href="/type/int/">int</a> duration_months:flags.0?<a href="/type/int/">int</a> = <a href="/type/StarRefProgram/" class="current_page_link">StarRefProgram</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starRefProgram/">starRefProgram</a></td><td>Info about an <a href="/api/bots/referrals/">affiliate program offered by a bot</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.updateStarRefProgram/">bots.updateStarRefProgram</a></td><td>Create, edit or delete the <a href="/api/bots/referrals/">affiliate program</a> of a bot we own</td></tr></tbody></table>

### Related pages

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
