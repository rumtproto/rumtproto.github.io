---
title: "messages.clearRecentStickers"
original: "https://core.telegram.org/method/messages.clearRecentStickers"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.clearRecentStickers","url":"/method/messages.clearRecentStickers/"}]
layout: layout.njk
---

# messages.clearRecentStickers

Clear recent stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.clearRecentStickers/" class="current_page_link">messages.clearRecentStickers</a>#8999602d flags:<a href="/type/%23/">#</a> attached:flags.0?true = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>attached</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag to clear the list of stickers recently attached to photo or video files</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method
