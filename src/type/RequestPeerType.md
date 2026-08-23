---
title: "RequestPeerType (тип)"
original: "https://core.telegram.org/type/RequestPeerType"
section: ref
kind: type
layout: layout.njk
---

# RequestPeerType

*Тип из схемы TL.*

> Filtering criteria to use for the peer selection list shown to the user.

## Определение TL

```
requestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;
requestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
requestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [requestPeerTypeUser](/constructor/requestPeerTypeUser/) | Choose a user. |
| [requestPeerTypeChat](/constructor/requestPeerTypeChat/) | Choose a chat or supergroup |
| [requestPeerTypeBroadcast](/constructor/requestPeerTypeBroadcast/) | Choose a channel |
| [requestPeerTypeCreateBot](https://core.telegram.org/constructor/requestPeerTypeCreateBot) | Used in a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) by a [manager bot](https://core.telegram.org/api/bots/managed-bots) to ask a user to create a new [managed bot »](https://core.telegram.org/api/bots/managed-bots), see [here »](https://core.telegram.org/api/bots/buttons#requesting-a-managed-bot) for more info. |
