---
title: "auth.sentCodePaymentRequired (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodePaymentRequired"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodePaymentRequired

*Конструктор из схемы TL.*

> Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription in order to proceed with the login/signup, see [here »](https://core.telegram.org/api/auth/#paid-auth) for more info.

## Определение TL

```
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| store_product | [string](/type/string/) | For official apps, tore identifier of the Telegram Premium subscription. |
| phone_code_hash | [string](/type/string/) | Phone code hash, to be stored and later re-used with [auth.signIn](/method/auth.signIn/) |
| support_email_address | [string](/type/string/) | An email address that can be contacted for more information about this request. |
| support_email_subject | [string](/type/string/) | The mandatory subject for the email. |
| premium_days | [int](/type/int/) | Duration in days of the [Telegram Premium](https://core.telegram.org/api/premium) subscription granted by this purchase. |
| currency | [string](/type/string/) | Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code. |
| amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[auth.SentCode](/type/auth.SentCode/)

## Related pages

#### [auth.signIn](/method/auth.signIn/)

Signs in a user with a validated phone number.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
