---
title: "channelAdminLogEventActionDeleteTopic (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionDeleteTopic"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionDeleteTopic

*Конструктор из схемы TL.*

> A [forum topic](https://core.telegram.org/api/forum#forum-topics) was deleted

## Определение TL

```
channelAdminLogEventActionDeleteTopic#ae168909 topic:ForumTopic = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| topic | [ForumTopic](/type/ForumTopic/) | The [forum topic](https://core.telegram.org/api/forum#forum-topics) that was deleted |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
