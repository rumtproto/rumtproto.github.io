---
title: "messages.saveRecentSticker"
original: "https://core.telegram.org/method/messages.saveRecentSticker"
section: ref
description: "Add/remove sticker from recent stickers list"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.saveRecentSticker","url":"/method/messages.saveRecentSticker/"}]
layout: layout.njk
---

# messages.saveRecentSticker

Add/remove sticker from recent stickers list

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.saveRecentSticker/" class="current_page_link">messages.saveRecentSticker</a>#392718f8 flags:<a href="/type/%23/">#</a> attached:flags.0?true id:<a href="/type/InputDocument/">InputDocument</a> unsave:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>attached</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to add/remove stickers recently attached to photo or video files</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>Sticker</td></tr><tr><td><strong>unsave</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to save or unsave the sticker</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKER_ID_INVALID</td><td>The provided sticker ID is invalid.</td></tr></tbody></table>
