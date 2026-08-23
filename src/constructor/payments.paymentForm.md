---
title: "payments.paymentForm (конструктор)"
original: "https://core.telegram.org/constructor/payments.paymentForm"
section: ref
kind: constructor
layout: layout.njk
---

# payments.paymentForm

*Конструктор из схемы TL.*

> Payment form

## Определение TL

```
payments.paymentForm#a0058751 flags:# can_save_credentials:flags.2?true password_missing:flags.3?true form_id:long bot_id:long title:string description:string photo:flags.5?WebDocument invoice:Invoice provider_id:long url:string native_provider:flags.4?string native_params:flags.4?DataJSON additional_methods:flags.6?Vector<PaymentFormMethod> saved_info:flags.0?PaymentRequestedInfo saved_credentials:flags.1?Vector<PaymentSavedCredentials> users:Vector<User> = payments.PaymentForm;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| can_save_credentials | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the user can choose to save credentials. |
| password_missing | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Indicates that the user can save payment credentials, but only after setting up a [2FA password](/api/srp/) (currently the account doesn't have a [2FA password](/api/srp/)) |
| form_id | [long](/type/long/) | Form ID |
| bot_id | [long](/type/long/) | Bot ID |
| title | [string](/type/string/) | Form title |
| description | [string](/type/string/) | Description |
| photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[WebDocument](/type/WebDocument/) | Product photo |
| invoice | [Invoice](/type/Invoice/) | Invoice |
| provider_id | [long](/type/long/) | Payment provider ID. |
| url | [string](/type/string/) | Payment form URL |
| native_provider | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | Payment provider name. One of the following: - stripe |
| native_params | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[DataJSON](/type/DataJSON/) | Contains information about the payment provider, if available, to support it natively without the need for opening the URL. A JSON object that can contain the following fields: - apple_pay_merchant_id: Apple Pay merchant ID - google_pay_public_key: Google Pay public key - need_country: True, if the user country must be provided, - need_zip: True, if the user ZIP/postal code must be provided, - need_cardholder_name: True, if the cardholder name must be provided |
| additional_methods | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Vector](https://core.telegram.org/type/Vector%20t)<[PaymentFormMethod](/type/PaymentFormMethod/)> | Additional payment methods |
| saved_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Saved server-side order information |
| saved_credentials | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[PaymentSavedCredentials](/type/PaymentSavedCredentials/)> | Contains information about saved card credentials |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users |

## Тип

[payments.PaymentForm](/type/payments.PaymentForm/)

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
