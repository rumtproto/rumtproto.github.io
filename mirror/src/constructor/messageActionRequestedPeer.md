---
title: "messageActionRequestedPeer"
original: "https://core.telegram.org/constructor/messageActionRequestedPeer"
section: ref
description: "Contains info about one or more peers that the we (the user) shared with the bot after clicking on a keyboardButtonRequestPeer button (service message sent by the user)."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionRequestedPeer","url":"/constructor/messageActionRequestedPeer/"}]
layout: layout.njk
---

# messageActionRequestedPeer

Contains info about one or more peers that the we (the user) shared with the bot after clicking on a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button (service message sent by the user).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionRequestedPeer/" class="current_page_link">messageActionRequestedPeer</a>#31518e9b button_id:<a href="/type/int/">int</a> peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><code>button_id</code> contained in the <a href="/constructor/keyboardButtonRequestPeer/">keyboardButtonRequestPeer</a></td></tr><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>The shared peers</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.
