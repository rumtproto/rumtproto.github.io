---
title: "keyboardButtonCallback"
original: "https://core.telegram.org/constructor/keyboardButtonCallback"
section: ref
description: "Available only in inline keyboards."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"keyboardButtonCallback","url":"/constructor/keyboardButtonCallback/"}]
layout: layout.njk
---

# keyboardButtonCallback

Callback button

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients send `data` to the bot, optionally providing the user's [2FA SRP parameters](/api/srp/) for identity verification, as described in [callback queries](/api/bots/buttons/#callback-queries).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/keyboardButtonCallback/" class="current_page_link">keyboardButtonCallback</a>#e62bc960 flags:<a href="/type/%23/">#</a> requires_password:flags.0?true style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> data:<a href="/type/bytes/">bytes</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>requires_password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the user should verify his identity by entering his <a href="/api/srp/">2FA SRP parameters</a> to the <a href="/method/messages.getBotCallbackAnswer/">messages.getBotCallbackAnswer</a> method. NOTE: telegram and the bot WILL NOT have access to the plaintext password, thanks to <a href="/api/srp/">SRP</a>. This button is mainly used by the official <a href="https://t.me/botfather">@botfather</a> bot, for verifying the user's identity before transferring ownership of a bot to another user.</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Callback data</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/)

Press an inline callback button and get a callback answer from the bot

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard
