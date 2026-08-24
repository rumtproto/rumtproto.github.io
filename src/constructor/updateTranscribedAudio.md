---
title: "updateTranscribedAudio"
original: "https://core.telegram.org/constructor/updateTranscribedAudio"
section: ref
kind: constructor
description: "Обновилась ожидающая расшифровка голосового сообщения », запущенная методом messages.transcribeAudio."
layout: layout.njk
---

# updateTranscribedAudio

Обновилась ожидающая [расшифровка голосового сообщения »](/api/transcribe/), запущенная методом [messages.transcribeAudio](/method/messages.transcribeAudio/).

```
updateTranscribedAudio#84cd5a flags:# pending:flags.0?true peer:Peer msg_id:int transcription_id:long text:string = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Не завершена ли ещё эта расшифровка и будут ли в дальнейшем присылаться обновления <a href="/constructor/updateTranscribedAudio">updateTranscribedAudio</a> о ней.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир расшифрованного сообщения</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор расшифрованного сообщения</td></tr><tr><td><strong>transcription_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор расшифровки</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Расшифрованный текст</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [updateTranscribedAudio](/constructor/updateTranscribedAudio/)

Обновилась ожидающая [расшифровка голосового сообщения »](/api/transcribe/), запущенная методом [messages.transcribeAudio](/method/messages.transcribeAudio/).

#### [Расшифровка голосовых сообщений](/api/transcribe/)

Как расшифровывать голосовые сообщения.

#### [messages.transcribeAudio](/method/messages.transcribeAudio/)

[Расшифровка голосовых сообщений](/api/transcribe/)
