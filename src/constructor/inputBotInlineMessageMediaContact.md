---
title: "inputBotInlineMessageMediaContact (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaContact"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineMessageMediaContact

*Конструктор из схемы TL.*

> A contact

## Определение TL

```
inputBotInlineMessageMediaContact#a6edbffd flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
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

[InputBotInlineMessage](/type/InputBotInlineMessage/)
