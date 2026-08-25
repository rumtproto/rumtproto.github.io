---
title: "inputKeyboardButtonRequestPeer"
original: "https://core.telegram.org/constructor/inputKeyboardButtonRequestPeer"
section: ref
description: "Prompts the user to select and share one or more peers with the bot using messages.sendBotRequestedPeer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputKeyboardButtonRequestPeer","url":"/constructor/inputKeyboardButtonRequestPeer/"}]
layout: layout.njk
---

# inputKeyboardButtonRequestPeer

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Use this constructor to send a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button in a [reply keyboard](/bots/features/#keyboards) in a private chat.

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputKeyboardButtonRequestPeer/" class="current_page_link">inputKeyboardButtonRequestPeer</a>#2b78156 flags:<a href="/type/%23/">#</a> name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> button_id:<a href="/type/int/">int</a> peer_type:<a href="/type/RequestPeerType/">RequestPeerType</a> max_quantity:<a href="/type/int/">int</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>name_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag to request the peer's name.</td></tr><tr><td><strong>username_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Set this flag to request the peer's <code>@username</code> (if any).</td></tr><tr><td><strong>photo_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Set this flag to request the peer's photo (if any).</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Button ID, to be passed to <a href="/method/messages.sendBotRequestedPeer/">messages.sendBotRequestedPeer</a>.</td></tr><tr><td><strong>peer_type</strong></td><td style="text-align: center;"><a href="/type/RequestPeerType/">RequestPeerType</a></td><td>Filtering criteria to use for the peer selection list shown to the user.<br>The list should display all existing peers of the specified type, and should also offer an option for the user to create and immediately use one or more (up to <code>max_quantity</code>) peers of the specified type, if needed.</td></tr><tr><td><strong>max_quantity</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of peers that can be chosen.</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) button.

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Prompts the user to select and share one or more peers with the bot using [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).

See [peer requests](/api/bots/buttons/#peer-requests) for the full flow.

#### [Telegram Bot Features](/bots/features/)

This page describes individual bot elements in greater detail. For a general overview of bots, read the introduction to bots first.
