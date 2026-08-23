---
title: "keyboardButtonUserProfile (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonUserProfile"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonUserProfile

*Конструктор из схемы TL.*

> Button that links directly to a user profile
> Available only in [inline keyboards](/constructor/replyInlineMarkup/).
> When pressed, clients must open the profile of the user identified by `user_id`.

## Определение TL

```
keyboardButtonUserProfile#c0fd5d09 flags:# style:flags.10?KeyboardButtonStyle text:string user_id:long = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button text |
| user_id | [long](/type/long/) | User ID |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard
