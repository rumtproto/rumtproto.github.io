---
title: "inputInvoicePremiumAuthCode (конструктор)"
original: "https://core.telegram.org/constructor/inputInvoicePremiumAuthCode"
section: ref
kind: constructor
layout: layout.njk
---

# inputInvoicePremiumAuthCode

*Конструктор из схемы TL.*

> Used to pay for login codes, in case of high cost of SMS verification codes for the user's country/provider, see [here »](https://core.telegram.org/api/auth/#paid-auth) for more info.

## Определение TL

```
inputInvoicePremiumAuthCode#3e77f614 purpose:InputStorePaymentPurpose = InputInvoice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| purpose | [InputStorePaymentPurpose](/type/InputStorePaymentPurpose/) | Must contain an [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/). |

## Тип

[InputInvoice](/type/InputInvoice/)

## Related pages

#### [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/)

Indicates payment for a login code.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
