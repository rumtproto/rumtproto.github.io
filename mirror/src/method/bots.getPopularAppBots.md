---
title: "bots.getPopularAppBots"
original: "https://core.telegram.org/method/bots.getPopularAppBots"
section: ref
description: "Fetch popular Main Mini Apps, to be used in the apps tab of global search »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getPopularAppBots","url":"/method/bots.getPopularAppBots/"}]
layout: layout.njk
---

# bots.getPopularAppBots

Fetch popular [Main Mini Apps](/api/bots/webapps/#main-mini-apps), to be used in the [apps tab of global search »](/api/search/#apps-tab).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.popularAppBots/">bots.popularAppBots</a>#1991b13b flags:<a href="/type/%23/">#</a> next_offset:flags.0?<a href="/type/string/">string</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/bots.PopularAppBots/">bots.PopularAppBots</a>;
---functions---
<a href="/method/bots.getPopularAppBots/" class="current_page_link">bots.getPopularAppBots</a>#c2510192 offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> = <a href="/type/bots.PopularAppBots/">bots.PopularAppBots</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for <a href="/api/offsets/">pagination</a>, initially an empty string, then re-use the <code>next_offset</code> returned by the previous query.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[bots.PopularAppBots](/type/bots.PopularAppBots/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.
