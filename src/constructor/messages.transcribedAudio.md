---
title: "messages.transcribedAudio"
original: "https://core.telegram.org/constructor/messages.transcribedAudio"
section: ref
kind: constructor
description: "Расшифрованный текст голосового сообщения »"
layout: layout.njk
---

# messages.transcribedAudio

[Расшифрованный текст голосового сообщения »](/api/transcribe/)

```
messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли расшифровка частичной из-за того, что расшифровка аудио ещё выполняется; если установлено, пользователь может получить дальнейшие обновления <a href="/constructor/updateTranscribedAudio">updateTranscribedAudio</a> с обновлённой расшифровкой.</td></tr><tr><td><strong>transcription_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор расшифровки</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Расшифрованный текст</td></tr><tr><td><strong>trial_remains_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Для пользователей без <a href="/api/premium">Premium</a> этот флаг будет установлен и указывать число оставшихся расшифровок в пробном периоде.</td></tr><tr><td><strong>trial_remains_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Для пользователей без <a href="/api/premium">Premium</a> этот флаг будет установлен и указывать дату, когда счётчик <code>trial_remains_num</code> будет сброшен до максимального значения <a href="/api/config#transcribe-audio-trial-weekly-number">transcribe_audio_trial_weekly_number</a>.</td></tr></tbody></table>

### Тип

[messages.TranscribedAudio](/type/messages.TranscribedAudio/)

### Связанные страницы

#### [updateTranscribedAudio](/constructor/updateTranscribedAudio/)

Обновилась ожидающая [расшифровка голосового сообщения »](/api/transcribe/), запущенная методом [messages.transcribeAudio](/method/messages.transcribeAudio/).

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Расшифровка голосовых сообщений](/api/transcribe/)

Как расшифровывать голосовые сообщения.
