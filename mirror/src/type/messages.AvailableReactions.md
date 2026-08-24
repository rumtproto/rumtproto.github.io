---
title: "messages.AvailableReactions"
original: "https://core.telegram.org/type/messages.AvailableReactions"
section: ref
description: "Animations and metadata associated with message reactions »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.AvailableReactions","url":"/type/messages.AvailableReactions/"}]
layout: layout.njk
---

# messages.AvailableReactions

Animations and metadata associated with [message reactions »](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.availableReactionsNotModified/">messages.availableReactionsNotModified</a>#9f071957 = <a href="/type/messages.AvailableReactions/" class="current_page_link">messages.AvailableReactions</a>;
<a href="/constructor/messages.availableReactions/">messages.availableReactions</a>#768e3aad hash:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AvailableReaction/">AvailableReaction</a>&gt; = <a href="/type/messages.AvailableReactions/" class="current_page_link">messages.AvailableReactions</a>;

---functions---

<a href="/method/messages.getAvailableReactions/">messages.getAvailableReactions</a>#18dea0ac hash:<a href="/type/int/">int</a> = <a href="/type/messages.AvailableReactions/" class="current_page_link">messages.AvailableReactions</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.availableReactionsNotModified/">messages.availableReactionsNotModified</a></td><td>No new reactions are available</td></tr><tr><td><a href="/constructor/messages.availableReactions/">messages.availableReactions</a></td><td>Animations and metadata associated with <a href="/api/reactions/">message reactions »</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getAvailableReactions/">messages.getAvailableReactions</a></td><td>Obtain available <a href="/api/reactions/">message reactions »</a></td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
