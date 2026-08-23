---
title: "payments.getConnectedStarRefBots (метод)"
original: "https://core.telegram.org/method/payments.getConnectedStarRefBots"
section: ref
kind: method
layout: layout.njk
---

# payments.getConnectedStarRefBots

*Метод из схемы TL.*

> Fetch all affiliations we have created for a certain peer

## Определение TL

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
---functions---
payments.getConnectedStarRefBots#5869a553 flags:# peer:InputPeer offset_date:flags.2?int offset_link:flags.2?string limit:int = payments.ConnectedStarRefBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | The affiliated peer |
| offset_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | If set, returns only results older than the specified unixtime |
| offset_link | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Offset for [pagination](https://core.telegram.org/api/offsets), taken from the last returned [connectedBotStarRef](/constructor/connectedBotStarRef/).url (initially empty) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [connectedBotStarRef](/constructor/connectedBotStarRef/)

Info about an [active affiliate program we have with a Mini App](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)
