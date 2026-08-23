---
title: "channelAdminLogEventActionParticipantSubExtend (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantSubExtend"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionParticipantSubExtend

*Конструктор из схемы TL.*

> A paid subscriber has extended their [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions).

## Определение TL

```
channelAdminLogEventActionParticipantSubExtend#64642db3 prev_participant:ChannelParticipant new_participant:ChannelParticipant = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_participant | [ChannelParticipant](/type/ChannelParticipant/) | Same as new_participant. |
| new_participant | [ChannelParticipant](/type/ChannelParticipant/) | The subscriber that extended the subscription. |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
