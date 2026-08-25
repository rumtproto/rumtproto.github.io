---
title: "messageActionManagedBotCreated"
original: "https://core.telegram.org/constructor/messageActionManagedBotCreated"
section: ref
description: "Service message sent by a user to a manager bot when a new managed bot » is created through it, by invoking messages.sendBotRequestedPeer with a requestPeerTypeCreateBot, see here…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionManagedBotCreated","url":"/constructor/messageActionManagedBotCreated/"}]
layout: layout.njk
---

# messageActionManagedBotCreated

Service message sent by a user to a manager bot when a new [managed bot »](/api/bots/managed-bots/) is created through it, by invoking [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) with a [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/), see [here »](/api/bots/buttons/#requesting-a-managed-bot) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="/constructor/messageActionManagedBotCreated/">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the newly created managed bot</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

#### [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/)

Used in a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) by a [manager bot](/api/bots/managed-bots/) to ask a user to create a new [managed bot »](/api/bots/managed-bots/), see [here »](/api/bots/buttons/#requesting-a-managed-bot) for more info.

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
