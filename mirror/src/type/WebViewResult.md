---
title: "WebViewResult"
original: "https://core.telegram.org/type/WebViewResult"
section: ref
description: "Contains the webview URL with appropriate theme and user info parameters added"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebViewResult","url":"/type/WebViewResult/"}]
layout: layout.njk
---

# WebViewResult

Contains the webview URL with appropriate theme and user info parameters added

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewResultUrl/">webViewResultUrl</a>#4d22ff98 flags:<a href="/type/%23/">#</a> fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/" class="current_page_link">WebViewResult</a>;

---functions---

<a href="/method/messages.requestWebView/">messages.requestWebView</a>#269dc2c1 flags:<a href="/type/%23/">#</a> from_bot_menu:flags.4?true silent:flags.5?true compact:flags.7?true fullscreen:flags.8?true peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> url:flags.1?<a href="/type/string/">string</a> start_param:flags.3?<a href="/type/string/">string</a> theme_params:flags.2?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> reply_to:flags.0?<a href="/type/InputReplyTo/">InputReplyTo</a> send_as:flags.13?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/WebViewResult/" class="current_page_link">WebViewResult</a>;
<a href="/method/messages.requestSimpleWebView/">messages.requestSimpleWebView</a>#413a3e73 flags:<a href="/type/%23/">#</a> from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:<a href="/type/InputUser/">InputUser</a> url:flags.3?<a href="/type/string/">string</a> start_param:flags.4?<a href="/type/string/">string</a> theme_params:flags.0?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/" class="current_page_link">WebViewResult</a>;
<a href="/method/messages.requestAppWebView/">messages.requestAppWebView</a>#53618bce flags:<a href="/type/%23/">#</a> write_allowed:flags.0?true compact:flags.7?true fullscreen:flags.8?true peer:<a href="/type/InputPeer/">InputPeer</a> app:<a href="/type/InputBotApp/">InputBotApp</a> start_param:flags.1?<a href="/type/string/">string</a> theme_params:flags.2?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/" class="current_page_link">WebViewResult</a>;
<a href="/method/messages.requestMainWebView/">messages.requestMainWebView</a>#c9e01e7b flags:<a href="/type/%23/">#</a> compact:flags.7?true fullscreen:flags.8?true peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> start_param:flags.1?<a href="/type/string/">string</a> theme_params:flags.0?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/" class="current_page_link">WebViewResult</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webViewResultUrl/">webViewResultUrl</a></td><td>Contains the webview URL with appropriate theme and user info parameters added</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.requestWebView/">messages.requestWebView</a></td><td>Open a <a href="/bots/webapps/">bot mini app</a>, sending over user information after user confirmation.<br><br>After calling this method, until the user closes the webview, <a href="/method/messages.prolongWebView/">messages.prolongWebView</a> must be called every 60 seconds.</td></tr><tr><td><a href="/method/messages.requestSimpleWebView/">messages.requestSimpleWebView</a></td><td>Open a <a href="/api/bots/webapps/">bot mini app</a>.</td></tr><tr><td><a href="/method/messages.requestAppWebView/">messages.requestAppWebView</a></td><td>Open a <a href="/bots/webapps/">bot mini app</a> from a <a href="/api/links/#direct-mini-app-links">direct Mini App deep link</a>, sending over user information after user confirmation.<br><br>After calling this method, until the user closes the webview, <a href="/method/messages.prolongWebView/">messages.prolongWebView</a> must be called every 60 seconds.</td></tr><tr><td><a href="/method/messages.requestMainWebView/">messages.requestMainWebView</a></td><td>Open a <a href="/api/bots/webapps/#main-mini-apps">Main Mini App</a>.</td></tr></tbody></table>
