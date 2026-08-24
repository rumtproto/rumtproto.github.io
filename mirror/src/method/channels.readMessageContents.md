---
title: "channels.readMessageContents"
original: "https://core.telegram.org/method/channels.readMessageContents"
section: ref
description: "Mark channel/supergroup message contents as read, emitting an updateChannelReadMessagesContents."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.readMessageContents","url":"/method/channels.readMessageContents/"}]
layout: layout.njk
---

# channels.readMessageContents

Mark [channel/supergroup](/api/channel/) message contents as read, emitting an [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/channels.readMessageContents/" class="current_page_link">channels.readMessageContents</a>#eab5dc38 channel:<a href="/type/InputChannel/">InputChannel</a> id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td><a href="/api/channel/">Channel/supergroup</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of messages whose contents should be marked as read</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/)

The specified [channel/supergroup](/api/channel/) messages were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [channels.readMessageContents](/method/channels.readMessageContents/))
