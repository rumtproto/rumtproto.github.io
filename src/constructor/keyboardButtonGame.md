---
title: "keyboardButtonGame (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonGame"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonGame

*Конструктор из схемы TL.*

> Button to start a game
> Available only in [inline keyboards](/constructor/replyInlineMarkup/).
> When pressed, clients must open the [game](/constructor/game/) from the attached [messageMediaGame](/constructor/messageMediaGame/) constructor by invoking [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/) with the `game` flag set, as described in [Starting a game](https://core.telegram.org/api/bots/games#starting-a-game).

## Определение TL

```
keyboardButtonGame#89c590f9 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
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

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard

#### [game](/constructor/game/)

Indicates an already sent game

#### [messageMediaGame](/constructor/messageMediaGame/)

Telegram game

#### [messages.getBotCallbackAnswer](/method/messages.getBotCallbackAnswer/)

Press an inline callback button and get a callback answer from the bot

#### [HTML5 games](https://core.telegram.org/api/bots/games)

Bots can offer users HTML5 games to play solo or to compete against each other in groups and one-on-one chats.
