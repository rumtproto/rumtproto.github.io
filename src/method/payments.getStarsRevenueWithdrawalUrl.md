---
title: "payments.getStarsRevenueWithdrawalUrl (метод)"
original: "https://core.telegram.org/method/payments.getStarsRevenueWithdrawalUrl"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsRevenueWithdrawalUrl

*Метод из схемы TL.*

> Withdraw funds from a channel or bot's [star balance »](https://core.telegram.org/api/stars#withdrawing-revenue).

## Определение TL

```
payments.starsRevenueWithdrawalUrl#1dab80b7 url:string = payments.StarsRevenueWithdrawalUrl;
---functions---
payments.getStarsRevenueWithdrawalUrl#2433dc92 flags:# ton:flags.0?true peer:InputPeer amount:flags.1?long password:InputCheckPasswordSRP = payments.StarsRevenueWithdrawalUrl;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| ton | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, withdraws channel/ad revenue in TON. |
| peer | [InputPeer](/type/InputPeer/) | Channel or bot from which to withdraw funds. |
| amount | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | The amount of stars or nanograms to withdraw. |
| password | [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | 2FA password, see [here »](https://core.telegram.org/api/srp/#using-the-2fa-password) for more info. |

## Результат

[payments.StarsRevenueWithdrawalUrl](/type/payments.StarsRevenueWithdrawalUrl/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PASSWORD_HASH_INVALID | The provided password hash is invalid. |
| 400 | PASSWORD_MISSING | You must [enable 2FA](/api/srp/) before executing this operation. |
| 400 | PASSWORD_TOO_FRESH_%d | The password was modified less than 24 hours ago, try again in %d seconds. |
| 400 | SESSION_TOO_FRESH_%d | This session was created less than 24 hours ago, try again in %d seconds. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
