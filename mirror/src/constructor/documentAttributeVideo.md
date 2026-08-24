---
title: "documentAttributeVideo"
original: "https://core.telegram.org/constructor/documentAttributeVideo"
section: ref
description: "Telegram users and channels can easily post and view stories through the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"documentAttributeVideo","url":"/constructor/documentAttributeVideo/"}]
layout: layout.njk
---

# documentAttributeVideo

Defines a video

#### [End-to-end schema](/schema/end-to-end/)

```
===23===
documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute;

===66===
documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentAttributeVideo/" class="current_page_link">documentAttributeVideo</a>#43c57c48 flags:<a href="/type/%23/">#</a> round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:<a href="/type/double/">double</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> preload_prefix_size:flags.2?<a href="/type/int/">int</a> video_start_ts:flags.4?<a href="/type/double/">double</a> video_codec:flags.5?<a href="/type/string/">string</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>round_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether this is a round video</td></tr><tr><td><strong>supports_streaming</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the video supports streaming</td></tr><tr><td><strong>nosound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the specified document is a video file with no audio tracks</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Duration in seconds</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Video width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Video height</td></tr><tr><td><strong>preload_prefix_size</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Number of bytes to preload when preloading videos (particularly <a href="/api/stories/">video stories</a>).</td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/double/">double</a></td><td>Floating point UNIX timestamp in seconds, indicating the frame of the video that should be used as static preview and thumbnail.</td></tr><tr><td><strong>video_codec</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/string/">string</a></td><td>Codec used for the video, i.e. "h264", "h265", or "av1"</td></tr></tbody></table>

### Type

[DocumentAttribute](/type/DocumentAttribute/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
