---
title: "botInlineMessageMediaContact (конструктор)"
original: "https://core.telegram.org/constructor/botInlineMessageMediaContact"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineMessageMediaContact

*Конструктор из схемы TL.*

> Send a contact

## Определение TL

```
botInlineMessageMediaContact#18d1cdc2 flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| phone_number | [string](/type/string/) | Phone number |
| first_name | [string](/type/string/) | First name |
| last_name | [string](/type/string/) | Last name |
| vcard | [string](/type/string/) | VCard info |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Inline keyboard |

## Тип

[BotInlineMessage](/type/BotInlineMessage/)
