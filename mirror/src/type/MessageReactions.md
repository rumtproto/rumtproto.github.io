---
title: "MessageReactions"
original: "https://core.telegram.org/type/MessageReactions"
section: ref
description: "Telegram allows users to react on any message using specific emojis, triggering cute lottie animations."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessageReactions","url":"/type/MessageReactions/"}]
layout: layout.njk
---

# MessageReactions

[Message reactions »](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageReactions/">messageReactions</a>#a339f0b flags:<a href="/type/%23/">#</a> min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReactionCount/">ReactionCount</a>&gt; recent_reactions:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessagePeerReaction/">MessagePeerReaction</a>&gt; top_reactors:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageReactor/">MessageReactor</a>&gt; = <a href="/type/MessageReactions/" class="current_page_link">MessageReactions</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageReactions/">messageReactions</a></td><td><a href="/api/reactions/">Message reactions »</a></td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
