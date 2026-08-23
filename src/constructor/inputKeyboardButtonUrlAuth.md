---
title: "inputKeyboardButtonUrlAuth (конструктор)"
original: "https://core.telegram.org/constructor/inputKeyboardButtonUrlAuth"
section: ref
kind: constructor
layout: layout.njk
---

# inputKeyboardButtonUrlAuth

*Конструктор из схемы TL.*

> Button to request a user to [authorize](/method/messages.acceptUrlAuth/) via URL using [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).
> Use this constructor to send a [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).

## Определение TL

```
inputKeyboardButtonUrlAuth#68013e72 flags:# request_write_access:flags.0?true style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.1?string url:string bot:InputUser = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| request_write_access | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag to request the permission for your bot to send messages to the user. |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button text |
| fwd_text | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | New text of the button in forwarded messages. |
| url | [string](/type/string/) | An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in [Receiving authorization data](https://core.telegram.org/widgets/login#receiving-authorization-data). NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization). |
| bot | [InputUser](/type/InputUser/) | Username of a bot, which will be used for user authorization. See [Setting up a bot](https://core.telegram.org/widgets/login#setting-up-a-bot) for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details. |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [Telegram Login Widget](https://core.telegram.org/widgets/login)

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization)

#### [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/)

Button to request a user to authorize via URL using [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). When the user clicks on such a button, [messages.requestUrlAuth](/method/messages.requestUrlAuth/) should be called, providing the `button_id` and the ID of the container message. The returned [urlAuthResultRequest](/constructor/urlAuthResultRequest/) object will contain more details about the authorization request (`request_write_access` if the bot would like to send messages to the user along with the username of the bot which will be used for user authorization). Finally, the user can choose to call [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) to get a [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) with the URL to open instead of the `url` of this constructor, or a [urlAuthResultDefault](/constructor/urlAuthResultDefault/), in which case the `url` of this constructor must be opened, instead. If the user refuses the authorization request but still wants to open the link, the `url` of this constructor must be used.

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

#### [Telegram Bot Features](https://core.telegram.org/bots/features)

This page describes individual bot elements in greater detail. For a general overview of bots, read the introduction to bots first.
