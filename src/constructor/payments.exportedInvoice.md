---
title: "payments.exportedInvoice (конструктор)"
original: "https://core.telegram.org/constructor/payments.exportedInvoice"
section: ref
kind: constructor
layout: layout.njk
---

# payments.exportedInvoice

*Конструктор из схемы TL.*

> Exported [invoice deep link](https://core.telegram.org/api/links#invoice-links)

## Определение TL

```
payments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | Exported [invoice deep link](https://core.telegram.org/api/links#invoice-links) |

## Тип

[payments.ExportedInvoice](/type/payments.ExportedInvoice/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
