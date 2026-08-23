---
title: "payments.botCancelStarsSubscription (метод)"
original: "https://core.telegram.org/method/payments.botCancelStarsSubscription"
section: ref
kind: method
layout: layout.njk
---

# payments.botCancelStarsSubscription

*Метод из схемы TL.*

> Cancel a [bot subscription](https://core.telegram.org/api/subscriptions#bot-subscriptions)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.botCancelStarsSubscription#6dfa0622 flags:# restore:flags.0?true user_id:InputUser charge_id:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| restore | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If not set, disables autorenewal of the subscriptions, and prevents the user from reactivating the subscription once the current period expires: a subscription cancelled by the bot will have the [starsSubscription](/constructor/starsSubscription/).bot_canceled flag set. The bot can can partially undo this operation by setting this flag: this will allow the user to reactivate the subscription. |
| user_id | [InputUser](/type/InputUser/) | The ID of the user whose subscription should be (un)cancelled |
| charge_id | [string](/type/string/) | The provider_charge_id from the [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/) service message sent to the bot for the first subscription payment. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHARGE_ID_INVALID | The specified charge_id is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [starsSubscription](/constructor/starsSubscription/)

Represents a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links).

#### [messageActionPaymentSentMe](/constructor/messageActionPaymentSentMe/)

A user just sent a payment to me (a bot)

#### [Star subscriptions](https://core.telegram.org/api/subscriptions)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.
