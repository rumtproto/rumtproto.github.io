---
title: "GroupCallStreamChannel (тип)"
original: "https://core.telegram.org/type/GroupCallStreamChannel"
section: ref
kind: type
layout: layout.njk
---

# GroupCallStreamChannel

*Тип из схемы TL.*

> Info about an RTMP stream in a group call or livestream

## Определение TL

```
groupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [groupCallStreamChannel](/constructor/groupCallStreamChannel/) | Describes an available RTMP stream channel and its current playback timestamp, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#rtmp-mode). |
