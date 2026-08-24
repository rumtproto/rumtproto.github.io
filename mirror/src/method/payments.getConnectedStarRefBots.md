---
title: "payments.getConnectedStarRefBots"
original: "https://core.telegram.org/method/payments.getConnectedStarRefBots"
section: ref
description: "Fetch all affiliations we have created for a certain peer"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getConnectedStarRefBots","url":"/method/payments.getConnectedStarRefBots/"}]
layout: layout.njk
---

# payments.getConnectedStarRefBots

Fetch all affiliations we have created for a certain peer

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.connectedStarRefBots/">payments.connectedStarRefBots</a>#98d5ea1d count:<a href="/type/int/">int</a> connected_bots:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ConnectedBotStarRef/">ConnectedBotStarRef</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/payments.ConnectedStarRefBots/">payments.ConnectedStarRefBots</a>;
---functions---
<a href="/method/payments.getConnectedStarRefBots/" class="current_page_link">payments.getConnectedStarRefBots</a>#5869a553 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> offset_date:flags.2?<a href="/type/int/">int</a> offset_link:flags.2?<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/payments.ConnectedStarRefBots/">payments.ConnectedStarRefBots</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The affiliated peer</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>If set, returns only results older than the specified unixtime</td></tr><tr><td><strong>offset_link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Offset for <a href="/api/offsets/">pagination</a>, taken from the last returned <a href="/constructor/connectedBotStarRef/">connectedBotStarRef</a>.<code>url</code> (initially empty)</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [connectedBotStarRef](/constructor/connectedBotStarRef/)

Info about an [active affiliate program we have with a Mini App](/api/bots/referrals/#becoming-an-affiliate)
