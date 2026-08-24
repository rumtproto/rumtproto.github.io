---
title: "phone.sendSignalingData"
original: "https://core.telegram.org/method/phone.sendSignalingData"
section: ref
kind: method
description: "Отправить сигнальные данные VoIP для текущего звонка."
layout: layout.njk
---

# phone.sendSignalingData

Отправить [сигнальные данные](/api/calls/#signaling-data) VoIP для текущего звонка.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.sendSignalingData#ff7a9383 peer:InputPhoneCall data:bytes = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>[@term:peer] Телефонный звонок</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Сигнальные данные</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_NOT_ACTIVE</td><td>Указанный звонок не активен.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>Указанный объект пира звонка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
