---
title: "channelAdminLogEventActionChangePeerColor (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangePeerColor"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionChangePeerColor

*Конструктор из схемы TL.*

> The [message accent color](https://core.telegram.org/api/colors) was changed

## Определение TL

```
channelAdminLogEventActionChangePeerColor#5796e780 prev_value:PeerColor new_value:PeerColor = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| prev_value | [PeerColor](/type/PeerColor/) | Previous accent palette |
| new_value | [PeerColor](/type/PeerColor/) | New accent palette |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Accent colors](https://core.telegram.org/api/colors)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
