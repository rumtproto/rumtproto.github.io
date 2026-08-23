---
title: "Payments.SavedInfo (тип)"
original: "https://core.telegram.org/type/payments.SavedInfo"
section: ref
kind: type
layout: layout.njk
---

# Payments.SavedInfo

*Тип из схемы TL.*

> Saved payment info

## Определение TL

```
payments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;

---functions---

payments.getSavedInfo#227d824b = payments.SavedInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.savedInfo](/constructor/payments.savedInfo/) | Saved server-side order information |

## Методы

| Method | Описание |
|---|---|
| [payments.getSavedInfo](/method/payments.getSavedInfo/) | Get saved payment information |
