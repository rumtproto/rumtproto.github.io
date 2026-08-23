---
title: "messages.deleteHistory (метод)"
original: "https://core.telegram.org/method/messages.deleteHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteHistory

*Метод из схемы TL.*

> Deletes communication history.

## Определение TL

```
messages.affectedHistory#b45c69d1 pts:int pts_count:int offset:int = messages.AffectedHistory;
---functions---
messages.deleteHistory#b08f922a flags:# just_clear:flags.0?true revoke:flags.1?true peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| just_clear | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Just clear history for the current user, without actually removing messages for every chat user |
| revoke | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to delete the message history for all chat participants |
| peer | [InputPeer](/type/InputPeer/) | User or chat, communication history of which will be deleted |
| max_id | [int](/type/int/) | Maximum ID of message to delete |
| min_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | Delete all messages newer than this UNIX timestamp |
| max_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[int](/type/int/) | Delete all messages older than this UNIX timestamp |

## Результат

[messages.AffectedHistory](/type/messages.AffectedHistory/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | CHAT_REVOKE_DATE_UNSUPPORTED | min_date and max_date are not available for using with non-user peers. |
| 400 | MAX_DATE_INVALID | The specified maximum date is invalid. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MIN_DATE_INVALID | The specified minimum date is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
