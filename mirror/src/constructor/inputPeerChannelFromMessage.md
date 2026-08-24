---
title: "inputPeerChannelFromMessage"
original: "https://core.telegram.org/constructor/inputPeerChannelFromMessage"
section: ref
description: "Defines a min channel that was seen in a certain message of a certain chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPeerChannelFromMessage","url":"/constructor/inputPeerChannelFromMessage/"}]
layout: layout.njk
---

# inputPeerChannelFromMessage

Defines a [min](/api/min/) channel that was seen in a certain message of a certain chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputPeerChannelFromMessage/" class="current_page_link">inputPeerChannelFromMessage</a>#bd2a0840 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> channel_id:<a href="/type/long/">long</a> = <a href="/type/InputPeer/">InputPeer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat where the channel's message was seen</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The message ID</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The identifier of the channel that was seen</td></tr></tbody></table>

### Type

[InputPeer](/type/InputPeer/)

### Related pages

#### [Min constructors](/api/min/)

In some situations user and channel constructors have reduced set of fields present (although id is always there) and min flag set.
