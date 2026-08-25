---
title: "messages.sendWebViewResultMessage"
original: "https://core.telegram.org/method/messages.sendWebViewResultMessage"
section: ref
description: "Terminate webview interaction started with messages.requestWebView, sending the specified message to the chat on behalf of the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendWebViewResultMessage","url":"/method/messages.sendWebViewResultMessage/"}]
layout: layout.njk
---

# messages.sendWebViewResultMessage

Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewMessageSent/">webViewMessageSent</a>#c94511c flags:<a href="/type/%23/">#</a> msg_id:flags.0?<a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a> = <a href="/type/WebViewMessageSent/">WebViewMessageSent</a>;
---functions---
<a href="/method/messages.sendWebViewResultMessage/" class="current_page_link">messages.sendWebViewResultMessage</a>#a4314f5 bot_query_id:<a href="/type/string/">string</a> result:<a href="/type/InputBotInlineResult/">InputBotInlineResult</a> = <a href="/type/WebViewMessageSent/">WebViewMessageSent</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot_query_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Webview interaction ID obtained from <a href="/method/messages.requestWebView/">messages.requestWebView</a></td></tr><tr><td><strong>result</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineResult/">InputBotInlineResult</a></td><td>Message to send</td></tr></tbody></table>

### Result

[WebViewMessageSent](/type/WebViewMessageSent/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>QUERY_ID_INVALID</td><td>The query ID is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [messages.requestWebView](/method/messages.requestWebView/)

Open a [bot mini app](/bots/webapps/), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.
