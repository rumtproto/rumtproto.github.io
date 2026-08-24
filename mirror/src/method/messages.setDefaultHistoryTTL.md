---
title: "messages.setDefaultHistoryTTL"
original: "https://core.telegram.org/method/messages.setDefaultHistoryTTL"
section: ref
description: "Changes the default value of the Time-To-Live setting, applied to all new chats."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setDefaultHistoryTTL","url":"/method/messages.setDefaultHistoryTTL/"}]
layout: layout.njk
---

# messages.setDefaultHistoryTTL

Changes the default value of the Time-To-Live setting, applied to all new chats.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setDefaultHistoryTTL/" class="current_page_link">messages.setDefaultHistoryTTL</a>#9eb51445 period:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The new default Time-To-Live of all messages sent in new chats, in seconds.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TTL_PERIOD_INVALID</td><td>The specified TTL period is invalid.</td></tr></tbody></table>
