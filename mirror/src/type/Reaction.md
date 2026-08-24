---
title: "Reaction"
original: "https://core.telegram.org/type/Reaction"
section: ref
description: "Telegram allows users to react on any message using specific emojis, triggering cute lottie animations."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Reaction","url":"/type/Reaction/"}]
layout: layout.njk
---

# Reaction

[Message reaction](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/reactionEmpty/">reactionEmpty</a>#79f5d419 = <a href="/type/Reaction/" class="current_page_link">Reaction</a>;
<a href="/constructor/reactionEmoji/">reactionEmoji</a>#1b2286b8 emoticon:<a href="/type/string/">string</a> = <a href="/type/Reaction/" class="current_page_link">Reaction</a>;
<a href="/constructor/reactionCustomEmoji/">reactionCustomEmoji</a>#8935fc73 document_id:<a href="/type/long/">long</a> = <a href="/type/Reaction/" class="current_page_link">Reaction</a>;
<a href="/constructor/reactionPaid/">reactionPaid</a>#523da4eb = <a href="/type/Reaction/" class="current_page_link">Reaction</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/reactionEmpty/">reactionEmpty</a></td><td>No reaction</td></tr><tr><td><a href="/constructor/reactionEmoji/">reactionEmoji</a></td><td>Normal emoji message reaction</td></tr><tr><td><a href="/constructor/reactionCustomEmoji/">reactionCustomEmoji</a></td><td><a href="/api/custom-emoji/">Custom emoji</a> message reaction</td></tr><tr><td><a href="/constructor/reactionPaid/">reactionPaid</a></td><td>Represents a <a href="/api/reactions/#paid-reactions">paid Telegram Star reaction »</a>.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
