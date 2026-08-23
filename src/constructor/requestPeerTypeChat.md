---
title: "requestPeerTypeChat (конструктор)"
original: "https://core.telegram.org/constructor/requestPeerTypeChat"
section: ref
kind: constructor
layout: layout.njk
---

# requestPeerTypeChat

*Конструктор из схемы TL.*

> Choose a chat or supergroup

## Определение TL

```
requestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to allow only choosing chats or supergroups that were created by the current user. |
| bot_participant | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether to allow only choosing chats or supergroups where the bot is a participant. |
| has_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Bool](/type/Bool/) | If specified, allows only choosing channels with or without a username, according to the value of [Bool](/type/Bool/). |
| forum | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Bool](/type/Bool/) | If specified, allows only choosing chats or supergroups that are or aren't [forums](https://core.telegram.org/api/forum), according to the value of [Bool](/type/Bool/). |
| user_admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ChatAdminRights](/type/ChatAdminRights/) | If specified, allows only choosing chats or supergroups where the current user is an admin with at least the specified admin rights. |
| bot_admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ChatAdminRights](/type/ChatAdminRights/) | If specified, allows only choosing chats or supergroups where the bot is an admin with at least the specified admin rights. |

## Тип

[RequestPeerType](/type/RequestPeerType/)

## Related pages

#### [Bool](/type/Bool/)

Boolean type.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
