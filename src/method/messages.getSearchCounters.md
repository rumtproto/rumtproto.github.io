---
title: "messages.getSearchCounters (метод)"
original: "https://core.telegram.org/method/messages.getSearchCounters"
section: ref
kind: method
layout: layout.njk
---

# messages.getSearchCounters

*Метод из схемы TL.*

> Get the number of results that would be found by a [messages.search](/method/messages.search/) call with the same parameters

## Определение TL

```
---functions---
messages.getSearchCounters#1bbcf300 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer top_msg_id:flags.0?int filters:Vector<MessagesFilter> = Vector<messages.SearchCounter>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Peer where to search |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputPeer](/type/InputPeer/) | Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | If set, consider only messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) |
| filters | [Vector](https://core.telegram.org/type/Vector%20t)<[MessagesFilter](/type/MessagesFilter/)> | Search filters |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[messages.SearchCounter](/type/messages.SearchCounter/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [messages.search](/method/messages.search/)

Search for messages.
