---
title: "channelAdminLogEventActionEditTopic (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionEditTopic"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionEditTopic

*Конструктор из схемы TL.*

> A [forum topic](https://core.telegram.org/api/forum#forum-topics) was edited

## Определение TL

```
channelAdminLogEventActionEditTopic#f06fe208 prev_topic:ForumTopic new_topic:ForumTopic = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_topic | [ForumTopic](/type/ForumTopic/) | Previous topic information |
| new_topic | [ForumTopic](/type/ForumTopic/) | New topic information |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
