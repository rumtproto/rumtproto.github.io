---
title: "messages.reportReadMetrics"
original: "https://core.telegram.org/method/messages.reportReadMetrics"
section: ref
description: "Report viewport read metrics for visible messages, indicating how long each message stayed in the chat viewport, see here » for more info on the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportReadMetrics","url":"/method/messages.reportReadMetrics/"}]
layout: layout.njk
---

# messages.reportReadMetrics

Report viewport read metrics for visible messages, indicating how long each message stayed in the chat viewport, see [here »](/api/views/#read-metrics) for more info on the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="/method/messages.reportReadMetrics/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer where the messages are located</td></tr><tr><td><strong>metrics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputMessageReadMetric/">InputMessageReadMetric</a>&gt;</td><td>List of read metrics for individual messages</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Views and read metrics](/api/views/)

Clients should report read state, message views and music listens using a specific set of methods.
