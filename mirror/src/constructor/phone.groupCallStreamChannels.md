---
title: "phone.groupCallStreamChannels"
original: "https://core.telegram.org/constructor/phone.groupCallStreamChannels"
section: ref
description: "Contains the available channels of an RTMP-mode group call, see playing an RTMP livestream »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.groupCallStreamChannels","url":"/constructor/phone.groupCallStreamChannels/"}]
layout: layout.njk
---

# phone.groupCallStreamChannels

Contains the available channels of an RTMP-mode group call, see [playing an RTMP livestream »](/api/group-calls/#rtmp-mode).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.groupCallStreamChannels/" class="current_page_link">phone.groupCallStreamChannels</a>#d0e482b2 channels:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallStreamChannel/">GroupCallStreamChannel</a>&gt; = <a href="/type/phone.GroupCallStreamChannels/">phone.GroupCallStreamChannels</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channels</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/GroupCallStreamChannel/">GroupCallStreamChannel</a>&gt;</td><td>Available RTMP stream channels; may be empty while the external publisher is not sending media</td></tr></tbody></table>

### Type

[phone.GroupCallStreamChannels](/type/phone.GroupCallStreamChannels/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
