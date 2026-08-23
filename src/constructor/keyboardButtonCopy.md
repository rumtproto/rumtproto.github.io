---
title: "keyboardButtonCopy (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonCopy"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonCopy

*Конструктор из схемы TL.*

> Clipboard button
> Available only in [inline keyboards](/constructor/replyInlineMarkup/).
> When pressed, clients must copy `copy_text` to the clipboard.

## Определение TL

```
keyboardButtonCopy#bcc4af10 flags:# style:flags.10?KeyboardButtonStyle text:string copy_text:string = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Title of the button |
| copy_text | [string](/type/string/) | The text that will be copied to the clipboard |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard
