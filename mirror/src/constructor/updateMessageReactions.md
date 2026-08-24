---
title: "updateMessageReactions"
original: "https://core.telegram.org/constructor/updateMessageReactions"
section: ref
description: "New message reactions » are available"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateMessageReactions","url":"/constructor/updateMessageReactions/"}]
layout: layout.njk
---

# updateMessageReactions

New [message reactions »](/api/reactions/) are available

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateMessageReactions/" class="current_page_link">updateMessageReactions</a>#1e297bfa flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> msg_id:<a href="/type/int/">int</a> top_msg_id:flags.0?<a href="/type/int/">int</a> saved_peer_id:flags.1?<a href="/type/Peer/">Peer</a> reactions:<a href="/type/MessageReactions/">MessageReactions</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/forum/#forum-topics">Forum topic ID</a></td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Peer/">Peer</a></td><td>If set, the reactions are in the specified <a href="/api/monoforum/">monoforum topic »</a>.</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/MessageReactions/">MessageReactions</a></td><td>Reactions</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
