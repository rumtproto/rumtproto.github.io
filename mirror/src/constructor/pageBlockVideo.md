---
title: "pageBlockVideo"
original: "https://core.telegram.org/constructor/pageBlockVideo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageBlockVideo","url":"/constructor/pageBlockVideo/"}]
layout: layout.njk
---

# pageBlockVideo

Video

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageBlockVideo/" class="current_page_link">pageBlockVideo</a>#7c8fe7b6 flags:<a href="/type/%23/">#</a> autoplay:flags.0?true loop:flags.1?true video_id:<a href="/type/long/">long</a> caption:<a href="/type/PageCaption/">PageCaption</a> = <a href="/type/PageBlock/">PageBlock</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>autoplay</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the video is set to autoplay</td></tr><tr><td><strong>loop</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the video is set to loop</td></tr><tr><td><strong>video_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Video ID</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption/">PageCaption</a></td><td>Caption</td></tr></tbody></table>

### Type

[PageBlock](/type/PageBlock/)
