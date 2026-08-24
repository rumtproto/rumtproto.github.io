---
title: "messages.deleteSavedHistory"
original: "https://core.telegram.org/method/messages.deleteSavedHistory"
section: ref
description: "Deletes messages from a monoforum topic », or deletes messages forwarded from a specific peer to saved messages »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.deleteSavedHistory","url":"/method/messages.deleteSavedHistory/"}]
layout: layout.njk
---

# messages.deleteSavedHistory

Deletes messages from a [monoforum topic »](/api/monoforum/), or deletes messages forwarded from a specific peer to [saved messages »](/api/saved-messages/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedHistory/">messages.affectedHistory</a>#b45c69d1 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> offset:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/">messages.AffectedHistory</a>;
---functions---
<a href="/method/messages.deleteSavedHistory/" class="current_page_link">messages.deleteSavedHistory</a>#4dc5085f flags:<a href="/type/%23/">#</a> parent_peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> peer:<a href="/type/InputPeer/">InputPeer</a> max_id:<a href="/type/int/">int</a> min_date:flags.2?<a href="/type/int/">int</a> max_date:flags.3?<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/">messages.AffectedHistory</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, affects the messages of the passed <a href="/api/monoforum/">monoforum topic »</a>, otherwise affects <a href="/api/saved-messages/">saved messages »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer, whose messages will be deleted from <a href="/api/saved-messages/">saved messages »</a>, or the ID of the topic.</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum ID of message to delete</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Delete all messages newer than this UNIX timestamp</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/int/">int</a></td><td>Delete all messages older than this UNIX timestamp</td></tr></tbody></table>

### Result

[messages.AffectedHistory](/type/messages.AffectedHistory/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
