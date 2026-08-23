---
title: "premium.getBoostsList (метод)"
original: "https://core.telegram.org/method/premium.getBoostsList"
section: ref
kind: method
layout: layout.njk
---

# premium.getBoostsList

*Метод из схемы TL.*

> Obtains info about the boosts that were applied to a certain channel or supergroup (admins only)

## Определение TL

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;
---functions---
premium.getBoostsList#60f67660 flags:# gifts:flags.0?true peer:InputPeer offset:string limit:int = premium.BoostsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| gifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to return only info about boosts received from [gift codes and giveaways created by the channel/supergroup »](https://core.telegram.org/api/giveaways) |
| peer | [InputPeer](/type/InputPeer/) | The channel/supergroup |
| offset | [string](/type/string/) | Offset for pagination, obtained from [premium.boostsList](/constructor/premium.boostsList/).next_offset |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[premium.BoostsList](/type/premium.BoostsList/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [premium.boostsList](/constructor/premium.boostsList/)

List of [boosts](https://core.telegram.org/api/boost) that were applied to a peer by multiple users.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
