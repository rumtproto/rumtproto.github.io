---
title: "stats.loadAsyncGraph"
original: "https://core.telegram.org/method/stats.loadAsyncGraph"
section: ref
description: "Load channel statistics graph asynchronously"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.loadAsyncGraph","url":"/method/stats.loadAsyncGraph/"}]
layout: layout.njk
---

# stats.loadAsyncGraph

Load [channel statistics graph](/api/stats/) asynchronously

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/statsGraphAsync/">statsGraphAsync</a>#4a27eb2d token:<a href="/type/string/">string</a> = <a href="/type/StatsGraph/">StatsGraph</a>;
<a href="/constructor/statsGraphError/">statsGraphError</a>#bedc9822 error:<a href="/type/string/">string</a> = <a href="/type/StatsGraph/">StatsGraph</a>;
<a href="/constructor/statsGraph/">statsGraph</a>#8ea464b6 flags:<a href="/type/%23/">#</a> json:<a href="/type/DataJSON/">DataJSON</a> zoom_token:flags.0?<a href="/type/string/">string</a> = <a href="/type/StatsGraph/">StatsGraph</a>;
---functions---
<a href="/method/stats.loadAsyncGraph/" class="current_page_link">stats.loadAsyncGraph</a>#621d5fa0 flags:<a href="/type/%23/">#</a> token:<a href="/type/string/">string</a> x:flags.0?<a href="/type/long/">long</a> = <a href="/type/StatsGraph/">StatsGraph</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Graph token from <a href="/constructor/statsGraphAsync/">statsGraphAsync</a> constructor</td></tr><tr><td><strong>x</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>Zoom value, if required</td></tr></tbody></table>

### Result

[StatsGraph](/type/StatsGraph/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>GRAPH_EXPIRED_RELOAD</td><td>This graph has expired, please obtain a new graph token.</td></tr><tr><td>400</td><td>GRAPH_INVALID_RELOAD</td><td>Invalid graph token provided, please reload the stats and provide the updated token.</td></tr><tr><td>400</td><td>GRAPH_OUTDATED_RELOAD</td><td>The graph is outdated, please get a new async token using stats.getBroadcastStats.</td></tr></tbody></table>

### Related pages

#### [statsGraphAsync](/constructor/statsGraphAsync/)

This [channel statistics graph](/api/stats/) must be generated asynchronously using [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) to reduce server load

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
