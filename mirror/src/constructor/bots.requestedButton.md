---
title: "bots.requestedButton"
original: "https://core.telegram.org/constructor/bots.requestedButton"
section: ref
description: "Contains the request ID a bot should pass to a Mini App after preparing a peer request button with bots.requestWebViewButton, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.requestedButton","url":"/constructor/bots.requestedButton/"}]
layout: layout.njk
---

# bots.requestedButton

Contains the request ID a bot should pass to a [Mini App](/api/bots/webapps/) after preparing a peer request button with [bots.requestWebViewButton](/method/bots.requestWebViewButton/), see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/bots.requestedButton?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>webapp_req_id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Mini App request ID, to be passed by the bot to the Mini App and then back to <a href="/method/bots.getRequestedWebViewButton/">bots.getRequestedWebViewButton</a> and <a href="/method/messages.sendBotRequestedPeer/">messages.sendBotRequestedPeer</a></td></tr></tbody></table>

### Type

[bots.RequestedButton](/type/bots.RequestedButton/)

### Related pages

#### [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/)

Fetch the peer request button a bot prepared for a [Mini App](/api/bots/webapps/) with [bots.requestWebViewButton](/method/bots.requestWebViewButton/), invoked when the Mini App emits a [`web_app_request_chat`](/api/web-events/#web-app-request-chat) event, see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [bots.requestWebViewButton](/method/bots.requestWebViewButton/)

Bots may use this method to prepare a peer request button for a [Mini App](/api/bots/webapps/), see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
