---
title: "messages.unpinAllMessages (метод)"
original: "https://core.telegram.org/method/messages.unpinAllMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.unpinAllMessages

*Метод из схемы TL.*

> [Unpin](https://core.telegram.org/api/pin) all pinned messages

## Определение TL

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.unpinAllMessages#62dd747 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Chat where to unpin |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [Forum topic](https://core.telegram.org/api/forum#forum-topics) where to unpin |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputPeer](/type/InputPeer/) | If set, must be equal to the ID of a [monoforum topic](https://core.telegram.org/api/monoforum), and will unpin all messages pinned in the passed monoforum topic. |

## Результат

[messages.AffectedHistory](/type/messages.AffectedHistory/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Pinned messages](https://core.telegram.org/api/pin)

Telegram allows pinning multiple messages on top of a specific chat.
