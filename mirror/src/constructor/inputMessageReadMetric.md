---
title: "inputMessageReadMetric"
original: "https://core.telegram.org/constructor/inputMessageReadMetric"
section: ref
description: "Read metric for a single message exposure, describing how long the message was visible in the chat viewport."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputMessageReadMetric","url":"/constructor/inputMessageReadMetric/"}]
layout: layout.njk
---

# inputMessageReadMetric

Read metric for a single message exposure, describing how long the message was visible in the chat viewport.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/inputMessageReadMetric?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the message</td></tr><tr><td><strong>view_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random non-zero 64-bit ID generated for this exposure</td></tr><tr><td><strong>time_in_view_ms</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total exposure time in milliseconds of at least one pixel of the message, after the 300 ms entry grace period</td></tr><tr><td><strong>active_time_in_view_ms</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Part of <code>time_in_view_ms</code> accumulated while the user is active</td></tr><tr><td><strong>height_to_viewport_ratio_permille</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><code>round(max_message_height * 1000 / max_viewport_height)</code>, may exceed 1000 when the message is taller than the viewport</td></tr><tr><td><strong>seen_range_ratio_permille</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><code>round(max_seen_vertical_range * 1000 / max_message_height)</code>, clamped to the 0–1000 range</td></tr></tbody></table>

### Type

[InputMessageReadMetric](/type/InputMessageReadMetric/)
