---
title: "stickers.checkShortName"
original: "https://core.telegram.org/method/stickers.checkShortName"
section: ref
description: "Check whether the given short name is available"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.checkShortName","url":"/method/stickers.checkShortName/"}]
layout: layout.njk
---

# stickers.checkShortName

Check whether the given short name is available

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/stickers.checkShortName/" class="current_page_link">stickers.checkShortName</a>#284b3639 short_name:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SHORT_NAME_INVALID</td><td>The specified short name is invalid.</td></tr><tr><td>400</td><td>SHORT_NAME_OCCUPIED</td><td>The specified short name is already in use.</td></tr></tbody></table>
