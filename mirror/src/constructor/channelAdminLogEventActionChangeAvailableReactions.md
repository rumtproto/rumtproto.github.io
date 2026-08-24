---
title: "channelAdminLogEventActionChangeAvailableReactions"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeAvailableReactions"
section: ref
description: "The set of allowed message reactions » for this channel has changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionChangeAvailableReactions","url":"/constructor/channelAdminLogEventActionChangeAvailableReactions/"}]
layout: layout.njk
---

# channelAdminLogEventActionChangeAvailableReactions

The set of allowed [message reactions »](/api/reactions/) for this channel has changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionChangeAvailableReactions/" class="current_page_link">channelAdminLogEventActionChangeAvailableReactions</a>#be4e0ef8 prev_value:<a href="/type/ChatReactions/">ChatReactions</a> new_value:<a href="/type/ChatReactions/">ChatReactions</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_value</strong></td><td style="text-align: center;"><a href="/type/ChatReactions/">ChatReactions</a></td><td>Previously allowed reaction emojis</td></tr><tr><td><strong>new_value</strong></td><td style="text-align: center;"><a href="/type/ChatReactions/">ChatReactions</a></td><td>New allowed reaction emojis</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
