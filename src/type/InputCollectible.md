---
title: "InputCollectible (тип)"
original: "https://core.telegram.org/type/InputCollectible"
section: ref
kind: type
layout: layout.njk
---

# InputCollectible

*Тип из схемы TL.*

> Represents a [Fragment collectible »](https://core.telegram.org/api/fragment).

## Определение TL

```
inputCollectibleUsername#e39460a9 username:string = InputCollectible;
inputCollectiblePhone#a2e214a4 phone:string = InputCollectible;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputCollectibleUsername](/constructor/inputCollectibleUsername/) | Represents a [username fragment collectible](https://core.telegram.org/api/fragment) |
| [inputCollectiblePhone](/constructor/inputCollectiblePhone/) | Represents a [phone number fragment collectible](https://core.telegram.org/api/fragment) |

## Related pages

#### [Fragment collectibles](https://core.telegram.org/api/fragment)

Telegram users can make it easy for others to contact them or find their public groups and channels via usernames: clients can also assign multiple Fragment » collectible usernames to accounts, supergroups and channels they own; Fragment » also allows purchasing phone number collectibles that can be used to register Telegram accounts.
