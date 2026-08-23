---
title: "messages.transcribeAudio (метод)"
original: "https://core.telegram.org/method/messages.transcribeAudio"
section: ref
kind: method
layout: layout.njk
---

# messages.transcribeAudio

*Метод из схемы TL.*

> [Transcribe voice message](https://core.telegram.org/api/transcribe)

## Определение TL

```
messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;
---functions---
messages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer ID where the voice message was sent |
| msg_id | [int](/type/int/) | Voice message ID |

## Результат

[messages.TranscribedAudio](/type/messages.TranscribedAudio/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | MSG_VOICE_MISSING | The specified message is not a voice message. |
| 400 | MSG_VOICE_TOO_LONG | The specified voice message is too long to be transcribed. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 400 | TRANSCRIPTION_FAILED | Audio transcription failed. |

## Related pages

#### [Voice message transcription](https://core.telegram.org/api/transcribe)

How to transcribe voice messages.
