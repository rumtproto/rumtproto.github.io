---
title: "keyboardButtonUrl (конструктор)"
original: "https://core.telegram.org/constructor/keyboardButtonUrl"
section: ref
kind: constructor
layout: layout.njk
---

# keyboardButtonUrl

*Конструктор из схемы TL.*

> URL button
> Available only in [inline keyboards](/constructor/replyInlineMarkup/).
> When pressed, clients open `url`, showing a confirmation prompt unless the URL is one of the [internal URIs](https://github.com/DrKLO/Telegram/blob/68d51749c4fcbaffa584829f23936565df55e08b/TMessagesProj/src/main/java/org/telegram/messenger/browser/Browser.java#L680).

## Определение TL

```
keyboardButtonUrl#d80c25ec flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| style | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[KeyboardButtonStyle](/type/KeyboardButtonStyle/) | Button style, see [here »](https://core.telegram.org/api/bots/buttons#button-styles) for more info on button styles. |
| text | [string](/type/string/) | Button label |
| url | [string](/type/string/) | URL |

## Тип

[KeyboardButton](/type/KeyboardButton/)

## Related pages

#### [Bot buttons](https://core.telegram.org/api/bots/buttons)

Users can interact with your bot via buttons or even inline buttons, straight from inline messages in any chat.

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Represents an inline keyboard
