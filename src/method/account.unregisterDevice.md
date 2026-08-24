---
title: "account.unregisterDevice"
original: "https://core.telegram.org/method/account.unregisterDevice"
section: ref
kind: method
description: "Удаляет устройство по его токену и прекращает отправку на него PUSH-уведомлений."
layout: layout.njk
---

# account.unregisterDevice

Удаляет устройство по его токену и прекращает отправку на него PUSH-уведомлений.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.unregisterDevice#6a0d3206 token_type:int token:string other_uids:Vector<long> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>token_type</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Тип токена устройства; возможные значения см. в разделе <a href="/api/push-updates#subscribing-to-notifications">PUSH-обновления</a>.</td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен устройства; возможные значения см. в разделе <a href="/api/push-updates#subscribing-to-notifications">PUSH-обновления</a>.</td></tr><tr><td><strong>other_uids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Список идентификаторов других пользователей, работающих с клиентом в данный момент</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TOKEN_INVALID</td><td>Указанный токен недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Обработка PUSH-уведомлений](/api/push-updates/)

Как подписаться на PUSH-уведомления и обрабатывать их
