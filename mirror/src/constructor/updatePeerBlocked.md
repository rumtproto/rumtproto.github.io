---
title: "updatePeerBlocked"
original: "https://core.telegram.org/constructor/updatePeerBlocked"
section: ref
description: "We blocked a peer, see here » for more info on blocklists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePeerBlocked","url":"/constructor/updatePeerBlocked/"}]
layout: layout.njk
---

# updatePeerBlocked

We blocked a peer, see [here »](/api/block/) for more info on blocklists.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePeerBlocked/" class="current_page_link">updatePeerBlocked</a>#ebe07752 flags:<a href="/type/%23/">#</a> blocked:flags.0?true blocked_my_stories_from:flags.1?true peer_id:<a href="/type/Peer/">Peer</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the peer was blocked or unblocked</td></tr><tr><td><strong>blocked_my_stories_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the peer was added/removed to/from the story blocklist; if not set, this update affects the main blocklist, see <a href="/api/block/">here »</a> for more info.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The (un)blocked peer</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Blocked users](/api/block/)

Working with the blocklist.
