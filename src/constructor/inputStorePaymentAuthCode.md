---
title: "inputStorePaymentAuthCode (конструктор)"
original: "https://core.telegram.org/constructor/inputStorePaymentAuthCode"
section: ref
kind: constructor
layout: layout.njk
---

# inputStorePaymentAuthCode

*Конструктор из схемы TL.*

> Indicates payment for a login code.

## Определение TL

```
inputStorePaymentAuthCode#9bb2636d flags:# restore:flags.0?true phone_number:string phone_code_hash:string currency:string amount:long = InputStorePaymentPurpose;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| restore | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Set this flag to restore a previously made purchase. |
| phone_number | [string](/type/string/) | Phone number. |
| phone_code_hash | [string](/type/string/) | phone_code_hash returned by [auth.sendCode](/method/auth.sendCode/). |
| premium_days | [int](/type/int/) | Duration in days of the [Telegram Premium](https://core.telegram.org/api/premium) subscription granted by this purchase, as indicated in [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/).premium_days. |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code |
| amount | [long](/type/long/) | Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

## Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)

Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription in order to proceed with the login/signup, see [here »](https://core.telegram.org/api/auth/#paid-auth) for more info.

#### [Bot Payments API](https://core.telegram.org/bots/payments)
