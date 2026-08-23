---
title: "channelAdminLogEventActionParticipantEditRank (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantEditRank"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionParticipantEditRank

*Конструктор из схемы TL.*

> A participant's [tag »](https://core.telegram.org/api/rank) was changed.

## Определение TL

```
channelAdminLogEventActionParticipantEditRank#5806b4ec user_id:long prev_rank:string new_rank:string = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | The user ID. |
| prev_rank | [string](/type/string/) | The previous tag. |
| new_rank | [string](/type/string/) | The new tag. |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.
