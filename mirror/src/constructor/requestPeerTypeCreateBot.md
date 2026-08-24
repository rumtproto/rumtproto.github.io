---
title: "requestPeerTypeCreateBot"
original: "https://core.telegram.org/constructor/requestPeerTypeCreateBot"
section: ref
description: "Used in a keyboardButtonRequestPeer by a manager bot to ask a user to create a new managed bot », see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"requestPeerTypeCreateBot","url":"/constructor/requestPeerTypeCreateBot/"}]
layout: layout.njk
---

# requestPeerTypeCreateBot

Used in a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) by a [manager bot](/api/bots/managed-bots/) to ask a user to create a new [managed bot »](/api/bots/managed-bots/), see [here »](/api/bots/buttons/#requesting-a-managed-bot) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>Constructor schema is available as of layer 224. <a href="https://core.telegram.org/constructor/requestPeerTypeCreateBot?layer=224">Switch »</a></code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot_managed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, requests to create a managed bot; must always be set.</td></tr><tr><td><strong>suggested_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>If set, the name to pre-fill in the managed bot creation flow</td></tr><tr><td><strong>suggested_username</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>If set, the username to pre-fill in the managed bot creation flow</td></tr></tbody></table>

### Type

[RequestPeerType](/type/RequestPeerType/)

### Related pages

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.

#### [Managed bots](/api/bots/managed-bots/)

Users can create **managed** bots (which are controlled by a specific manager bot) directly through the MTProto API, without interacting with [@BotFather](https://t.me/botfather).

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
