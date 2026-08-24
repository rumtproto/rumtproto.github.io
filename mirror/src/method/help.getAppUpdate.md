---
title: "help.getAppUpdate"
original: "https://core.telegram.org/method/help.getAppUpdate"
section: ref
description: "Returns information on update availability for the current application."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getAppUpdate","url":"/method/help.getAppUpdate/"}]
layout: layout.njk
---

# help.getAppUpdate

Returns information on update availability for the current application.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.appUpdate/">help.appUpdate</a>#ccbbce30 flags:<a href="/type/%23/">#</a> can_not_skip:flags.0?true id:<a href="/type/int/">int</a> version:<a href="/type/string/">string</a> text:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; document:flags.1?<a href="/type/Document/">Document</a> url:flags.2?<a href="/type/string/">string</a> sticker:flags.3?<a href="/type/Document/">Document</a> = <a href="/type/help.AppUpdate/">help.AppUpdate</a>;
<a href="/constructor/help.noAppUpdate/">help.noAppUpdate</a>#c45a6536 = <a href="/type/help.AppUpdate/">help.AppUpdate</a>;
---functions---
<a href="/method/help.getAppUpdate/" class="current_page_link">help.getAppUpdate</a>#522d5a7d source:<a href="/type/string/">string</a> = <a href="/type/help.AppUpdate/">help.AppUpdate</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>source</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Source</td></tr></tbody></table>

### Result

[help.AppUpdate](/type/help.AppUpdate/)

### Only users can use this method
