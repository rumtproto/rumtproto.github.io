---
title: "updateGroupCallConnection"
original: "https://core.telegram.org/constructor/updateGroupCallConnection"
section: ref
description: "Connection parameters returned after joining a group call, see presentations » and stream mode »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateGroupCallConnection","url":"/constructor/updateGroupCallConnection/"}]
layout: layout.njk
---

# updateGroupCallConnection

Connection parameters returned after joining a group call, see [presentations »](/api/group-calls/#presentations) and [stream mode »](/api/group-calls/#stream-mode).

If `presentation` is set, the parameters belong to the separate [presentation connection](/api/group-calls/#presentations); otherwise they belong to the main connection.

For a normal WebRTC connection, pass `params` to the local tgcalls group-call engine as its join response payload.

For [stream-mode calls](/api/group-calls/#detecting-stream-mode), where the client plays the call by [downloading media chunks »](/api/group-calls/#downloading-media-chunks) instead of using WebRTC, `params` instead has one of the following shapes:

```
{
  "stream": true
}
```

for a call that entered [stream mode](/api/group-calls/#stream-mode), or

```
{
  "stream": true,
  "rtmp": true
}
```

for an [RTMP-mode call](/api/group-calls/#creating-and-publishing-an-rtmp-livestream).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateGroupCallConnection/" class="current_page_link">updateGroupCallConnection</a>#b783982 flags:<a href="/type/%23/">#</a> presentation:flags.0?true params:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>presentation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether these parameters belong to the separate presentation connection instead of the main connection</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>RTC join response parameters or broadcast-stream metadata, as described above</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
