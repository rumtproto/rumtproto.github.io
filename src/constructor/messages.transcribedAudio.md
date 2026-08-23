---
title: "messages.transcribedAudio (конструктор)"
original: "https://core.telegram.org/constructor/messages.transcribedAudio"
section: ref
kind: constructor
layout: layout.njk
---

# messages.transcribedAudio

*Конструктор из схемы TL.*

> [Transcribed text from a voice message »](https://core.telegram.org/api/transcribe)

## Определение TL

```
messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| pending | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the transcription is partial because audio transcription is still in progress, if set the user may receive further [updateTranscribedAudio](/constructor/updateTranscribedAudio/) updates with the updated transcription. |
| transcription_id | [long](/type/long/) | Transcription ID |
| text | [string](/type/string/) | Transcripted text |
| trial_remains_num | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | For non-[Premium](https://core.telegram.org/api/premium) users, this flag will be set, indicating the remaining transcriptions in the free trial period. |
| trial_remains_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | For non-[Premium](https://core.telegram.org/api/premium) users, this flag will be set, indicating the date when the trial_remains_num counter will be reset to the maximum value of [transcribe_audio_trial_weekly_number](https://core.telegram.org/api/config#transcribe-audio-trial-weekly-number). |

## Тип

[messages.TranscribedAudio](/type/messages.TranscribedAudio/)

## Related pages

#### [updateTranscribedAudio](/constructor/updateTranscribedAudio/)

A pending [voice message transcription »](https://core.telegram.org/api/transcribe) initiated with [messages.transcribeAudio](/method/messages.transcribeAudio/) was updated.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Voice message transcription](https://core.telegram.org/api/transcribe)

How to transcribe voice messages.
