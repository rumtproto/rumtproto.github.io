---
title: "account.updateDeviceLocked"
original: "https://core.telegram.org/method/account.updateDeviceLocked"
section: ref
kind: method
description: "Если на стороне клиента включена блокировка кодом-паролем, тексты сообщений не будут показываться во входящих PUSH-уведомлениях."
layout: layout.njk
---

# account.updateDeviceLocked

Если на стороне клиента включена блокировка кодом-паролем, тексты сообщений не будут показываться во входящих [PUSH-уведомлениях](/api/push-updates/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateDeviceLocked#38df3532 period:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Период бездействия, после которого следует начать скрывать тексты сообщений в <a href="/api/push-updates">PUSH-уведомлениях</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Обработка PUSH-уведомлений](/api/push-updates/)

Как подписаться на PUSH-уведомления и обрабатывать их
