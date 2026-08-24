---
title: "messages.rateTranscribedAudio"
original: "https://core.telegram.org/method/messages.rateTranscribedAudio"
section: ref
kind: method
description: "Оценить расшифровку голосового сообщения"
layout: layout.njk
---

# messages.rateTranscribedAudio

Оценить [расшифровку голосового сообщения](/api/transcribe/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.rateTranscribedAudio#7f1d072f peer:InputPeer msg_id:int transcription_id:long good:Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в который было отправлено голосовое сообщение</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr><tr><td><strong>transcription_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор расшифровки</td></tr><tr><td><strong>good</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Была ли расшифровка верной</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Расшифровка голосовых сообщений](/api/transcribe/)

Как расшифровывать голосовые сообщения.
