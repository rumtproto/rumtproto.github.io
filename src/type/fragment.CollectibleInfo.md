---
title: "fragment.CollectibleInfo (тип)"
original: "https://core.telegram.org/type/fragment.CollectibleInfo"
section: ref
kind: type
layout: layout.njk
---

# fragment.CollectibleInfo

*Тип из схемы TL.*

> Info about a [fragment collectible](https://core.telegram.org/api/fragment).

## Определение TL

```
fragment.collectibleInfo#6ebdff91 purchase_date:int currency:string amount:long crypto_currency:string crypto_amount:long url:string = fragment.CollectibleInfo;

---functions---

fragment.getCollectibleInfo#be1e85ba collectible:InputCollectible = fragment.CollectibleInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [fragment.collectibleInfo](/constructor/fragment.collectibleInfo/) | Info about a [fragment collectible](https://core.telegram.org/api/fragment). |

## Методы

| Method | Описание |
|---|---|
| [fragment.getCollectibleInfo](/method/fragment.getCollectibleInfo/) | Fetch information about a [fragment collectible, see here »](https://core.telegram.org/api/fragment#fetching-info-about-fragment-collectibles) for more info on the full flow. |

## Related pages

#### [Fragment collectibles](https://core.telegram.org/api/fragment)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
