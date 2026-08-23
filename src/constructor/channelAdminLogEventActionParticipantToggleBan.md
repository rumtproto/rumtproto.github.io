---
title: "channelAdminLogEventActionParticipantToggleBan (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantToggleBan"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionParticipantToggleBan

*Конструктор из схемы TL.*

> The banned [rights](https://core.telegram.org/api/rights) of a user were changed

## Определение TL

```
channelAdminLogEventActionParticipantToggleBan#e6d83d7e prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_participant | [ChannelParticipant](/type/ChannelParticipant/) | Old banned rights of user |
| new_participant | [ChannelParticipant](/type/ChannelParticipant/) | New banned rights of user |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
