---
title: "updateChatParticipantRank (конструктор)"
original: "https://core.telegram.org/constructor/updateChatParticipantRank"
section: ref
kind: constructor
layout: layout.njk
---

# updateChatParticipantRank

*Конструктор из схемы TL.*

> The [tag »](https://core.telegram.org/api/rank) of a participant of a [basic group »](https://core.telegram.org/api/channel#basic-groups) has changed.

## Определение TL

```
updateChatParticipantRank#bd8367b9 chat_id:long user_id:long rank:string version:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | Basic group ID. |
| user_id | [long](/type/long/) | User ID. |
| rank | [string](/type/string/) | The new tag. |
| version | [int](/type/int/) | Used similarly to pts values to deduplicate/update outdated chat information as specified [here »](https://core.telegram.org/api/peers#basic-group-updates). |

## Тип

[Update](/type/Update/)

## Related pages

#### [Peer database](https://core.telegram.org/api/peers)

Many constructors in the API need to be stored in a local database upon reception and should only ever be updated reactively (passively) when received via updates or by other means (as specified in the documentation), to avoid overloading the server by continuously requesting changes for the same unchanged information.

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
