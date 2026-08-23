---
title: "messages.editExportedChatInvite (метод)"
original: "https://core.telegram.org/method/messages.editExportedChatInvite"
section: ref
kind: method
layout: layout.njk
---

# messages.editExportedChatInvite

*Метод из схемы TL.*

> Edit an exported chat invite

## Определение TL

```
messages.exportedChatInvite#1871be50 invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
messages.exportedChatInviteReplaced#222600ef invite:ExportedChatInvite new_invite:ExportedChatInvite users:Vector<User> = messages.ExportedChatInvite;
---functions---
messages.editExportedChatInvite#bdca2f75 flags:# revoked:flags.2?true peer:InputPeer link:string expire_date:flags.0?int usage_limit:flags.1?int request_needed:flags.3?Bool title:flags.4?string = messages.ExportedChatInvite;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| revoked | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to revoke the chat invite |
| peer | [InputPeer](/type/InputPeer/) | Chat |
| link | [string](/type/string/) | Invite link |
| expire_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | New expiration date |
| usage_limit | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Maximum number of users that can join using this link |
| request_needed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Bool](/type/Bool/) | Whether admin confirmation is required before admitting each separate user into the chat |
| title | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | Description of the invite link, visible only to administrators |

## Результат

[messages.ExportedChatInvite](/type/messages.ExportedChatInvite/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_INVITE_PERMANENT | You can't set an expiration date on permanent invite links. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 403 | EDIT_BOT_INVITE_FORBIDDEN | Normal users can't edit invites that were created by bots. |
| 400 | INVITE_HASH_EXPIRED | The invite link has expired. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USAGE_LIMIT_INVALID | The specified usage limit is invalid. |
