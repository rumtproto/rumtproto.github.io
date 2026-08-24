---
title: "messages.transcribeAudio"
original: "https://core.telegram.org/method/messages.transcribeAudio"
section: ref
kind: method
description: "Расшифровка голосовых сообщений"
layout: layout.njk
---

# messages.transcribeAudio

[Расшифровка голосовых сообщений](/api/transcribe/)

```
messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;
---functions---
messages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Идентификатор пира, в который было отправлено голосовое сообщение</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор голосового сообщения</td></tr></tbody></table>

### Результат

[messages.TranscribedAudio](/type/messages.TranscribedAudio/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>MSG_VOICE_MISSING</td><td>Указанное сообщение не является голосовым.</td></tr><tr><td>400</td><td>MSG_VOICE_TOO_LONG</td><td>Указанное голосовое сообщение слишком длинное для расшифровки.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>400</td><td>TRANSCRIPTION_FAILED</td><td>Не удалось расшифровать аудио в текст.</td></tr></tbody></table>

### Связанные страницы

#### [Расшифровка голосовых сообщений](/api/transcribe/)

Как расшифровывать голосовые сообщения.
