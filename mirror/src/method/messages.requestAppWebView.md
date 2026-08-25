---
title: "messages.requestAppWebView"
original: "https://core.telegram.org/method/messages.requestAppWebView"
section: ref
description: "Open a bot mini app from a direct Mini App deep link, sending over user information after user confirmation."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.requestAppWebView","url":"/method/messages.requestAppWebView/"}]
layout: layout.njk
---

# messages.requestAppWebView

Open a [bot mini app](/bots/webapps/) from a [direct Mini App deep link](/api/links/#direct-mini-app-links), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewResultUrl/">webViewResultUrl</a>#4d22ff98 flags:<a href="/type/%23/">#</a> fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;
---functions---
<a href="/method/messages.requestAppWebView/" class="current_page_link">messages.requestAppWebView</a>#53618bce flags:<a href="/type/%23/">#</a> write_allowed:flags.0?true compact:flags.7?true fullscreen:flags.8?true peer:<a href="/type/InputPeer/">InputPeer</a> app:<a href="/type/InputBotApp/">InputBotApp</a> start_param:flags.1?<a href="/type/string/">string</a> theme_params:flags.2?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>write_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag if the bot is asking permission to send messages to the user as specified in the <a href="/api/links/#direct-mini-app-links">direct Mini App deep link</a> docs, and the user agreed.</td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>If set, requests to open the mini app in compact mode (as opposed to normal or fullscreen mode). Must be set if the <code>mode</code> parameter of the <a href="/api/links/#direct-mini-app-links">direct Mini App deep link</a> is equal to <code>compact</code>.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>If set, requests to open the mini app in fullscreen mode (as opposed to compact or normal mode). Must be set if the <code>mode</code> parameter of the <a href="/api/links/#direct-mini-app-links">direct Mini App deep link</a> is equal to <code>fullscreen</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>If the client has clicked on the link in a Telegram chat, pass the chat's peer information; otherwise pass the bot's peer information, instead.</td></tr><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/type/InputBotApp/">InputBotApp</a></td><td>The app obtained by invoking <a href="/method/messages.getBotApp/">messages.getBotApp</a> as specified in the <a href="/api/links/#direct-mini-app-links">direct Mini App deep link</a> docs.</td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>If the <code>startapp</code> query string parameter is present in the <a href="/api/links/#direct-mini-app-links">direct Mini App deep link</a>, pass it to <code>start_param</code>.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/DataJSON/">DataJSON</a></td><td><a href="/api/bots/webapps/#theme-parameters">Theme parameters »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name of the application; 0-64 English letters, digits, and underscores</td></tr></tbody></table>

### Result

[WebViewResult](/type/WebViewResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_APP_BOT_INVALID</td><td>The bot_id passed in the inputBotAppShortName constructor is invalid.</td></tr><tr><td>400</td><td>BOT_APP_INVALID</td><td>The specified bot app is invalid.</td></tr><tr><td>400</td><td>BOT_APP_SHORTNAME_INVALID</td><td>The specified bot app short name is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>THEME_PARAMS_INVALID</td><td>The specified <code>theme_params</code> field is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [messages.getBotApp](/method/messages.getBotApp/)

Obtain information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps)

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Telegram Mini Apps](/bots/webapps/)

#### [messages.prolongWebView](/method/messages.prolongWebView/)

Indicate to the server (from the user side) that the user is still using a web app.

If the method returns a `QUERY_ID_INVALID` error, the webview must be closed.
