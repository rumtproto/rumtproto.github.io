---
title: "Расшифровка голосовых сообщений"
original: "https://core.telegram.org/api/transcribe"
section: api
description: "API предоставляет методы для расшифровки голосовых сообщений в текст."
layout: layout.njk
---

# Расшифровка голосовых сообщений

API предоставляет методы для расшифровки голосовых сообщений в текст.

Схема:

```
updateTranscribedAudio#84cd5a flags:# pending:flags.0?true peer:Peer msg_id:int transcription_id:long text:string = Update;

messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;

---functions---

messages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;
messages.rateTranscribedAudio#7f1d072f peer:InputPeer msg_id:int transcription_id:long good:Bool = Bool;
```

[@term:pending] Чтобы запустить расшифровку сообщения, используйте [messages.transcribeAudio](/method/messages.transcribeAudio/).  
Если расшифровка ещё продолжается, в возвращённом конструкторе [messages.transcribedAudio](/constructor/messages.transcribedAudio/) будет установлен флаг `pending` (расшифровка не завершена), а расшифрованный текст в поле `text` будет уточняться в дальнейшем через обновления [updateTranscribedAudio](/constructor/updateTranscribedAudio/).  
[@term:transcription_id] Эти обновления содержат обновлённый `text` с тем же значением `transcription_id` (идентификатор конкретной расшифровки), которое было возвращено в первом [messages.transcribedAudio](/constructor/messages.transcribedAudio/), а флаг `pending` будет установлен, если расшифровка всё ещё продолжается.

Затем расшифровку можно оценить как хорошую или плохую с помощью [messages.rateTranscribedAudio](/method/messages.rateTranscribedAudio/).

Пользователи без подписки [Telegram Premium](/api/premium/) могут расшифровывать не более [transcribe\_audio\_trial\_weekly\_number](/api/config/#transcribe-audio-trial-weekly-number) сообщений в неделю, причём длительность каждого не превышает [transcribe\_audio\_trial\_duration\_max](/api/config/#transcribe-audio-trial-duration-max) секунд.  
Для пользователей без Premium в конструкторе [messages.transcribedAudio](/constructor/messages.transcribedAudio/) дополнительно устанавливаются флаги `trial_remains_num` и `trial_remains_until_date`: они указывают количество оставшихся расшифровок и дату, когда счётчик `trial_remains_num` будет сброшен до максимального значения [transcribe\_audio\_trial\_weekly\_number](/api/config/#transcribe-audio-trial-weekly-number).

[@term:boost] Кроме того, как только супергруппа достигает хотя бы того [уровня бустов](/api/boost/) (`boost level` — уровень, который группа получает за бусты от пользователей), который указан в параметре конфигурации [`group_transcribe_level_min` »](/api/config/#group-transcribe-level-min), её участники без подписки [Premium](/api/premium/) получают возможность [расшифровывать любые голосовые сообщения](/api/transcribe/), не расходуя свою бесплатную квоту на расшифровку.
