---
title: "channelAdminLogEventActionParticipantVolume (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantVolume"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionParticipantVolume

*Конструктор из схемы TL.*

> channelAdminLogEvent.user\_id has set the volume of participant.peer to participant.volume

## Определение TL

```
channelAdminLogEventActionParticipantVolume#3e7f6847 participant:GroupCallParticipant = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| participant | [GroupCallParticipant](/type/GroupCallParticipant/) | The participant whose volume was changed |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)
