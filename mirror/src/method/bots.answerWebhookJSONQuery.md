---
title: "bots.answerWebhookJSONQuery"
original: "https://core.telegram.org/method/bots.answerWebhookJSONQuery"
section: ref
description: "Answers a custom query; for bots only"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.answerWebhookJSONQuery","url":"/method/bots.answerWebhookJSONQuery/"}]
layout: layout.njk
---

# bots.answerWebhookJSONQuery

Answers a custom query; for bots only

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/bots.answerWebhookJSONQuery/" class="current_page_link">bots.answerWebhookJSONQuery</a>#e6213f4d query_id:<a href="/type/long/">long</a> data:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Identifier of a custom query</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/DataJSON/">DataJSON</a></td><td>JSON-serialized answer to the query</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>DATA_JSON_INVALID</td><td>The provided JSON data is invalid.</td></tr><tr><td>400</td><td>QUERY_ID_INVALID</td><td>The query ID is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
