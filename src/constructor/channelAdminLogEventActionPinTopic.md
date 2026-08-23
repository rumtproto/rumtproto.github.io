---
title: "channelAdminLogEventActionPinTopic (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionPinTopic"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionPinTopic

*Конструктор из схемы TL.*

> A [forum topic](https://core.telegram.org/api/forum#forum-topics) was pinned or unpinned

## Определение TL

```
channelAdminLogEventActionPinTopic#5d8d353b flags:# prev_topic:flags.0?ForumTopic new_topic:flags.1?ForumTopic = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| prev_topic | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[ForumTopic](/type/ForumTopic/) | Previous topic information |
| new_topic | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[ForumTopic](/type/ForumTopic/) | New topic information |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.
