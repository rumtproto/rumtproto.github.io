---
title: "keyboardButtonRequestPoll (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonRequestPoll"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonRequestPoll

*Конструктор из схемы TL.*

> Button to request a poll from the user
> Available only in private chats, in [reply keyboards](/constructor/replyKeyboardMarkup/).
> When pressed, clients prompt the user to create and send a [poll](https://core.telegram.org/api/poll), replying to the message that attached the [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/). If `quiz` is set, the prompt must create a quiz poll.

## Определение TL

```
keyboardButtonRequestPoll#7a11d782 flags:# style:flags.10?KeyboardButtonStyle quiz:flags.0?Bool text:string = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| quiz | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](/type/Bool/) | If set, only quiz polls can be sent |
| text | [string](/type/string/) | Button text |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyKeyboardMarkup](/constructor/replyKeyboardMarkup/)

Represents a reply keyboard

#### [Polls and quizzes](https://core.telegram.org/api/poll)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.
