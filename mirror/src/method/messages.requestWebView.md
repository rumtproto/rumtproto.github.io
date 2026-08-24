---
title: "messages.requestWebView"
original: "https://core.telegram.org/method/messages.requestWebView"
section: ref
description: "Open a bot mini app, sending over user information after user confirmation."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.requestWebView","url":"/method/messages.requestWebView/"}]
layout: layout.njk
---

# messages.requestWebView

Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webViewResultUrl/">webViewResultUrl</a>#4d22ff98 flags:<a href="/type/%23/">#</a> fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?<a href="/type/long/">long</a> url:<a href="/type/string/">string</a> = <a href="/type/WebViewResult/">WebViewResult</a>;
---functions---
<a href="/method/messages.requestWebView/" class="current_page_link">messages.requestWebView</a>#269dc2c1 flags:<a href="/type/%23/">#</a> from_bot_menu:flags.4?true silent:flags.5?true compact:flags.7?true fullscreen:flags.8?true peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> url:flags.1?<a href="/type/string/">string</a> start_param:flags.3?<a href="/type/string/">string</a> theme_params:flags.2?<a href="/type/DataJSON/">DataJSON</a> platform:<a href="/type/string/">string</a> reply_to:flags.0?<a href="/type/InputReplyTo/">InputReplyTo</a> send_as:flags.13?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/WebViewResult/">WebViewResult</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>from_bot_menu</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether the webview was opened by clicking on the bot's <a href="/api/bots/menu/">menu button »</a>.</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is <a href="/method/messages.sendWebViewResultMessage/">terminated</a> should be sent silently (no notifications for the receivers).</td></tr><tr><td><strong>compact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>If set, requests to open the mini app in compact mode (as opposed to normal or fullscreen mode). Must be set if the <code>mode</code> parameter of the <a href="/api/links/#bot-attachment-or-side-menu-links">attachment menu deep link</a> is equal to <code>compact</code>.</td></tr><tr><td><strong>fullscreen</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td>If set, requests to open the mini app in fullscreen mode (as opposed to normal or compact mode). Must be set if the <code>mode</code> parameter of the <a href="/api/links/#bot-attachment-or-side-menu-links">attachment menu deep link</a> is equal to <code>fullscreen</code>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Dialog where the web app is being opened, and where the resulting message will be sent (see the <a href="/api/bots/webapps/">docs for more info »</a>).</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Bot that owns the <a href="/api/bots/webapps/">web app</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td><a href="/api/bots/webapps/">Web app URL</a></td></tr><tr><td><strong>start_param</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>If the web app was opened from the attachment menu using a <a href="/api/links/#bot-attachment-or-side-menu-links">attachment menu deep link</a>, <code>start_param</code> should contain the <code>data</code> from the <code>startattach</code> parameter.</td></tr><tr><td><strong>theme_params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/DataJSON/">DataJSON</a></td><td><a href="/api/bots/webapps/#theme-parameters">Theme parameters »</a></td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name of the application; 0-64 English letters, digits, and underscores</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo/">InputReplyTo</a></td><td>If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is <a href="/method/messages.sendWebViewResultMessage/">terminated</a> should be sent in reply to the specified message or story.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/InputPeer/">InputPeer</a></td><td>Open the web app as the specified peer, sending the resulting the message as the specified peer.</td></tr></tbody></table>

### Result

[WebViewResult](/type/WebViewResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>BOT_WEBVIEW_DISABLED</td><td>A webview cannot be opened in the specified conditions: emitted for example if <code>from_bot_menu</code> or <code>url</code> are set and <code>peer</code> is not the chat with the bot.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>403</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>You need a <a href="/api/premium/">Telegram Premium subscription</a> to send a message to this user.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>You can't send messages as the specified peer.</td></tr><tr><td>400</td><td>THEME_PARAMS_INVALID</td><td>The specified <code>theme_params</code> field is invalid.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Invalid URL provided.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>You blocked this user.</td></tr></tbody></table>

### Related pages

#### [Bot menu button](/api/bots/menu/)

Bots can choose the behavior of the menu button shown next to the text input field.

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)

#### [messages.prolongWebView](/method/messages.prolongWebView/)

Indicate to the server (from the user side) that the user is still using a web app.

If the method returns a `QUERY_ID_INVALID` error, the webview must be closed.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
