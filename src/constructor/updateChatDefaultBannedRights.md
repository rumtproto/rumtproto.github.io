---
title: "updateChatDefaultBannedRights (конструктор)"
original: "https://core.telegram.org/constructor/updateChatDefaultBannedRights"
section: ref
kind: constructor
layout: layout.njk
---

# updateChatDefaultBannedRights

*Конструктор из схемы TL.*

> Default banned rights in a [basic group](https://core.telegram.org/api/channel#basic-groups) were updated

## Определение TL

```
updateChatDefaultBannedRights#54c01850 peer:Peer default_banned_rights:ChatBannedRights version:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The chat |
| default_banned_rights | [ChatBannedRights](/type/ChatBannedRights/) | New default banned rights |
| version | [int](/type/int/) | Used similarly to pts values to deduplicate/update outdated chat information as specified [here »](https://core.telegram.org/api/peers#basic-group-updates). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
