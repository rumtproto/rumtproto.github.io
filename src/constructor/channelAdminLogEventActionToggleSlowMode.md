---
title: "channelAdminLogEventActionToggleSlowMode (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionToggleSlowMode"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionToggleSlowMode

*Конструктор из схемы TL.*

> [Slow mode setting for supergroups was changed](/method/channels.toggleSlowMode/)

## Определение TL

```
channelAdminLogEventActionToggleSlowMode#53909779 prev_value:int new_value:int = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_value | [int](/type/int/) | Previous slow mode value |
| new_value | [int](/type/int/) | New slow mode value |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [channels.toggleSlowMode](/method/channels.toggleSlowMode/)

Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds
