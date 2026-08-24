---
title: "keyboardButtonSwitchInline"
original: "https://core.telegram.org/constructor/keyboardButtonSwitchInline"
section: ref
description: "Button to switch the user to inline mode"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonSwitchInline","url":"/constructor/keyboardButtonSwitchInline/"}]
layout: layout.njk
---

# keyboardButtonSwitchInline

Button to switch the user to inline mode

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must insert the bot's username and `query` into the chat input field, triggering an [inline query](/api/bots/inline/).

If `same_peer` is set, clients use the current chat. Otherwise, clients prompt the user to select a chat, filtered by `peer_types` if specified.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonSwitchInline/" class="current_page_link">keyboardButtonSwitchInline</a>#991399fc flags:<a href="/type/%23/">#</a> same_peer:flags.0?true style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> query:<a href="/type/string/">string</a> peer_types:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a>&gt; = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>same_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, pressing the button will insert the bot's username and the specified inline <code>query</code> in the current chat's input field.</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button label</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The inline query to use</td></tr><tr><td><strong>peer_types</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InlineQueryPeerType/">InlineQueryPeerType</a>&gt;</td><td>Filter to use when selecting chats.</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard

#### [Inline queries](/api/bots/inline/)

Users can interact with your bot via inline queries, straight from the text input field in any chat.
