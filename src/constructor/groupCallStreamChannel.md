---
title: "groupCallStreamChannel (конструктор)"
original: "https://core.telegram.org/constructor/groupCallStreamChannel"
section: ref
kind: constructor
layout: layout.njk
---

# groupCallStreamChannel

*Конструктор из схемы TL.*

> Describes an available RTMP stream channel and its current playback timestamp, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#rtmp-mode).

## Определение TL

```
groupCallStreamChannel#80eb48af channel:int scale:int last_timestamp_ms:long = GroupCallStreamChannel;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [int](/type/int/) | Stream channel ID, used as a source of the synthetic unified video source group and as [inputGroupCallStream](/constructor/inputGroupCallStream/).video_channel when fetching the corresponding video segment |
| scale | [int](/type/int/) | Deprecated, [ignored by clients »](https://core.telegram.org/api/group-calls#rtmp-mode): use the media segment duration hardcoded in clients (1000 milliseconds, i.e. scale = 0) instead. Historically, it specified the duration of the media segment to fetch, obtained in milliseconds by bitshifting 1000 to the right scale times: duration_ms := 1000 >> scale. |
| last_timestamp_ms | [long](/type/long/) | Last seen timestamp to easily start fetching livestream chunks using [inputGroupCallStream](/constructor/inputGroupCallStream/) |

## Тип

[GroupCallStreamChannel](/type/GroupCallStreamChannel/)

## Related pages

#### [inputGroupCallStream](/constructor/inputGroupCallStream/)

Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#downloading-media-chunks).

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
