---
title: "messages.reactions"
original: "https://core.telegram.org/constructor/messages.reactions"
section: ref
description: "List of message reactions"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.reactions","url":"/constructor/messages.reactions/"}]
layout: layout.njk
---

# messages.reactions

List of [message reactions](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.reactions/" class="current_page_link">messages.reactions</a>#eafdf716 hash:<a href="/type/long/">long</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt; = <a href="/type/messages.Reactions/">messages.Reactions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash used for caching, can also be locally regenerated using the algorithm specified <a href="/api/reactions/#recent-reactions">here »</a>.</td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt;</td><td>Reactions</td></tr></tbody></table>

### Type

[messages.Reactions](/type/messages.Reactions/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
