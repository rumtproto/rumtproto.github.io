---
title: "messages.faveSticker"
original: "https://core.telegram.org/method/messages.faveSticker"
section: ref
description: "Mark or unmark a sticker as favorite"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.faveSticker","url":"/method/messages.faveSticker/"}]
layout: layout.njk
---

# messages.faveSticker

Mark or unmark a sticker as favorite

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.faveSticker/" class="current_page_link">messages.faveSticker</a>#b9ffc55b id:<a href="/type/InputDocument/">InputDocument</a> unfave:<a href="/type/Bool/">Bool</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>Sticker in question</td></tr><tr><td><strong>unfave</strong></td><td style="text-align: center;"><a href="/type/Bool/">Bool</a></td><td>Whether to add or remove a sticker from favorites</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKER_ID_INVALID</td><td>The provided sticker ID is invalid.</td></tr></tbody></table>
