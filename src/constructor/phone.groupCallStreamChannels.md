---
title: "phone.groupCallStreamChannels (конструктор)"
original: "https://core.telegram.org/constructor/phone.groupCallStreamChannels"
section: ref
kind: constructor
layout: layout.njk
---

# phone.groupCallStreamChannels

*Конструктор из схемы TL.*

> Contains the available channels of an RTMP-mode group call, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#rtmp-mode).

## Определение TL

```
phone.groupCallStreamChannels#d0e482b2 channels:Vector<GroupCallStreamChannel> = phone.GroupCallStreamChannels;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channels | [Vector](https://core.telegram.org/type/Vector%20t)<[GroupCallStreamChannel](/type/GroupCallStreamChannel/)> | Available RTMP stream channels; may be empty while the external publisher is not sending media |

## Тип

[phone.GroupCallStreamChannels](/type/phone.GroupCallStreamChannels/)

## Related pages

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
