---
title: "premium.applyBoost (метод)"
original: "https://core.telegram.org/method/premium.applyBoost"
section: ref
kind: method
layout: layout.njk
---

# premium.applyBoost

*Метод из схемы TL.*

> Apply one or more [boosts »](https://core.telegram.org/api/boost) to a peer.

## Определение TL

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
---functions---
premium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| slots | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Which [boost slots](https://core.telegram.org/api/boost) to assign to this peer. |
| peer | [InputPeer](/type/InputPeer/) | The peer to boost. |

## Результат

[premium.MyBoosts](/type/premium.MyBoosts/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOOSTS_EMPTY | No boost slots were specified. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | SLOTS_EMPTY | The specified slot list is empty. |

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
