---
title: "inputGroupCallStream"
original: "https://core.telegram.org/constructor/inputGroupCallStream"
section: ref
description: "Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see playing an RTMP livestream »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputGroupCallStream","url":"/constructor/inputGroupCallStream/"}]
layout: layout.njk
---

# inputGroupCallStream

Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see [playing an RTMP livestream »](/api/group-calls/#downloading-media-chunks).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputGroupCallStream/" class="current_page_link">inputGroupCallStream</a>#598a92a flags:<a href="/type/%23/">#</a> call:<a href="/type/InputGroupCall/">InputGroupCall</a> time_ms:<a href="/type/long/">long</a> scale:<a href="/type/int/">int</a> video_channel:flags.0?<a href="/type/int/">int</a> video_quality:flags.0?<a href="/type/int/">int</a> = <a href="/type/InputFileLocation/">InputFileLocation</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall/">InputGroupCall</a></td><td>RTMP-mode group call</td></tr><tr><td><strong>time_ms</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Timestamp of the chunk to fetch, in milliseconds</td></tr><tr><td><strong>scale</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Specifies the duration of the media segment to fetch in milliseconds, by bitshifting <code>1000</code> to the right <code>scale</code> times: <code>duration_ms := 1000 &gt;&gt; scale</code></td></tr><tr><td><strong>video_channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/constructor/groupCallStreamChannel/">groupCallStreamChannel</a>.<code>channel</code> value of the video channel to fetch; unified video uses channel <code>1</code>. Omit together with <code>video_quality</code> to fetch audio</td></tr><tr><td><strong>video_quality</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Selected video quality (0 = lowest, 1 = medium, 2 = best)</td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)

### Related pages

#### [groupCallStreamChannel](/constructor/groupCallStreamChannel/)

Describes an available RTMP stream channel and its current playback timestamp, see [playing an RTMP livestream »](/api/group-calls/#rtmp-mode).

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
