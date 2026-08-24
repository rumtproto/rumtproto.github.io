---
title: "updateWebViewResultSent"
original: "https://core.telegram.org/constructor/updateWebViewResultSent"
section: ref
description: "Indicates to a bot that a webview was closed and an inline message was sent on behalf of the user using messages.sendWebViewResultMessage"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateWebViewResultSent","url":"/constructor/updateWebViewResultSent/"}]
layout: layout.njk
---

# updateWebViewResultSent

Indicates to a bot that a webview was closed and an inline message was sent on behalf of the user using [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateWebViewResultSent/" class="current_page_link">updateWebViewResultSent</a>#1592b79d query_id:<a href="/type/long/">long</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Web app interaction ID</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.
