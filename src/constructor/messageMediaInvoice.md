---
title: "messageMediaInvoice (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaInvoice"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaInvoice

*Конструктор из схемы TL.*

> Invoice

## Определение TL

```
messageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| shipping_address_requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the shipping address was requested |
| test | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether this is an example invoice |
| title | [string](/type/string/) | Product name, 1-32 characters |
| description | [string](/type/string/) | Product description, 1-255 characters |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[WebDocument](/type/WebDocument/) | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. |
| receipt_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Message ID of receipt: if set, clients should change the text of the first [keyboardButtonBuy](/constructor/keyboardButtonBuy/) button always attached to the [message](/constructor/message/) to a localized version of the word Receipt |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code, or XTR for [Telegram Stars](https://core.telegram.org/api/stars). |
| total_amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| start_param | [string](/type/string/) | Unique bot deep-linking parameter that can be used to generate this invoice |
| extended_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[MessageExtendedMedia](/type/MessageExtendedMedia/) | Deprecated |

## Тип

[MessageMedia](/type/MessageMedia/)

## Related pages

#### [keyboardButtonBuy](/constructor/keyboardButtonBuy/)

Button to buy a product

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must start the [payment flow for the attached invoice](https://core.telegram.org/api/payments).

#### [message](/constructor/message/)

A message

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
