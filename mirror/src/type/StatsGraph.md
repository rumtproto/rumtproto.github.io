---
title: "StatsGraph"
original: "https://core.telegram.org/type/StatsGraph"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StatsGraph","url":"/type/StatsGraph/"}]
layout: layout.njk
---

# StatsGraph

Channel statistics graph

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/statsGraphAsync/">statsGraphAsync</a>#4a27eb2d token:<a href="/type/string/">string</a> = <a href="/type/StatsGraph/" class="current_page_link">StatsGraph</a>;
<a href="/constructor/statsGraphError/">statsGraphError</a>#bedc9822 error:<a href="/type/string/">string</a> = <a href="/type/StatsGraph/" class="current_page_link">StatsGraph</a>;
<a href="/constructor/statsGraph/">statsGraph</a>#8ea464b6 flags:<a href="/type/%23/">#</a> json:<a href="/type/DataJSON/">DataJSON</a> zoom_token:flags.0?<a href="/type/string/">string</a> = <a href="/type/StatsGraph/" class="current_page_link">StatsGraph</a>;

---functions---

<a href="/method/stats.loadAsyncGraph/">stats.loadAsyncGraph</a>#621d5fa0 flags:<a href="/type/%23/">#</a> token:<a href="/type/string/">string</a> x:flags.0?<a href="/type/long/">long</a> = <a href="/type/StatsGraph/" class="current_page_link">StatsGraph</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/statsGraphAsync/">statsGraphAsync</a></td><td>This <a href="/api/stats/">channel statistics graph</a> must be generated asynchronously using <a href="/method/stats.loadAsyncGraph/">stats.loadAsyncGraph</a> to reduce server load</td></tr><tr><td><a href="/constructor/statsGraphError/">statsGraphError</a></td><td>An error occurred while generating the <a href="/api/stats/">statistics graph</a></td></tr><tr><td><a href="/constructor/statsGraph/">statsGraph</a></td><td><a href="/api/stats/">Channel statistics graph</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stats.loadAsyncGraph/">stats.loadAsyncGraph</a></td><td>Load <a href="/api/stats/">channel statistics graph</a> asynchronously</td></tr></tbody></table>
