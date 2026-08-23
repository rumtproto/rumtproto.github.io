---
title: "Premium.BoostsList (тип)"
original: "https://core.telegram.org/type/premium.BoostsList"
section: ref
kind: type
layout: layout.njk
---

# Premium.BoostsList

*Тип из схемы TL.*

> List of [boosts](https://core.telegram.org/api/boost) that were applied to a peer by multiple users.

## Определение TL

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;

---functions---

premium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;
premium.getUserBoosts#39854d1f peer:InputPeer user_id:InputUser = premium.BoostsList;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [premium.boostsList](/constructor/premium.boostsList/) | List of [boosts](https://core.telegram.org/api/boost) that were applied to a peer by multiple users. |

## Методы

| Method | Описание |
|---|---|
| [premium.getBoostsList](/method/premium.getBoostsList/) | Obtains info about the boosts that were applied to a certain channel or supergroup (admins only) |
| [premium.getUserBoosts](/method/premium.getUserBoosts/) | Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only) |

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
