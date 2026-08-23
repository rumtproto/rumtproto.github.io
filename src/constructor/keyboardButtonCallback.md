---
title: "keyboardButtonCallback (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonCallback"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonCallback

*Конструктор из схемы TL.*

> Callback button
> Available only in [inline keyboards](/constructor/replyInlineMarkup/).
> When pressed, clients send `data` to the bot, optionally providing the user's [2FA SRP parameters](/api/srp/) for identity verification, as described in [callback queries](https://core.telegram.org/api/bots/buttons#callback-queries).

## Определение TL

```
keyboardButtonCallback#e62bc960 flags:# requires_password:flags.0?true style:flags.10?KeyboardButtonStyle text:string data:bytes = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| requires_password | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the user should verify his identity by entering his [2FA SRP parameters](/api/srp/) to the [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/) method. NOTE: telegram and the bot WILL NOT have access to the plaintext password, thanks to [SRP](/api/srp/). This button is mainly used by the official [@botfather](https://t.me/botfather) bot, for verifying the user's identity before transferring ownership of a bot to another user. |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button text |
| data | [bytes](/type/bytes/) | Callback data |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/)

Press an inline callback button and get a callback answer from the bot

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard
