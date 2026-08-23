---
title: "payments.ExportedInvoice (тип)"
original: "https://core.telegram.org/type/payments.ExportedInvoice"
section: ref
kind: type
layout: layout.njk
---

# payments.ExportedInvoice

*Тип из схемы TL.*

> Exported invoice

## Определение TL

```
payments.exportedInvoice#aed0cbd9 url:string = payments.ExportedInvoice;

---functions---

payments.exportInvoice#f91b065 invoice_media:InputMedia = payments.ExportedInvoice;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.exportedInvoice](/constructor/payments.exportedInvoice/) | Exported [invoice deep link](https://core.telegram.org/api/links#invoice-links) |

## Методы

| Method | Описание |
|---|---|
| [payments.exportInvoice](/method/payments.exportInvoice/) | Generate an [invoice deep link](https://core.telegram.org/api/links#invoice-links) |
