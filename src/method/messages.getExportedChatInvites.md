---
title: "messages.getExportedChatInvites (метод)"
original: "https://core.telegram.org/method/messages.getExportedChatInvites"
section: ref
kind: method
layout: layout.njk
---

# messages.getExportedChatInvites

*Метод из схемы TL.*

> Get info about the chat invites of a specific chat

## Определение TL

```
messages.exportedChatInvites#bdc62dcc count:int invites:Vector<ExportedChatInvite> users:Vector<User> = messages.ExportedChatInvites;
---functions---
messages.getExportedChatInvites#a2b5a3f6 flags:# revoked:flags.3?true peer:InputPeer admin_id:InputUser offset_date:flags.2?int offset_link:flags.2?string limit:int = messages.ExportedChatInvites;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| revoked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether to fetch revoked chat invites |
| peer | [InputPeer](/type/InputPeer/) | Chat |
| admin_id | [InputUser](/type/InputUser/) | Whether to only fetch chat invites from this admin |
| offset_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| offset_link | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[messages.ExportedChatInvites](/type/messages.ExportedChatInvites/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | ADMIN_ID_INVALID | The specified admin ID is invalid. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
