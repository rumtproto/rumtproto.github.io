---
title: "messages.deleteSavedHistory (метод)"
original: "https://core.telegram.org/method/messages.deleteSavedHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteSavedHistory

*Метод из схемы TL.*

> Deletes messages from a [monoforum topic »](https://core.telegram.org/api/monoforum), or deletes messages forwarded from a specific peer to [saved messages »](https://core.telegram.org/api/saved-messages).

## Определение TL

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | If set, affects the messages of the passed [monoforum topic »](https://core.telegram.org/api/monoforum), otherwise affects [saved messages »](https://core.telegram.org/api/saved-messages). |
| peer | [InputPeer](/type/InputPeer/) | Peer, whose messages will be deleted from [saved messages »](https://core.telegram.org/api/saved-messages), or the ID of the topic. |
| max_id | [int](/type/int/) | Maximum ID of message to delete |
| min_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Delete all messages newer than this UNIX timestamp |
| max_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Delete all messages older than this UNIX timestamp |

## Результат

[messages.AffectedHistory](/type/messages.AffectedHistory/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
