---
title: "WebViewMessageSent"
original: "https://core.telegram.org/type/WebViewMessageSent"
section: ref
description: "Contains information about an inline message sent by a Web App on behalf of a user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebViewMessageSent","url":"/type/WebViewMessageSent/"}]
layout: layout.njk
---

# WebViewMessageSent

Contains information about an inline message sent by a [Web App](/bots/webapps/) on behalf of a user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewMessageSent/">webViewMessageSent</a>#c94511c flags:<a href="/type/%23/">#</a> msg_id:flags.0?<a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a> = <a href="/type/WebViewMessageSent/" class="current_page_link">WebViewMessageSent</a>;

---functions---

<a href="/method/messages.sendWebViewResultMessage/">messages.sendWebViewResultMessage</a>#a4314f5 bot_query_id:<a href="/type/string/">string</a> result:<a href="/type/InputBotInlineResult/">InputBotInlineResult</a> = <a href="/type/WebViewMessageSent/" class="current_page_link">WebViewMessageSent</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webViewMessageSent/">webViewMessageSent</a></td><td>Info about a sent inline webview message</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.sendWebViewResultMessage/">messages.sendWebViewResultMessage</a></td><td>Terminate webview interaction started with <a href="/method/messages.requestWebView/">messages.requestWebView</a>, sending the specified message to the chat on behalf of the user.</td></tr></tbody></table>
