---
title: "initConnection"
original: "https://core.telegram.org/method/initConnection"
section: ref
kind: method
description: "Инициализировать подключение"
layout: layout.njk
---

# initConnection

Инициализировать подключение

```
---functions---
initConnection#c1cd5ea9 {X:Type} flags:# api_id:int device_model:string system_version:string app_version:string system_lang_code:string lang_pack:string lang_code:string proxy:flags.0?InputClientProxy params:flags.1?JSONValue query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>device_model</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Модель устройства</td></tr><tr><td><strong>system_version</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Версия операционной системы</td></tr><tr><td><strong>app_version</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Версия приложения</td></tr><tr><td><strong>system_lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код языка, используемого в операционной системе устройства, по стандарту ISO 639-1</td></tr><tr><td><strong>lang_pack</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор платформы (например, <code>android</code>, <code>tdesktop</code> и т. п.).</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Либо код языка по ISO 639-1, либо название языкового пакета, полученное из <a href="/api/links#language-pack-links">ссылки на языковой пакет</a>.</td></tr><tr><td><strong>proxy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputClientProxy">InputClientProxy</a></td><td>Информация о прокси-сервере MTProto</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/JSONValue">JSONValue</a></td><td>Дополнительные параметры initConnection.<br>Пока поддерживается только поле <code>tz_offset</code>, задающее смещение часового пояса в секундах.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Сам запрос</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CONNECTION_LAYER_INVALID</td><td>Недействительный слой.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
