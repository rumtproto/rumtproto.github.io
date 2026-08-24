---
title: "sendMessageEmojiInteraction"
original: "https://core.telegram.org/constructor/sendMessageEmojiInteraction"
section: ref
description: "User has clicked on an animated emoji triggering a reaction, click here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"sendMessageEmojiInteraction","url":"/constructor/sendMessageEmojiInteraction/"}]
layout: layout.njk
---

# sendMessageEmojiInteraction

User has clicked on an animated emoji triggering a [reaction, click here for more info »](/api/animated-emojis/#emoji-reactions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/sendMessageEmojiInteraction/" class="current_page_link">sendMessageEmojiInteraction</a>#25972bcb emoticon:<a href="/type/string/">string</a> msg_id:<a href="/type/int/">int</a> interaction:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/SendMessageAction/">SendMessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Emoji</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message ID of the animated emoji that was clicked</td></tr><tr><td><strong>interaction</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>A JSON object with interaction info, <a href="/api/animated-emojis/#emoji-reactions">click here for more info »</a></td></tr></tbody></table>

### Type

[SendMessageAction](/type/SendMessageAction/)

### Related pages

#### [Animated Emojis](/api/animated-emojis/)

Graphical telegram clients should transform emojis into their respective animated version.
