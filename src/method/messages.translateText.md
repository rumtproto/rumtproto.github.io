---
title: "messages.translateText"
original: "https://core.telegram.org/method/messages.translateText"
section: ref
kind: method
description: "Перевести заданный текст."
layout: layout.njk
---

# messages.translateText

Перевести заданный текст.

[Сущности оформления текста](/api/entities/) сохраняются только для пользователей [Telegram Premium](/api/premium/).

```
messages.translateResult#33db32f8 result:Vector<TextWithEntities> = messages.TranslatedText;
---functions---
messages.translateText#63183030 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string = messages.TranslatedText;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Если текст является сообщением чата — идентификатор пира</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Список идентификаторов сообщений для перевода</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/TextWithEntities">TextWithEntities</a>&gt;</td><td>Список оформленных сообщений для перевода</td></tr><tr><td><strong>to_lang</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Двухбуквенный код языка по ISO 639-1, на который переведено сообщение</td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Если установлено, перефразирует перевод с использованием указанной <a href="/api/ai#ai-compose-tones">тональности AI-редактора »</a> (передайте идентификатор тональности)</td></tr></tbody></table>

### Результат

[messages.TranslatedText](/type/messages.TranslatedText/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>INPUT_TEXT_EMPTY</td><td>Указанный текст пуст.</td></tr><tr><td>400</td><td>INPUT_TEXT_TOO_LONG</td><td>Указанный текст слишком длинный.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>TO_LANG_INVALID</td><td>Указанный язык перевода недействителен.</td></tr><tr><td>500</td><td>TRANSLATE_REQ_FAILED</td><td>Не удалось выполнить перевод, повторите попытку позже.</td></tr><tr><td>400</td><td>TRANSLATE_REQ_QUOTA_EXCEEDED</td><td>Перевод сейчас недоступен из-за временной нехватки ресурсов на сервере.</td></tr><tr><td>406</td><td>TRANSLATIONS_DISABLED</td><td>Переводы недоступны; подробное локализованное описание ошибки будет передано через <a href="/api/errors#406-not-acceptable">updateServiceNotification, как описано здесь&nbsp;»</a>.</td></tr><tr><td>500</td><td>TRANSLATION_TIMEOUT</td><td>При переводе указанного текста истекло время ожидания.</td></tr></tbody></table>

### Связанные страницы

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Обработка ошибок](/api/errors/)

Как правильно обрабатывать ошибки, возвращаемые API.
