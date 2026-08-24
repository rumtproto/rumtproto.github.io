---
title: "channelAdminLogEventActionPinTopic"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionPinTopic"
section: ref
description: "A forum topic was pinned or unpinned"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionPinTopic","url":"/constructor/channelAdminLogEventActionPinTopic/"}]
layout: layout.njk
---

# channelAdminLogEventActionPinTopic

A [forum topic](/api/forum/#forum-topics) was pinned or unpinned

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionPinTopic/" class="current_page_link">channelAdminLogEventActionPinTopic</a>#5d8d353b flags:<a href="/type/%23/">#</a> prev_topic:flags.0?<a href="/type/ForumTopic/">ForumTopic</a> new_topic:flags.1?<a href="/type/ForumTopic/">ForumTopic</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>prev_topic</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/ForumTopic/">ForumTopic</a></td><td>Previous topic information</td></tr><tr><td><strong>new_topic</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/ForumTopic/">ForumTopic</a></td><td>New topic information</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
