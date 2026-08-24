---
title: "bots.requestWebViewButton"
original: "https://core.telegram.org/method/bots.requestWebViewButton"
section: ref
description: "Bots may use this method to prepare a peer request button for a Mini App, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.requestWebViewButton","url":"/method/bots.requestWebViewButton/"}]
layout: layout.njk
---

# bots.requestWebViewButton

Bots may use this method to prepare a peer request button for a [Mini App](/api/bots/webapps/), see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Method schema is available as of layer 224. <a href="https://core.telegram.org/method/bots.requestWebViewButton?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user that will use the prepared button in the Mini App</td></tr><tr><td><strong>button</strong></td><td style="text-align: center;"><a href="/type/KeyboardButton/">KeyboardButton</a></td><td>The button to prepare, an <a href="/constructor/inputKeyboardButtonRequestPeer/">inputKeyboardButtonRequestPeer</a> of any <a href="/type/RequestPeerType/">RequestPeerType</a></td></tr></tbody></table>

### Result

[bots.RequestedButton](/type/bots.RequestedButton/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUTTON_INVALID</td><td>The specified button is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>

### Related pages

#### [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Use this constructor to send a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button in a [reply keyboard](https://core.telegram.org/bots/features#keyboards) in a private chat.

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.

#### [RequestPeerType](/type/RequestPeerType/)

Filtering criteria to use for the peer selection list shown to the user.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
