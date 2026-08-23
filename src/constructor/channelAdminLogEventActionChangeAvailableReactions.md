---
title: "channelAdminLogEventActionChangeAvailableReactions (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeAvailableReactions"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionChangeAvailableReactions

*Конструктор из схемы TL.*

> The set of allowed [message reactions »](https://core.telegram.org/api/reactions) for this channel has changed

## Определение TL

```
channelAdminLogEventActionChangeAvailableReactions#be4e0ef8 prev_value:ChatReactions new_value:ChatReactions = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_value | [ChatReactions](/type/ChatReactions/) | Previously allowed reaction emojis |
| new_value | [ChatReactions](/type/ChatReactions/) | New allowed reaction emojis |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
