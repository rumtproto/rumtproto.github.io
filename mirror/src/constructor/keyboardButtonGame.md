---
title: "keyboardButtonGame"
original: "https://core.telegram.org/constructor/keyboardButtonGame"
section: ref
description: "Available only in inline keyboards."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonGame","url":"/constructor/keyboardButtonGame/"}]
layout: layout.njk
---

# keyboardButtonGame

Button to start a game

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must open the [game](/constructor/game/) from the attached [messageMediaGame](/constructor/messageMediaGame/) constructor by invoking [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/) with the `game` flag set, as described in [Starting a game](/api/bots/games/#starting-a-game).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonGame/" class="current_page_link">keyboardButtonGame</a>#89c590f9 flags:<a href="/type/%23/">#</a> style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard

#### [game](/constructor/game/)

Indicates an already sent game

#### [messageMediaGame](/constructor/messageMediaGame/)

Telegram game

#### [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/)

Press an inline callback button and get a callback answer from the bot

#### [HTML5 games](/api/bots/games/)

Bots can offer users HTML5 games to play solo or to compete against each other in groups and one-on-one chats.
