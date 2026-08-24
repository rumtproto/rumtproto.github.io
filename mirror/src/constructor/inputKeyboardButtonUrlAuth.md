---
title: "inputKeyboardButtonUrlAuth"
original: "https://core.telegram.org/constructor/inputKeyboardButtonUrlAuth"
section: ref
description: "Button to request a user to authorize via URL using Seamless Telegram Login."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputKeyboardButtonUrlAuth","url":"/constructor/inputKeyboardButtonUrlAuth/"}]
layout: layout.njk
---

# inputKeyboardButtonUrlAuth

Button to request a user to [authorize](/method/messages.acceptUrlAuth/) via URL using [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).

Use this constructor to send a [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputKeyboardButtonUrlAuth/" class="current_page_link">inputKeyboardButtonUrlAuth</a>#68013e72 flags:<a href="/type/%23/">#</a> request_write_access:flags.0?true style:flags.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a> text:<a href="/type/string/">string</a> fwd_text:flags.1?<a href="/type/string/">string</a> url:<a href="/type/string/">string</a> bot:<a href="/type/InputUser/">InputUser</a> = <a href="/type/KeyboardButton/">KeyboardButton</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag to request the permission for your bot to send messages to the user.</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle/">KeyboardButtonStyle</a></td><td>Button style, see <a href="/api/bots/buttons/#button-styles">here »</a> for more info on button styles.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Button text</td></tr><tr><td><strong>fwd_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>New text of the button in forwarded messages.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in <a href="https://core.telegram.org/widgets/login#receiving-authorization-data">Receiving authorization data</a>.<br>NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in <a href="https://core.telegram.org/widgets/login#checking-authorization">Checking authorization</a>.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>Username of a bot, which will be used for user authorization. See <a href="https://core.telegram.org/widgets/login#setting-up-a-bot">Setting up a bot</a> for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See <a href="https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot">Linking your domain to the bot</a> for more details.</td></tr></tbody></table>

### Type

[KeyboardButton](/type/KeyboardButton/)

### Related pages

#### [Bot buttons](/api/bots/buttons/)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](/api/url-authorization/)

#### [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/)

Button to request a user to authorize via URL using [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). When the user clicks on such a button, [messages.requestUrlAuth](/method/messages.requestUrlAuth/) should be called, providing the `button_id` and the ID of the container message. The returned [urlAuthResultRequest](/constructor/urlAuthResultRequest/) object will contain more details about the authorization request (`request_write_access` if the bot would like to send messages to the user along with the username of the bot which will be used for user authorization). Finally, the user can choose to call [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) to get a [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) with the URL to open instead of the `url` of this constructor, or a [urlAuthResultDefault](/constructor/urlAuthResultDefault/), in which case the `url` of this constructor must be opened, instead. If the user refuses the authorization request but still wants to open the link, the `url` of this constructor must be used.

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

#### [Telegram Bot Features](https://core.telegram.org/bots/features)

This page describes individual bot elements in greater detail. For a general overview of bots, read the introduction to bots first.
