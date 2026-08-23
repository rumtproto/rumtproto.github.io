---
title: "updateChatParticipantDelete (конструктор)"
original: "https://core.telegram.org/constructor/updateChatParticipantDelete"
section: ref
kind: constructor
layout: layout.njk
---

# updateChatParticipantDelete

*Конструктор из схемы TL.*

> A member has left the [basic group](https://core.telegram.org/api/channel#basic-groups).

## Определение TL

```
updateChatParticipantDelete#e32f3d77 chat_id:long user_id:long version:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | Group ID |
| user_id | [long](/type/long/) | ID of the user |
| version | [int](/type/int/) | Used similarly to pts values to deduplicate/update outdated chat information as specified [here »](https://core.telegram.org/api/peers#basic-group-updates). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
