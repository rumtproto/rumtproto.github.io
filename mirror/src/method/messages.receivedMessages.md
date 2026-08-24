---
title: "messages.receivedMessages"
original: "https://core.telegram.org/method/messages.receivedMessages"
section: ref
description: "Confirms receipt of messages by a client, cancels PUSH-notification sending."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.receivedMessages","url":"/method/messages.receivedMessages/"}]
layout: layout.njk
---

# messages.receivedMessages

Confirms receipt of messages by a client, cancels PUSH-notification sending.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/messages.receivedMessages/" class="current_page_link">messages.receivedMessages</a>#5a954c0 max_id:<a href="/type/int/">int</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ReceivedNotifyMessage/">ReceivedNotifyMessage</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum message ID available in a client.</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[ReceivedNotifyMessage](/type/ReceivedNotifyMessage/)\>

### Only users can use this method
