---
title: "groupCallDonor"
original: "https://core.telegram.org/constructor/groupCallDonor"
section: ref
description: "Describes a live story donor in the donation leaderboard »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"groupCallDonor","url":"/constructor/groupCallDonor/"}]
layout: layout.njk
---

# groupCallDonor

Describes a live story donor in the [donation leaderboard »](/api/group-calls/#paid-live-story-donations).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/groupCallDonor/" class="current_page_link">groupCallDonor</a>#ee430c85 flags:<a href="/type/%23/">#</a> top:flags.0?true my:flags.1?true peer_id:flags.3?<a href="/type/Peer/">Peer</a> stars:<a href="/type/long/">long</a> = <a href="/type/GroupCallDonor/">GroupCallDonor</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>top</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this donor is included in the top-donor leaderboard</td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this entry describes the current user's donations</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Peer/">Peer</a></td><td>Donor displayed in the leaderboard</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total Stars donated by this donor</td></tr></tbody></table>

### Type

[GroupCallDonor](/type/GroupCallDonor/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
