---
title: "messages.prolongWebView"
original: "https://core.telegram.org/method/messages.prolongWebView"
section: ref
description: "Indicate to the server (from the user side) that the user is still using a web app."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.prolongWebView","url":"/method/messages.prolongWebView/"}]
layout: layout.njk
---

# messages.prolongWebView

Indicate to the server (from the user side) that the user is still using a web app.

If the method returns a `QUERY_ID_INVALID` error, the webview must be closed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.prolongWebView/" class="current_page_link">messages.prolongWebView</a>#b0d81a83 flags:<a href="/type/%23/">#</a> silent:flags.5?true peer:<a href="/type/InputPeer/">InputPeer</a> bot:<a href="/type/InputUser/">InputUser</a> query_id:<a href="/type/long/">long</a> reply_to:flags.0?<a href="/type/InputReplyTo/">InputReplyTo</a> send_as:flags.13?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is <a href="/method/messages.sendWebViewResultMessage/">terminated</a> should be sent silently (no notifications for the receivers).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Dialog where the web app was opened.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Bot that owns the <a href="/api/bots/webapps/">web app</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Web app interaction ID obtained from <a href="/method/messages.requestWebView/">messages.requestWebView</a></td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo/">InputReplyTo</a></td><td>If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is <a href="/method/messages.sendWebViewResultMessage/">terminated</a> should be sent in reply to the specified message or story.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/InputPeer/">InputPeer</a></td><td>Open the web app as the specified peer</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Terminate webview interaction started with [messages.requestWebView](/method/messages.requestWebView/), sending the specified message to the chat on behalf of the user.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [messages.requestWebView](/method/messages.requestWebView/)

Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation.

After calling this method, until the user closes the webview, [messages.prolongWebView](/method/messages.prolongWebView/) must be called every 60 seconds.
