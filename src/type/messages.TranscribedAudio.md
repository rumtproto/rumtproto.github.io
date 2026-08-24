---
title: "messages.TranscribedAudio"
original: "https://core.telegram.org/type/messages.TranscribedAudio"
section: ref
kind: type
description: "Расшифрованный текст голосового сообщения"
layout: layout.njk
---

# messages.TranscribedAudio

[Расшифрованный текст](/api/transcribe/) голосового сообщения

```
messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;

---functions---

messages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.transcribedAudio">messages.transcribedAudio</a></td><td><a href="/api/transcribe">Расшифрованный текст голосового сообщения »</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.transcribeAudio">messages.transcribeAudio</a></td><td><a href="/api/transcribe">Расшифровка голосовых сообщений</a></td></tr></tbody></table>

### Связанные страницы

#### [Расшифровка голосовых сообщений](/api/transcribe/)

Как расшифровывать голосовые сообщения.
