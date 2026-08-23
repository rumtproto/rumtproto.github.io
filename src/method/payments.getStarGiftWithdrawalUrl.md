---
title: "payments.getStarGiftWithdrawalUrl (метод)"
original: "https://core.telegram.org/method/payments.getStarGiftWithdrawalUrl"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGiftWithdrawalUrl

*Метод из схемы TL.*

> Convert a [collectible gift »](https://core.telegram.org/api/gifts) to an NFT on the TON blockchain.

## Определение TL

```
payments.starGiftWithdrawalUrl#84aa3a9c url:string = payments.StarGiftWithdrawalUrl;
---functions---
payments.getStarGiftWithdrawalUrl#d06e93a8 stargift:InputSavedStarGift password:InputCheckPasswordSRP = payments.StarGiftWithdrawalUrl;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stargift | [InputSavedStarGift](/type/InputSavedStarGift/) | The collectible gift to export. |
| password | [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) | The current user's 2FA password, passed as [specified here »](/api/srp/). |

## Результат

[payments.StarGiftWithdrawalUrl](/type/payments.StarGiftWithdrawalUrl/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PASSWORD_HASH_INVALID | The provided password hash is invalid. |
| 400 | PASSWORD_TOO_FRESH_%d | The password was modified less than 24 hours ago, try again in %d seconds. |
| 400 | SESSION_TOO_FRESH_%d | This session was created less than 24 hours ago, try again in %d seconds. |

## Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
