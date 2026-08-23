---
title: "updateTranscribedAudio (конструктор)"
original: "https://core.telegram.org/constructor/updateTranscribedAudio"
section: ref
kind: constructor
layout: layout.njk
---

# updateTranscribedAudio

*Конструктор из схемы TL.*

> A pending [voice message transcription »](https://core.telegram.org/api/transcribe) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated.

## Определение TL

```
updateTranscribedAudio#84cd5a flags:# pending:flags.0?true peer:Peer msg_id:int transcription_id:long text:string = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pending | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this transcription is still pending and further [updateTranscribedAudio](/constructor/updateTranscribedAudio/) about it will be sent in the future. |
| peer | [Peer](/type/Peer/) | Peer of the transcribed message |
| msg_id | [int](/type/int/) | Transcribed message ID |
| transcription_id | [long](/type/long/) | Transcription ID |
| text | [string](/type/string/) | Transcribed text |

## Тип

[Update](/type/Update/)

## Related pages

#### [updateTranscribedAudio](/constructor/updateTranscribedAudio/)

A pending [voice message transcription »](https://core.telegram.org/api/transcribe) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated.

#### [Voice message transcription](https://core.telegram.org/api/transcribe)

How to transcribe voice messages.

#### [messages.transcribeAudio](/method/messages.transcribeAudio/)

[Transcribe voice message](https://core.telegram.org/api/transcribe)
