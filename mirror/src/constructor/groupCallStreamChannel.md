---
title: "groupCallStreamChannel"
original: "https://core.telegram.org/constructor/groupCallStreamChannel"
section: ref
description: "Describes an available RTMP stream channel and its current playback timestamp, see playing an RTMP livestream »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"groupCallStreamChannel","url":"/constructor/groupCallStreamChannel/"}]
layout: layout.njk
---

# groupCallStreamChannel

Describes an available RTMP stream channel and its current playback timestamp, see [playing an RTMP livestream »](/api/group-calls/#rtmp-mode).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/groupCallStreamChannel/" class="current_page_link">groupCallStreamChannel</a>#80eb48af channel:<a href="/type/int/">int</a> scale:<a href="/type/int/">int</a> last_timestamp_ms:<a href="/type/long/">long</a> = <a href="/type/GroupCallStreamChannel/">GroupCallStreamChannel</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Stream channel ID, used as a source of the synthetic <code>unified</code> video source group and as <a href="/constructor/inputGroupCallStream/">inputGroupCallStream</a>.<code>video_channel</code> when fetching the corresponding video segment</td></tr><tr><td><strong>scale</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><strong>Deprecated</strong>, <a href="/api/group-calls/#rtmp-mode">ignored by clients »</a>: use the media segment duration hardcoded in clients (1000 milliseconds, i.e. <code>scale = 0</code>) instead.<br>Historically, it specified the duration of the media segment to fetch, obtained in milliseconds by bitshifting <code>1000</code> to the right <code>scale</code> times: <code>duration_ms := 1000 &gt;&gt; scale</code>.</td></tr><tr><td><strong>last_timestamp_ms</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Last seen timestamp to easily start fetching livestream chunks using <a href="/constructor/inputGroupCallStream/">inputGroupCallStream</a></td></tr></tbody></table>

### Type

[GroupCallStreamChannel](/type/GroupCallStreamChannel/)

### Related pages

#### [inputGroupCallStream](/constructor/inputGroupCallStream/)

Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see [playing an RTMP livestream »](/api/group-calls/#downloading-media-chunks).

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
