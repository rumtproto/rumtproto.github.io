---
title: "messages.requestSimpleWebView"
original: "https://core.telegram.org/method/messages.requestSimpleWebView"
section: ref
description: "Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.requestSimpleWebView","url":"/method/messages.requestSimpleWebView/"}]
layout: layout.njk
---

# messages.requestSimpleWebView

Open a [bot mini app](/api/bots/webapps/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewResultUrl/">webViewResultUrl</a>#4d22ff98 flags:<a href="/type/%23/">#</a> fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;
---functions---
<a href="/method/messages.requestSimpleWebView/" class="current_page_link">messages.requestSimpleWebView</a>#413a3e73 flags:<a href="/type/%23/">#</a> from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:<a href="/type/InputUser/">InputUser</a> url:flags.3?<a href="/type/string/">string</a> start_param:flags.4?<a href="/type/string/">string</a> theme_params:flags.0?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>from_switch_webview</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the webapp was opened by clicking on the <code>switch_webview</code> button shown on top of the inline results list returned by <a href="/method/messages.getInlineBotResults/">messages.getInlineBotResults</a>.</td></tr><tr><td><strong>from_side_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Set this flag if opening the Mini App from the installed <a href="/api/bots/attach/">side menu entry »</a>.</td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Deprecated.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>Requests to open the app in fullscreen mode.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Bot that owns the mini app</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Web app URL, if opening from a keyboard button or inline result</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>Deprecated.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/DataJSON/">DataJSON</a></td><td><a href="/api/bots/webapps/#theme-parameters">Theme parameters »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name of the application; 0-64 English letters, digits, and underscores</td></tr></tbody></table>

### Result

[WebViewResult](/type/WebViewResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Invalid URL provided.</td></tr></tbody></table>

### Related pages

#### [messages.getInlineBotResults](/method/messages.getInlineBotResults/)

Query an inline bot

#### [Bot attachment menu and side menu entries](/api/bots/attach/)

Bots can install attachment menu and side menu entries, offering conveniently accessible, versatile web apps.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
