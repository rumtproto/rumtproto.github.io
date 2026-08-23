---
title: "inputKeyboardButtonUserProfile (конструктор)"
original: "https://core.telegram.org/constructor/inputKeyboardButtonUserProfile"
section: ref
kind: constructor
layout: layout.njk
---

# inputKeyboardButtonUserProfile

*Конструктор из схемы TL.*

> Button that links directly to a user profile
> Use this constructor to send a [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).

## Определение TL

```
inputKeyboardButtonUserProfile#7d5e07c7 flags:# style:flags.10?KeyboardButtonStyle text:string user_id:InputUser = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button text |
| user_id | [InputUser](/type/InputUser/) | User ID |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/)

Button that links directly to a user profile

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must open the profile of the user identified by `user_id`.

#### [Telegram Bot Features](https://core.telegram.org/bots/features)

This page describes individual bot elements in greater detail. For a general overview of bots, read the introduction to bots first.
