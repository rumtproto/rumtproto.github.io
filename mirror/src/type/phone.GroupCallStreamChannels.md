---
title: "phone.GroupCallStreamChannels"
original: "https://core.telegram.org/type/phone.GroupCallStreamChannels"
section: ref
description: "Info about RTMP streams in a group call or livestream"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.GroupCallStreamChannels","url":"/type/phone.GroupCallStreamChannels/"}]
layout: layout.njk
---

# phone.GroupCallStreamChannels

Info about RTMP streams in a group call or livestream

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStreamChannels/">phone.groupCallStreamChannels</a>#d0e482b2 channels:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallStreamChannel/">GroupCallStreamChannel</a>&gt; = <a href="/type/phone.GroupCallStreamChannels/" class="current_page_link">phone.GroupCallStreamChannels</a>;

---functions---

<a href="/method/phone.getGroupCallStreamChannels/">phone.getGroupCallStreamChannels</a>#1ab21940 call:<a href="/type/InputGroupCall/">InputGroupCall</a> = <a href="/type/phone.GroupCallStreamChannels/" class="current_page_link">phone.GroupCallStreamChannels</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStreamChannels/">phone.groupCallStreamChannels</a></td><td>Contains the available channels of an RTMP-mode group call, see <a href="/api/group-calls/#rtmp-mode">playing an RTMP livestream »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStreamChannels/">phone.getGroupCallStreamChannels</a></td><td>Get the available stream channels and current playback timestamp of an RTMP-mode video chat, livestream or live story, see <a href="/api/group-calls/#rtmp-mode">here »</a> for the full flow.<br>The group call must be joined before invoking this method. Send the request to the media DC specified by <a href="/constructor/groupCall/">groupCall</a>.<code>stream_dc_id</code>.</td></tr></tbody></table>
