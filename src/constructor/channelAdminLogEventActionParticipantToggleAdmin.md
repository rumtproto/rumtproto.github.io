---
title: "channelAdminLogEventActionParticipantToggleAdmin (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantToggleAdmin"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionParticipantToggleAdmin

*Конструктор из схемы TL.*

> The admin [rights](https://core.telegram.org/api/rights) of a user were changed

## Определение TL

```
channelAdminLogEventActionParticipantToggleAdmin#d5676710 prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_participant | [ChannelParticipant](/type/ChannelParticipant/) | Previous admin rights |
| new_participant | [ChannelParticipant](/type/ChannelParticipant/) | New admin rights |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Admin, banned, default rights](https://core.telegram.org/api/rights)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
