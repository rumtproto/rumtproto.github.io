---
title: "payments.getConnectedStarRefBot"
original: "https://core.telegram.org/method/payments.getConnectedStarRefBot"
section: ref
description: "Fetch info about a specific bot affiliation »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getConnectedStarRefBot","url":"/method/payments.getConnectedStarRefBot/"}]
layout: layout.njk
---

# payments.getConnectedStarRefBot

Fetch info about a specific [bot affiliation »](/api/bots/referrals/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.connectedStarRefBots/">payments.connectedStarRefBots</a>#98d5ea1d count:<a href="/type/int/">int</a> connected_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ConnectedBotStarRef/">ConnectedBotStarRef</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.ConnectedStarRefBots/">payments.ConnectedStarRefBots</a>;
---functions---
<a href="/method/payments.getConnectedStarRefBot/" class="current_page_link">payments.getConnectedStarRefBot</a>#b7d998f0 peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> = <a href="/type/payments.ConnectedStarRefBots/">payments.ConnectedStarRefBots</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The affiliated peer</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot that offers the affiliate program</td></tr></tbody></table>

### Result

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
