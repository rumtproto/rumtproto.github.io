---
title: "payments.exportInvoice (метод)"
original: "https://core.telegram.org/method/payments.exportInvoice"
section: ref
kind: method
layout: layout.njk
---

# payments.exportInvoice

*Метод из схемы TL.*

> Generate an [invoice deep link](https://core.telegram.org/api/links#invoice-links)

## Определение TL

```
payments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;
---functions---
payments.exportInvoice#f91b065 invoice_media:InputMedia = payments.ExportedInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| invoice_media | [InputMedia](/type/InputMedia/) | Invoice |

## Результат

[payments.ExportedInvoice](/type/payments.ExportedInvoice/)

## Only bots can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | CURRENCY_TOTAL_AMOUNT_INVALID | The total amount of all prices is invalid. |
| 400 | INVOICE_PAYLOAD_INVALID | The specified invoice payload is invalid. |
| 400 | MEDIA_INVALID | Media invalid. |
| 400 | PAYMENT_PROVIDER_INVALID | The specified payment provider is invalid. |
| 400 | STARS_INVOICE_INVALID | The specified Telegram Star invoice is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
| 400 | WEBDOCUMENT_MIME_INVALID | Invalid webdocument mime type provided. |
| 400 | WEBDOCUMENT_URL_EMPTY | The passed web document URL is empty. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
