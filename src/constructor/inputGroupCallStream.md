---
title: "inputGroupCallStream (конструктор)"
original: "https://core.telegram.org/constructor/inputGroupCallStream"
section: ref
kind: constructor
layout: layout.njk
---

# inputGroupCallStream

*Конструктор из схемы TL.*

> Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#downloading-media-chunks).

## Определение TL

```
inputGroupCallStream#598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| call | [InputGroupCall](/type/InputGroupCall/) | RTMP-mode group call |
| time_ms | [long](/type/long/) | Timestamp of the chunk to fetch, in milliseconds |
| scale | [int](/type/int/) | Specifies the duration of the media segment to fetch in milliseconds, by bitshifting 1000 to the right scale times: duration_ms := 1000 >> scale |
| video_channel | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | [groupCallStreamChannel](/constructor/groupCallStreamChannel/).channel value of the video channel to fetch; unified video uses channel 1. Omit together with video_quality to fetch audio |
| video_quality | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Selected video quality (0 = lowest, 1 = medium, 2 = best) |

## Тип

[InputFileLocation](/type/InputFileLocation/)

## Related pages

#### [groupCallStreamChannel](/constructor/groupCallStreamChannel/)

Describes an available RTMP stream channel and its current playback timestamp, see [playing an RTMP livestream »](https://core.telegram.org/api/group-calls#rtmp-mode).

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
