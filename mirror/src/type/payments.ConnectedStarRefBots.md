---
title: "Payments.ConnectedStarRefBots"
original: "https://core.telegram.org/type/payments.ConnectedStarRefBots"
section: ref
description: "Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Payments.ConnectedStarRefBots","url":"/type/payments.ConnectedStarRefBots/"}]
layout: layout.njk
---

# Payments.ConnectedStarRefBots

Active [affiliations](/api/bots/referrals/#becoming-an-affiliate)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.connectedStarRefBots/">payments.connectedStarRefBots</a>#98d5ea1d count:<a href="/type/int/">int</a> connected_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ConnectedBotStarRef/">ConnectedBotStarRef</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.ConnectedStarRefBots/" class="current_page_link">payments.ConnectedStarRefBots</a>;

---functions---

<a href="/method/payments.getConnectedStarRefBots/">payments.getConnectedStarRefBots</a>#5869a553 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> offset_date:flags.2?<a href="/type/int/">int</a> offset_link:flags.2?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.ConnectedStarRefBots/" class="current_page_link">payments.ConnectedStarRefBots</a>;
<a href="/method/payments.getConnectedStarRefBot/">payments.getConnectedStarRefBot</a>#b7d998f0 peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> = <a href="/type/payments.ConnectedStarRefBots/" class="current_page_link">payments.ConnectedStarRefBots</a>;
<a href="/method/payments.connectStarRefBot/">payments.connectStarRefBot</a>#7ed5348a peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> = <a href="/type/payments.ConnectedStarRefBots/" class="current_page_link">payments.ConnectedStarRefBots</a>;
<a href="/method/payments.editConnectedStarRefBot/">payments.editConnectedStarRefBot</a>#e4fca4a3 flags:<a href="/type/%23/">#</a> revoked:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> link:<a href="/type/string/">string</a> = <a href="/type/payments.ConnectedStarRefBots/" class="current_page_link">payments.ConnectedStarRefBots</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.connectedStarRefBots/">payments.connectedStarRefBots</a></td><td>Active <a href="/api/bots/referrals/#becoming-an-affiliate">affiliations</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getConnectedStarRefBots/">payments.getConnectedStarRefBots</a></td><td>Fetch all affiliations we have created for a certain peer</td></tr><tr><td><a href="/method/payments.getConnectedStarRefBot/">payments.getConnectedStarRefBot</a></td><td>Fetch info about a specific <a href="/api/bots/referrals/">bot affiliation »</a></td></tr><tr><td><a href="/method/payments.connectStarRefBot/">payments.connectStarRefBot</a></td><td>Join a bot's <a href="/api/bots/referrals/#becoming-an-affiliate">affiliate program, becoming an affiliate »</a></td></tr><tr><td><a href="/method/payments.editConnectedStarRefBot/">payments.editConnectedStarRefBot</a></td><td>Leave a bot's <a href="/api/bots/referrals/#becoming-an-affiliate">affiliate program »</a></td></tr></tbody></table>

### Related pages

#### [Affiliate programs](/api/bots/referrals/)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
