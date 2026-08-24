---
title: "messages.availableReactions"
original: "https://core.telegram.org/constructor/messages.availableReactions"
section: ref
description: "Animations and metadata associated with message reactions »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.availableReactions","url":"/constructor/messages.availableReactions/"}]
layout: layout.njk
---

# messages.availableReactions

Animations and metadata associated with [message reactions »](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.availableReactions/" class="current_page_link">messages.availableReactions</a>#768e3aad hash:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AvailableReaction/">AvailableReaction</a>&gt; = <a href="/type/messages.AvailableReactions/">messages.AvailableReactions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AvailableReaction/">AvailableReaction</a>&gt;</td><td>Animations and metadata associated with <a href="/api/reactions/">message reactions »</a></td></tr></tbody></table>

### Type

[messages.AvailableReactions](/type/messages.AvailableReactions/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
