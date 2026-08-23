---
title: "keyboardButtonStyle (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonStyle"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonStyle

*Конструктор из схемы TL.*

> This constructor allows setting a custom background color and custom emoji label for a button, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info.

## Определение TL

```
keyboardButtonStyle#4fdd3430 flags:# bg_primary:flags.0?true bg_danger:flags.1?true bg_success:flags.2?true icon:flags.3?long = KeyboardButtonStyle;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bg_primary | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | A dark blue color, recommended for main actions. |
| bg_danger | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | A red color, recommended for destructive actions. |
| bg_success | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | A green color, recommended for positive actions. |
| icon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[long](/type/long/) | The ID of a [custom emoji](https://core.telegram.org/api/custom-emoji) to be displayed before the button's label. |

## Тип

[KeyboardButtonStyle](/type/KeyboardButtonStyle/)

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
