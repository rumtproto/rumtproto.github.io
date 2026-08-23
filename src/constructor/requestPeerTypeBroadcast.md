---
title: "requestPeerTypeBroadcast (конструктор)"
original: "https://core.telegram.org/constructor/requestPeerTypeBroadcast"
section: ref
kind: constructor
layout: layout.njk
---

# requestPeerTypeBroadcast

*Конструктор из схемы TL.*

> Choose a channel

## Определение TL

```
requestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| creator | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to allow only choosing channels that were created by the current user. |
| has_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Bool](/type/Bool/) | If specified, allows only choosing channels with or without a username, according to the value of [Bool](/type/Bool/). |
| user_admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ChatAdminRights](/type/ChatAdminRights/) | If specified, allows only choosing channels where the current user is an admin with at least the specified admin rights. |
| bot_admin_rights | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ChatAdminRights](/type/ChatAdminRights/) | If specified, allows only choosing channels where the bot is an admin with at least the specified admin rights. |

## Тип

[RequestPeerType](/type/RequestPeerType/)

## Related pages

#### [Bool](/type/Bool/)

Boolean type.
