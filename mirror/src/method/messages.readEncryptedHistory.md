---
title: "messages.readEncryptedHistory"
original: "https://core.telegram.org/method/messages.readEncryptedHistory"
section: ref
description: "Marks message history within a secret chat as read."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.readEncryptedHistory","url":"/method/messages.readEncryptedHistory/"}]
layout: layout.njk
---

# messages.readEncryptedHistory

Marks message history within a secret chat as read.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.readEncryptedHistory/" class="current_page_link">messages.readEncryptedHistory</a>#7f4b690a peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> max_date:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat/">InputEncryptedChat</a></td><td>Secret chat ID</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum date value for received messages in history</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>MAX_DATE_INVALID</td><td>The specified maximum date is invalid.</td></tr><tr><td>400</td><td>MSG_WAIT_FAILED</td><td>A waiting call returned an error.</td></tr></tbody></table>
