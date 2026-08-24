---
title: "phone.GroupCallStreamRtmpUrl"
original: "https://core.telegram.org/type/phone.GroupCallStreamRtmpUrl"
section: ref
description: "RTMP URL and stream key to be used in streaming software"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.GroupCallStreamRtmpUrl","url":"/type/phone.GroupCallStreamRtmpUrl/"}]
layout: layout.njk
---

# phone.GroupCallStreamRtmpUrl

RTMP URL and stream key to be used in streaming software

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStreamRtmpUrl/">phone.groupCallStreamRtmpUrl</a>#2dbf3432 url:<a href="/type/string/">string</a> key:<a href="/type/string/">string</a> = <a href="/type/phone.GroupCallStreamRtmpUrl/" class="current_page_link">phone.GroupCallStreamRtmpUrl</a>;

---functions---

<a href="/method/phone.getGroupCallStreamRtmpUrl/">phone.getGroupCallStreamRtmpUrl</a>#5af4c73a flags:<a href="/type/%23/">#</a> live_story:flags.0?true peer:<a href="/type/InputPeer/">InputPeer</a> revoke:<a href="/type/Bool/">Bool</a> = <a href="/type/phone.GroupCallStreamRtmpUrl/" class="current_page_link">phone.GroupCallStreamRtmpUrl</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStreamRtmpUrl/">phone.groupCallStreamRtmpUrl</a></td><td>Contains the RTMP publishing URL and secret stream key, see <a href="/api/group-calls/#creating-and-publishing-an-rtmp-livestream">creating and publishing an RTMP livestream »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStreamRtmpUrl/">phone.getGroupCallStreamRtmpUrl</a></td><td>Get the RTMP URL and stream key used by the single external streamer that publishes all audio and video for an RTMP-mode video chat, livestream or live story.<br><br>See <a href="/api/group-calls/#creating-and-publishing-an-rtmp-livestream">here »</a> for the full flow.</td></tr></tbody></table>
