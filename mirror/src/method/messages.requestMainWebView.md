---
title: "messages.requestMainWebView"
original: "https://core.telegram.org/method/messages.requestMainWebView"
section: ref
description: "Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.requestMainWebView","url":"/method/messages.requestMainWebView/"}]
layout: layout.njk
---

# messages.requestMainWebView

Open a [Main Mini App](/api/bots/webapps/#main-mini-apps).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewResultUrl/">webViewResultUrl</a>#4d22ff98 flags:<a href="/type/%23/">#</a> fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;
---functions---
<a href="/method/messages.requestMainWebView/" class="current_page_link">messages.requestMainWebView</a>#c9e01e7b flags:<a href="/type/%23/">#</a> compact:flags.7?true fullscreen:flags.8?true peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> start_param:flags.1?<a href="/type/string/">string</a> theme_params:flags.0?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>If set, requests to open the mini app in compact mode (as opposed to normal or fullscreen mode). Must be set if the <code>mode</code> parameter of the <a href="/api/links/#main-mini-app-links">Main Mini App link</a> is equal to <code>compact</code>.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>If set, requests to open the mini app in fullscreen mode (as opposed to compact or normal mode). Must be set if the <code>mode</code> parameter of the <a href="/api/links/#main-mini-app-links">Main Mini App link</a> is equal to <code>fullscreen</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Currently open chat, may be <a href="/constructor/inputPeerEmpty/">inputPeerEmpty</a> if no chat is currently open.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Bot that owns the main mini app.</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Start parameter, if opening from a <a href="/api/links/#main-mini-app-links">Main Mini App link »</a>.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/DataJSON/">DataJSON</a></td><td><a href="/api/bots/webapps/#theme-parameters">Theme parameters »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name of the application; 0-64 English letters, digits, and underscores</td></tr></tbody></table>

### Result

[WebViewResult](/type/WebViewResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

An empty constructor, no user or chat is defined.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
