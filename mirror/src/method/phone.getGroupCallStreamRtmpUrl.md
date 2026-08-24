---
title: "phone.getGroupCallStreamRtmpUrl"
original: "https://core.telegram.org/method/phone.getGroupCallStreamRtmpUrl"
section: ref
description: "Get the RTMP URL and stream key used by the single external streamer that publishes all audio and video for an RTMP-mode video chat, livestream or live story."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"phone.getGroupCallStreamRtmpUrl","url":"/method/phone.getGroupCallStreamRtmpUrl/"}]
layout: layout.njk
---

# phone.getGroupCallStreamRtmpUrl

Get the RTMP URL and stream key used by the single external streamer that publishes all audio and video for an RTMP-mode video chat, livestream or live story.

See [here »](/api/group-calls/#creating-and-publishing-an-rtmp-livestream) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStreamRtmpUrl/">phone.groupCallStreamRtmpUrl</a>#2dbf3432 url:<a href="/type/string/">string</a> key:<a href="/type/string/">string</a> = <a href="/type/phone.GroupCallStreamRtmpUrl/">phone.GroupCallStreamRtmpUrl</a>;
---functions---
<a href="/method/phone.getGroupCallStreamRtmpUrl/" class="current_page_link">phone.getGroupCallStreamRtmpUrl</a>#5af4c73a flags:<a href="/type/%23/">#</a> live_story:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> revoke:<a href="/type/Bool/">Bool</a> = <a href="/type/phone.GroupCallStreamRtmpUrl/">phone.GroupCallStreamRtmpUrl</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>live_story</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Obtain credentials for an RTMP live story instead of a video chat/livestream</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer that will host the RTMP video chat, livestream or live story</td></tr><tr><td><strong>revoke</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to invalidate the previous stream key and generate a new one, instead of returning the existing key</td></tr></tbody></table>

### Result

[phone.GroupCallStreamRtmpUrl](/type/phone.GroupCallStreamRtmpUrl/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
