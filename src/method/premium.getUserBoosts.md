---
title: "premium.getUserBoosts (метод)"
original: "https://core.telegram.org/method/premium.getUserBoosts"
section: ref
kind: method
layout: layout.njk
---

# premium.getUserBoosts

*Метод из схемы TL.*

> Returns the lists of boost that were applied to a channel/supergroup by a specific user (admins only)

## Определение TL

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;
---functions---
premium.getUserBoosts#39854d1f peer:InputPeer user_id:InputUser = premium.BoostsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The channel/supergroup |
| user_id | [InputUser](/type/InputUser/) | The user |

## Результат

[premium.BoostsList](/type/premium.BoostsList/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
