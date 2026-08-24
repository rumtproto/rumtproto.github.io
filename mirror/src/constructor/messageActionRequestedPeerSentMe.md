---
title: "messageActionRequestedPeerSentMe"
original: "https://core.telegram.org/constructor/messageActionRequestedPeerSentMe"
section: ref
description: "Contains info about one or more peers that the a user shared with the me (the bot) after clicking on a keyboardButtonRequestPeer button (service message received by the bot)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionRequestedPeerSentMe","url":"/constructor/messageActionRequestedPeerSentMe/"}]
layout: layout.njk
---

# messageActionRequestedPeerSentMe

Contains info about one or more peers that the a user shared with the me (the bot) after clicking on a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button (service message received by the bot).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionRequestedPeerSentMe/" class="current_page_link">messageActionRequestedPeerSentMe</a>#93b31848 button_id:<a href="/type/int/">int</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RequestedPeer/">RequestedPeer</a>&gt; = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><code>button_id</code> contained in the <a href="/constructor/keyboardButtonRequestPeer/">keyboardButtonRequestPeer</a></td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RequestedPeer/">RequestedPeer</a>&gt;</td><td>Info about the shared peers.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.
