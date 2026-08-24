---
title: "Voice message transcription"
original: "https://core.telegram.org/api/transcribe"
section: api
description: "The API provides methods to transcribe voice messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"Voice message transcription","url":"/api/transcribe/"}]
layout: layout.njk
---

# Voice message transcription

The API provides methods to transcribe voice messages.

Schema:

```
updateTranscribedAudio#84cd5a flags:# pending:flags.0?true peer:Peer msg_id:int transcription_id:long text:string = Update;

messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;

---functions---

messages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;
messages.rateTranscribedAudio#7f1d072f peer:InputPeer msg_id:int transcription_id:long good:Bool = Bool;
```

Use [messages.transcribeAudio](/method/messages.transcribeAudio/) to initiate transcription of a message.  
The returned [messages.transcribedAudio](/constructor/messages.transcribedAudio/) constructor will have the `pending` flag set if the transcription is still in progress and the transcribed text contained in `text` will be updated in future with [updateTranscribedAudio](/constructor/updateTranscribedAudio/) updates.  
These updates will contain the updated `text` with the same `transcription_id` returned in the first [messages.transcribedAudio](/constructor/messages.transcribedAudio/), and the `pending` flag will be set if the transcription is still in progress.

A transcription can then be rated as good or bad using [messages.rateTranscribedAudio](/method/messages.rateTranscribedAudio/).

Users without a [Telegram Premium](/api/premium/) subscription can only transcribe [transcribe\_audio\_trial\_weekly\_number](/api/config/#transcribe-audio-trial-weekly-number) messages per week, each of maximum duration equal to [transcribe\_audio\_trial\_duration\_max](/api/config/#transcribe-audio-trial-duration-max) seconds.  
For non-premium users, the `trial_remains_num` and `trial_remains_until_date` flags of [messages.transcribedAudio](/constructor/messages.transcribedAudio/) will also be set, indicating the remaining transcriptions, and the date when the `trial_remains_num` counter will be reset to the maximum value of [transcribe\_audio\_trial\_weekly\_number](/api/config/#transcribe-audio-trial-weekly-number).

Also, after a supergroup reaches at least the [boost level](/api/boost/) specified in the [`group_transcribe_level_min` »](/api/config/#group-transcribe-level-min) config parameter, non-[Premium](/api/premium/) users in the supergroup gain the ability to [transcribe any voice message](/api/transcribe/), without using up their free transcription quota.
