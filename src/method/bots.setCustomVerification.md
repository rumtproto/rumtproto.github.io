---
title: "bots.setCustomVerification"
original: "https://core.telegram.org/method/bots.setCustomVerification"
section: ref
kind: method
description: "Верифицировать пользователя или чат от имени организации »."
layout: layout.njk
---

# bots.setCustomVerification

Верифицировать пользователя или чат [от имени организации »](/api/bots/verification/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setCustomVerification#8b89dfbd flags:# enabled:flags.1?true bot:flags.0?InputUser peer:InputPeer custom_description:flags.2?string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, добавляет верификацию; в противном случае снимает её.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputUser">InputUser</a></td><td><strong>Не</strong> должно устанавливаться при вызове ботом; при вызове пользователем <strong>обязано</strong> быть равно идентификатору принадлежащего ему бота.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, который нужно проверить</td></tr><tr><td><strong>custom_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Произвольное описание проверки; ограничение на его длину в UTF-8 содержится в <a href="/api/config#bot-verification-description-length-limit">bot_verification_description_length_limit »</a>.<br>Если поле не задано, в качестве описания будет использовано <code>Was verified by organization "organization_name"</code>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>Это не бот.</td></tr><tr><td>403</td><td>BOT_VERIFIER_FORBIDDEN</td><td>Этот бот не может присваивать <a href="/api/bots/verification">значки верификации</a>.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.
