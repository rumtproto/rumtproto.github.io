---
title: "messageReactor"
original: "https://core.telegram.org/constructor/messageReactor"
section: ref
description: "Info about a user in the paid Star reactions leaderboard for a message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageReactor","url":"/constructor/messageReactor/"}]
layout: layout.njk
---

# messageReactor

Info about a user in the [paid Star reactions leaderboard](/api/reactions/#paid-reactions) for a message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReactor/" class="current_page_link">messageReactor</a>#4ba3a95a flags:<a href="/type/%23/">#</a> top:flags.0?true my:flags.1?true anonymous:flags.2?true peer_id:flags.3?<a href="/type/Peer/">Peer</a> count:<a href="/type/int/">int</a> = <a href="/type/MessageReactor/">MessageReactor</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>top</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the reactor is one of the most active reactors; may be unset if the reactor is the current user.</td></tr><tr><td><strong>my</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, this reactor is the current user.</td></tr><tr><td><strong>anonymous</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, the reactor is anonymous.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Peer/">Peer</a></td><td>Identifier of the peer that reacted: may be unset for anonymous reactors different from the current user (i.e. if the current user sent an anonymous reaction <code>anonymous</code> will be set but this field will also be set).</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The number of sent Telegram Stars.</td></tr></tbody></table>

### Type

[MessageReactor](/type/MessageReactor/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
