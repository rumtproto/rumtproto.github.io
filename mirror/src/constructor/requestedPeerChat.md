---
title: "requestedPeerChat"
original: "https://core.telegram.org/constructor/requestedPeerChat"
section: ref
description: "Info about a chat, shared by a user with the currently logged in bot using messages.sendBotRequestedPeer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"requestedPeerChat","url":"/constructor/requestedPeerChat/"}]
layout: layout.njk
---

# requestedPeerChat

Info about a [chat](/api/channel/), shared by a user with the currently logged in bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

All fields except the ID are optional, and will be populated if present on the chosen chat, according to the parameters of the requesting [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/requestedPeerChat/" class="current_page_link">requestedPeerChat</a>#7307544f flags:<a href="/type/%23/">#</a> chat_id:<a href="/type/long/">long</a> title:flags.0?<a href="/type/string/">string</a> photo:flags.2?<a href="/type/Photo/">Photo</a> = <a href="/type/RequestedPeer/">RequestedPeer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Chat ID.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Chat title.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Photo/">Photo</a></td><td>Chat photo.</td></tr></tbody></table>

### Type

[RequestedPeer](/type/RequestedPeer/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

#### [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Use this constructor to send a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button in a [reply keyboard](https://core.telegram.org/bots/features#keyboards) in a private chat.

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.
