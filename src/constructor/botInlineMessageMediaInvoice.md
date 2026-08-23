---
title: "botInlineMessageMediaInvoice (конструктор)"
original: "https://core.telegram.org/constructor/botInlineMessageMediaInvoice"
section: ref
kind: constructor
layout: layout.njk
---

# botInlineMessageMediaInvoice

*Конструктор из схемы TL.*

> Send an invoice

## Определение TL

```
botInlineMessageMediaInvoice#354a9b09 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument currency:string total_amount:long reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| shipping_address_requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Set this flag if you require the user's shipping address to complete the order |
| test | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Test invoice |
| title | [string](/type/string/) | Product name, 1-32 characters |
| description | [string](/type/string/) | Product description, 1-255 characters |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[WebDocument](/type/WebDocument/) | Product photo |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or XTR for [Telegram Stars](https://core.telegram.org/api/stars). |
| total_amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Inline keyboard |

## Тип

[BotInlineMessage](/type/BotInlineMessage/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
