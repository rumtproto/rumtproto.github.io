---
title: "keyboardButtonBuy (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonBuy"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonBuy

*Конструктор из схемы TL.*

> Button to buy a product
> Available only in [inline keyboards](/constructor/replyInlineMarkup/).
> When pressed, clients must start the [payment flow for the attached invoice](https://core.telegram.org/api/payments).

## Определение TL

```
keyboardButtonBuy#3fa53905 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
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

#### [Payments API](https://core.telegram.org/api/payments)

You can accept payments from Telegram users via Telegram Bots.
