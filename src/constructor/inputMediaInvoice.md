---
title: "inputMediaInvoice (конструктор)"
original: "https://core.telegram.org/constructor/inputMediaInvoice"
section: ref
kind: constructor
layout: layout.njk
---

# inputMediaInvoice

*Конструктор из схемы TL.*

> Generated invoice of a [bot payment](https://core.telegram.org/bots/payments)

## Определение TL

```
inputMediaInvoice#405fef0d flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:flags.3?string provider_data:DataJSON start_param:flags.1?string extended_media:flags.2?InputMedia = InputMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| title | [string](/type/string/) | Product name, 1-32 characters |
| description | [string](/type/string/) | Product description, 1-255 characters |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputWebDocument](/type/InputWebDocument/) | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. |
| invoice | [Invoice](/type/Invoice/) | The actual invoice |
| payload | [bytes](/type/bytes/) | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. |
| provider | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | Payments provider token, obtained via [Botfather](https://t.me/botfather) |
| provider_data | [DataJSON](/type/DataJSON/) | JSON-encoded data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
| start_param | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Unique [bot deep links start parameter](https://core.telegram.org/api/links#bot-links). If present, forwarded copies of the sent message will have a URL button with a [deep link](https://core.telegram.org/api/links#bot-links) to the bot (instead of a Pay button), with the value used as the start parameter. If absent, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. |
| extended_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputMedia](/type/InputMedia/) | Deprecated |

## Тип

[InputMedia](/type/InputMedia/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Bot Payments API](https://core.telegram.org/bots/payments)
