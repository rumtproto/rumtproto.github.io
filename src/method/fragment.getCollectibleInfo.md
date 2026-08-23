---
title: "fragment.getCollectibleInfo (метод)"
original: "https://core.telegram.org/method/fragment.getCollectibleInfo"
section: ref
kind: method
layout: layout.njk
---

# fragment.getCollectibleInfo

*Метод из схемы TL.*

> Fetch information about a [fragment collectible, see here »](https://core.telegram.org/api/fragment#fetching-info-about-fragment-collectibles) for more info on the full flow.

## Определение TL

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;
---functions---
fragment.getCollectibleInfo#be1e85ba collectible:InputCollectible = fragment.CollectibleInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| collectible | [InputCollectible](/type/InputCollectible/) | Collectible to fetch info about. |

## Результат

[fragment.CollectibleInfo](/type/fragment.CollectibleInfo/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | COLLECTIBLE_INVALID | The specified collectible is invalid. |
| 400 | COLLECTIBLE_NOT_FOUND | The specified collectible could not be found. |

## Related pages

#### [Fragment collectibles](https://core.telegram.org/api/fragment)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
