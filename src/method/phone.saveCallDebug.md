---
title: "phone.saveCallDebug"
original: "https://core.telegram.org/method/phone.saveCallDebug"
section: ref
kind: method
description: "Отправить на сервер отладочные данные звонка."
layout: layout.njk
---

# phone.saveCallDebug

Отправить на сервер отладочные данные [звонка](/api/calls/#call-debug).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveCallDebug#277add7e peer:InputPhoneCall debug:DataJSON = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>[@term:peer] Телефонный звонок</td></tr><tr><td><strong>debug</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Отладочная статистика, полученная от tgcalls</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_PEER_INVALID</td><td>Указанный объект пира звонка недействителен.</td></tr><tr><td>400</td><td>DATA_JSON_INVALID</td><td>Указанные данные JSON недействительны.</td></tr></tbody></table>

### Связанные страницы

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
