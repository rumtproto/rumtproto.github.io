---
title: "payments.sendPaymentForm (метод)"
original: "https://core.telegram.org/method/payments.sendPaymentForm"
section: ref
kind: method
layout: layout.njk
---

# payments.sendPaymentForm

*Метод из схемы TL.*

> Send compiled payment form

## Определение TL

```
payments.paymentResult#4e5f810d updates:Updates = payments.PaymentResult;
payments.paymentVerificationNeeded#d8411139 url:string = payments.PaymentResult;
---functions---
payments.sendPaymentForm#2d03522f flags:# form_id:long invoice:InputInvoice requested_info_id:flags.0?string shipping_option_id:flags.1?string credentials:InputPaymentCredentials tip_amount:flags.2?long = payments.PaymentResult;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| form_id | [long](/type/long/) | Form ID |
| invoice | [InputInvoice](/type/InputInvoice/) | Invoice |
| requested_info_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | ID of saved and validated [order info](/constructor/payments.validatedRequestedInfo/) |
| shipping_option_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Chosen shipping option ID |
| credentials | [InputPaymentCredentials](/type/InputPaymentCredentials/) | Payment credentials |
| tip_amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | Tip, in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Результат

[payments.PaymentResult](/type/payments.PaymentResult/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | FORM_UNSUPPORTED | Please update your client. |
| 400 | INVOICE_INVALID | The specified invoice is invalid. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PAYMENT_CREDENTIALS_INVALID | The specified payment credentials are invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | TMP_PASSWORD_INVALID | The passed tmp_password is invalid. |

## Related pages

#### [payments.ValidatedRequestedInfo](/constructor/payments.validatedRequestedInfo/)

Validated user-provided info

#### [Bot Payments API](https://core.telegram.org/bots/payments)
