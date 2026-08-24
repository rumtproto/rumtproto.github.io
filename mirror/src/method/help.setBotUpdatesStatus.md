---
title: "help.setBotUpdatesStatus"
original: "https://core.telegram.org/method/help.setBotUpdatesStatus"
section: ref
description: "Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.setBotUpdatesStatus","url":"/method/help.setBotUpdatesStatus/"}]
layout: layout.njk
---

# help.setBotUpdatesStatus

Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/help.setBotUpdatesStatus/" class="current_page_link">help.setBotUpdatesStatus</a>#ec22cfcd pending_updates_count:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pending_updates_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of pending updates</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Error message, if present</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
