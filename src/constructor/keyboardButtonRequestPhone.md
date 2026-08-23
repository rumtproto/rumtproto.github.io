---
title: "keyboardButtonRequestPhone (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonRequestPhone"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonRequestPhone

*Конструктор из схемы TL.*

> Button to request a user's phone number
> Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).
> When pressed, clients must request permission from the user to send the current user's contact to the chat, replying to the message that attached the [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/).

## Определение TL

```
keyboardButtonRequestPhone#417efd8f flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button text |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/)

Represents a reply keyboard
