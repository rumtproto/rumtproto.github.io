---
title: "pageBlockEmbed"
original: "https://core.telegram.org/constructor/pageBlockEmbed"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"pageBlockEmbed","url":"/constructor/pageBlockEmbed/"}]
layout: layout.njk
---

# pageBlockEmbed

An embedded webpage

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/pageBlockEmbed/" class="current_page_link">pageBlockEmbed</a>#a8718dc5 flags:<a href="/type/%23/">#</a> full_width:flags.0?true allow_scrolling:flags.3?true url:flags.1?<a href="/type/string/">string</a> html:flags.2?<a href="/type/string/">string</a> poster_photo_id:flags.4?<a href="/type/long/">long</a> w:flags.5?<a href="/type/int/">int</a> h:flags.5?<a href="/type/int/">int</a> caption:<a href="/type/PageCaption/">PageCaption</a> = <a href="/type/PageBlock/">PageBlock</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>full_width</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the block should be full width</td></tr><tr><td><strong>allow_scrolling</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether scrolling should be allowed</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Web page URL, if available</td></tr><tr><td><strong>html</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>HTML-markup of the embedded page</td></tr><tr><td><strong>poster_photo_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/long/">long</a></td><td>Poster photo, if available</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>Block width, if known</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>Block height, if known</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption/">PageCaption</a></td><td>Caption</td></tr></tbody></table>

### Type

[PageBlock](/type/PageBlock/)
