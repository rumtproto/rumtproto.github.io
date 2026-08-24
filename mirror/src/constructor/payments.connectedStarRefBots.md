---
title: "payments.connectedStarRefBots"
original: "https://core.telegram.org/constructor/payments.connectedStarRefBots"
section: ref
description: "payments.ConnectedStarRefBots"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.connectedStarRefBots","url":"/constructor/payments.connectedStarRefBots/"}]
layout: layout.njk
---

# payments.connectedStarRefBots

Active [affiliations](/api/bots/referrals/#becoming-an-affiliate)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.connectedStarRefBots/" class="current_page_link">payments.connectedStarRefBots</a>#98d5ea1d count:<a href="/type/int/">int</a> connected_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ConnectedBotStarRef/">ConnectedBotStarRef</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.ConnectedStarRefBots/">payments.ConnectedStarRefBots</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of active affiliations</td></tr><tr><td><strong>connected_bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ConnectedBotStarRef/">ConnectedBotStarRef</a>&gt;</td><td>The affiliations</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Peers mentioned in <code>connected_bots</code></td></tr></tbody></table>

### Type

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

### Related pages

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
