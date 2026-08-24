---
title: "account.registerDevice"
original: "https://core.telegram.org/method/account.registerDevice"
section: ref
kind: method
description: "Зарегистрировать устройство для получения PUSH-уведомлений"
layout: layout.njk
---

# account.registerDevice

Зарегистрировать устройство для получения [PUSH-уведомлений](/api/push-updates/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.registerDevice#ec86017a flags:# no_muted:flags.0?true token_type:int token:string app_sandbox:Bool secret:bytes other_uids:Vector<long> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>no_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Не получать (беззвучные и невидимые фоновые) уведомления. Полезно для экономии заряда батареи.</td></tr><tr><td><strong>token_type</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Тип токена устройства; возможные значения см. в разделе <a href="/api/push-updates#subscribing-to-notifications">PUSH-обновления</a>.</td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен устройства; возможные значения см. в разделе <a href="/api/push-updates#subscribing-to-notifications">PUSH-обновления</a>.</td></tr><tr><td><strong>app_sandbox</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Если передано <a href="/constructor/boolTrue">(boolTrue)</a>, при передаче будет использован сертификат песочницы.</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Для FCM и APNS VoIP — необязательный ключ шифрования, используемый для шифрования push-уведомлений</td></tr><tr><td><strong>other_uids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Список идентификаторов других пользователей, работающих с клиентом в данный момент</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TOKEN_EMPTY</td><td>Указанный токен пуст.</td></tr><tr><td>400</td><td>TOKEN_INVALID</td><td>Указанный токен недействителен.</td></tr><tr><td>400</td><td>TOKEN_TYPE_INVALID</td><td>Указанный тип токена недействителен.</td></tr><tr><td>400</td><td>WEBPUSH_AUTH_INVALID</td><td>Указанный секрет аутентификации web push недействителен.</td></tr><tr><td>400</td><td>WEBPUSH_KEY_INVALID</td><td>Указанный открытый ключ Диффи — Хеллмана на эллиптических кривых для web push недействителен.</td></tr><tr><td>400</td><td>WEBPUSH_TOKEN_INVALID</td><td>Указанный токен web push недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Обработка PUSH-уведомлений](/api/push-updates/)

Как подписаться на PUSH-уведомления и обрабатывать их

#### [boolTrue](/constructor/boolTrue/)

Конструктор можно трактовать как **логическое** значение `true`.
