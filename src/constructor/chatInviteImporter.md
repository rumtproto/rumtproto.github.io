---
title: "chatInviteImporter (конструктор)"
original: "https://core.telegram.org/constructor/chatInviteImporter"
section: ref
kind: constructor
layout: layout.njk
---

# chatInviteImporter

*Конструктор из схемы TL.*

> When and which user joined the chat using a chat invite

## Определение TL

```
chatInviteImporter#8c5adfd9 flags:# requested:flags.0?true via_chatlist:flags.3?true user_id:long date:int about:flags.2?string approved_by:flags.1?long = ChatInviteImporter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| requested | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this user currently has a pending [join request »](https://core.telegram.org/api/invites#join-requests) |
| via_chatlist | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | The participant joined by importing a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| user_id | [long](/type/long/) | The user |
| date | [int](/type/int/) | When did the user join |
| about | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | For users with pending requests, contains bio of the user that requested to join |
| approved_by | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[long](/type/long/) | The administrator that approved the [join request »](https://core.telegram.org/api/invites#join-requests) of the user |

## Тип

[ChatInviteImporter](/type/ChatInviteImporter/)

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
