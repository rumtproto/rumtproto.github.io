---
title: "messages.TranscribedAudio (тип)"
original: "https://core.telegram.org/type/messages.TranscribedAudio"
section: ref
kind: type
layout: layout.njk
---

# messages.TranscribedAudio

*Тип из схемы TL.*

> [Transcribed text](https://core.telegram.org/api/transcribe) from a voice message

## Определение TL

```
messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;

---functions---

messages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.transcribedAudio](/constructor/messages.transcribedAudio/) | [Transcribed text from a voice message »](https://core.telegram.org/api/transcribe) |

## Методы

| Method | Описание |
|---|---|
| [messages.transcribeAudio](/method/messages.transcribeAudio/) | [Transcribe voice message](https://core.telegram.org/api/transcribe) |

## Related pages

#### [Voice message transcription](https://core.telegram.org/api/transcribe)

How to transcribe voice messages.
