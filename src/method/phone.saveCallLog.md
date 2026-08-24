---
title: "phone.saveCallLog"
original: "https://core.telegram.org/method/phone.saveCallLog"
section: ref
kind: method
description: "Устарело: отправить отладочную информацию о звонке libtgvoip"
layout: layout.njk
---

# phone.saveCallLog

Устарело: отправить отладочную информацию о звонке libtgvoip

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveCallLog#41248786 peer:InputPhoneCall file:InputFile = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>[@term:peer] Телефонный звонок</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td>Журналы libtgvoip</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_PEER_INVALID</td><td>Указанный объект пира звонка недействителен.</td></tr></tbody></table>
