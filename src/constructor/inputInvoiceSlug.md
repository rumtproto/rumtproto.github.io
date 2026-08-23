---
title: "inputInvoiceSlug (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoiceSlug"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoiceSlug

*Конструктор из схемы TL.*

> An invoice slug taken from an [invoice deep link](https://core.telegram.org/api/links#invoice-links) or from the [`premium_invoice_slug` app config parameter »](https://core.telegram.org/api/config#premium-invoice-slug)

## Определение TL

```
inputInvoiceSlug#c326caef slug:string = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | The invoice slug |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
