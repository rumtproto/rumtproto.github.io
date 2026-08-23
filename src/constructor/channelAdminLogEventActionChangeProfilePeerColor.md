---
title: "channelAdminLogEventActionChangeProfilePeerColor (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionChangeProfilePeerColor"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionChangeProfilePeerColor

*Конструктор из схемы TL.*

> The [profile accent color](https://core.telegram.org/api/colors) was changed

## Определение TL

```
channelAdminLogEventActionChangeProfilePeerColor#5e477b25 prev_value:PeerColor new_value:PeerColor = ChannelAdminLogEventAction;
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
