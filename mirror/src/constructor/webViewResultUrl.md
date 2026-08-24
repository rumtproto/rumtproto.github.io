---
title: "webViewResultUrl"
original: "https://core.telegram.org/constructor/webViewResultUrl"
section: ref
description: "Contains the webview URL with appropriate theme and user info parameters added"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webViewResultUrl","url":"/constructor/webViewResultUrl/"}]
layout: layout.njk
---

# webViewResultUrl

Contains the webview URL with appropriate theme and user info parameters added

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewResultUrl/" class="current_page_link">webViewResultUrl</a>#4d22ff98 flags:<a href="/type/%23/">#</a> fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>fullsize</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the app must be opened in fullsize mode instead of compact mode.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, the app must be opened in fullscreen</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>Webview session ID (only returned by <a href="/api/bots/webapps/#inline-button-mini-apps">inline button mini apps</a>, <a href="/api/bots/webapps/#menu-button-mini-apps">menu button mini apps</a>, <a href="/api/bots/webapps/#attachment-menu-mini-apps">attachment menu mini apps</a>).</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Webview URL to open</td></tr></tbody></table>

### Type

[WebViewResult](/type/WebViewResult/)

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
