---
title: "Payments.SuggestedStarRefBots"
original: "https://core.telegram.org/type/payments.SuggestedStarRefBots"
section: ref
description: "A list of suggested mini apps with available affiliate programs"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.SuggestedStarRefBots","url":"/type/payments.SuggestedStarRefBots/"}]
layout: layout.njk
---

# Payments.SuggestedStarRefBots

A list of suggested [mini apps](/api/bots/webapps/) with available [affiliate programs](/api/bots/referrals/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.suggestedStarRefBots/">payments.suggestedStarRefBots</a>#b4d5d859 flags:<a href="/type/%23/">#</a> count:<a href="/type/int/">int</a> suggested_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarRefProgram/">StarRefProgram</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/payments.SuggestedStarRefBots/" class="current_page_link">payments.SuggestedStarRefBots</a>;

---functions---

<a href="/method/payments.getSuggestedStarRefBots/">payments.getSuggestedStarRefBots</a>#d6b48f7 flags:<a href="/type/%23/">#</a> order_by_revenue:flags.0?true order_by_date:flags.1?true peer:<a href="/type/InputPeer/">InputPeer</a> offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.SuggestedStarRefBots/" class="current_page_link">payments.SuggestedStarRefBots</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.suggestedStarRefBots/">payments.suggestedStarRefBots</a></td><td>A list of suggested <a href="/api/bots/webapps/">mini apps</a> with available <a href="/api/bots/referrals/">affiliate programs</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getSuggestedStarRefBots/">payments.getSuggestedStarRefBots</a></td><td>Obtain a list of suggested <a href="/api/bots/webapps/">mini apps</a> with available <a href="/api/bots/referrals/">affiliate programs</a><br><br><code>order_by_revenue</code> and <code>order_by_date</code> are mutually exclusive: if neither is set, results are sorted by profitability.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
