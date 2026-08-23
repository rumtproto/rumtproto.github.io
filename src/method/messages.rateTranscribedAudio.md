---
title: "messages.rateTranscribedAudio (метод)"
original: "https://core.telegram.org/method/messages.rateTranscribedAudio"
section: ref
kind: method
layout: layout.njk
---

# messages.rateTranscribedAudio

*Метод из схемы TL.*

> Rate [transcribed voice message](https://core.telegram.org/api/transcribe)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.rateTranscribedAudio#7f1d072f peer:InputPeer msg_id:int transcription_id:long good:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the voice message was sent |
| msg_id | [int](/type/int/) | Message ID |
| transcription_id | [long](/type/long/) | Transcription ID |
| good | [Bool](/type/Bool/) | Whether the transcription was correct |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Voice message transcription](https://core.telegram.org/api/transcribe)

How to transcribe voice messages.
