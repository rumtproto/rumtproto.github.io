---
title: "messages.summarizeText"
original: "https://core.telegram.org/method/messages.summarizeText"
section: ref
kind: method
description: "Составить краткое содержание сообщения с помощью ИИ; подробнее см. здесь »."
layout: layout.njk
---

# messages.summarizeText

Составить краткое содержание сообщения с помощью ИИ; подробнее см. [здесь »](/api/ai/#summarize-messages).

Клиентам следует использовать поле [message](/constructor/message/).`summary_from_language` как подсказку для показа кнопки создания краткого содержания; его отсутствие не запрещает вызывать этот метод.

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
---functions---
messages.summarizeText#9d4104e2 flags:# peer:InputPeer id:int to_lang:flags.0?string = TextWithEntities;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором находится сообщение.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор сообщения.</td></tr><tr><td><strong>to_lang</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Если установлено, формирует краткий пересказ на указанном целевом языке (двухбуквенный код языка по ISO 639-1) вместо языка сообщения.</td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Если установлено, перефразирует краткое изложение с использованием указанной <a href="/api/ai#ai-compose-tones">тональности AI-редактора »</a> (передайте идентификатор тональности)</td></tr></tbody></table>

### Результат

[TextWithEntities](/type/TextWithEntities/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>INPUT_TEXT_TOO_LONG</td><td>Указанный текст слишком длинный.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.

#### [message](/constructor/message/)

Сообщение
