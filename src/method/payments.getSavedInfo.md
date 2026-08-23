---
title: "payments.getSavedInfo (метод)"
original: "https://core.telegram.org/method/payments.getSavedInfo"
section: ref
kind: method
layout: layout.njk
---

# payments.getSavedInfo

*Метод из схемы TL.*

> Get saved payment information

## Определение TL

```
payments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;
---functions---
payments.getSavedInfo#227d824b = payments.SavedInfo;
```

## Параметры

This constructor does not require any parameters.

## Результат

[payments.SavedInfo](/type/payments.SavedInfo/)

## Only users can use this method
