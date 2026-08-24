---
title: "messages.receivedQueue"
original: "https://core.telegram.org/method/messages.receivedQueue"
section: ref
description: "Confirms receipt of messages in a secret chat by client, cancels push notifications."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.receivedQueue","url":"/method/messages.receivedQueue/"}]
layout: layout.njk
---

# messages.receivedQueue

Confirms receipt of messages in a secret chat by client, cancels push notifications.  
The method returns a list of **random\_id**s of messages for which push notifications were cancelled.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.receivedQueue/" class="current_page_link">messages.receivedQueue</a>#55a5bb66 max_qts:<a href="/type/int/">int</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>max_qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum qts value available at the client</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[long](/type/long/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MAX_QTS_INVALID</td><td>The specified max_qts is invalid.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>A waiting call returned an error.</td></tr></tbody></table>
