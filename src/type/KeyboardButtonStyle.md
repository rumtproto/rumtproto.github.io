---
title: "KeyboardButtonStyle (тип)"
original: "https://core.telegram.org/type/KeyboardButtonStyle"
section: ref
kind: type
layout: layout.njk
---

# KeyboardButtonStyle

*Тип из схемы TL.*

> This constructor allows setting a custom background color and custom emoji label for a button, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info.

## Определение TL

```
keyboardButtonStyle#4fdd3430 flags:# bg_primary:flags.0?true bg_danger:flags.1?true bg_success:flags.2?true icon:flags.3?long = KeyboardButtonStyle;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [keyboardButtonStyle](/constructor/keyboardButtonStyle/) | This constructor allows setting a custom background color and custom emoji label for a button, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info. |

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.
