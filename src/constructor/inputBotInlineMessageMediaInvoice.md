---
title: "inputBotInlineMessageMediaInvoice (конструктор)"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaInvoice"
section: ref
kind: constructor
layout: layout.njk
---

# inputBotInlineMessageMediaInvoice

*Конструктор из схемы TL.*

> An invoice

## Определение TL

```
inputBotInlineMessageMediaInvoice#d7e78225 flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:string provider_data:DataJSON reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title | [string](/type/string/) | Product name, 1-32 characters |
| description | [string](/type/string/) | Product description, 1-255 characters |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputWebDocument](/type/InputWebDocument/) | Invoice photo |
| invoice | [Invoice](/type/Invoice/) | The invoice |
| payload | [bytes](/type/bytes/) | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. |
| provider | [string](/type/string/) | Payments provider token, obtained via [Botfather](https://t.me/botfather) |
| provider_data | [DataJSON](/type/DataJSON/) | A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider. |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Inline keyboard |

## Тип

[InputBotInlineMessage](/type/InputBotInlineMessage/)
