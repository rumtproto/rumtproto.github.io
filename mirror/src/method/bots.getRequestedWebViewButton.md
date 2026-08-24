---
title: "bots.getRequestedWebViewButton"
original: "https://core.telegram.org/method/bots.getRequestedWebViewButton"
section: ref
description: "Fetch the peer request button a bot prepared for a Mini App with bots.requestWebViewButton, invoked when the Mini App emits a web_app_request_chat event, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getRequestedWebViewButton","url":"/method/bots.getRequestedWebViewButton/"}]
layout: layout.njk
---

# bots.getRequestedWebViewButton

Fetch the peer request button a bot prepared for a [Mini App](/api/bots/webapps/) with [bots.requestWebViewButton](/method/bots.requestWebViewButton/), invoked when the Mini App emits a [`web_app_request_chat`](/api/web-events/#web-app-request-chat) event, see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="https://core.telegram.org/method/bots.getRequestedWebViewButton?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot that owns the Mini App</td></tr><tr><td><strong>webapp_req_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The Mini App request ID, taken from the <a href="/api/web-events/#web-app-request-chat"><code>web_app_request_chat</code></a> event's <code>req_id</code></td></tr></tbody></table>

### Result

[KeyboardButton](/type/KeyboardButton/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_ID_INVALID</td><td>The specified bot ID is invalid.</td></tr><tr><td>400</td><td>WEBAPP_REQ_ID_INVALID</td><td>The specified webapp_req_id is invalid.</td></tr></tbody></table>

### Related pages

#### [Web events](/api/web-events/)

How telegram apps interact with webpages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [bots.requestWebViewButton](/method/bots.requestWebViewButton/)

Bots may use this method to prepare a peer request button for a [Mini App](/api/bots/webapps/), see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
