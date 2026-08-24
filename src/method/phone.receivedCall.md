---
title: "phone.receivedCall"
original: "https://core.telegram.org/method/phone.receivedCall"
section: ref
kind: method
description: "Необязательно: уведомить сервер о том, что пользователь сейчас занят в звонке — это приведёт к автоматическому отклонению всех входящих звонков до завершения текущего; подробнее…"
layout: layout.njk
---

# phone.receivedCall

Необязательно: уведомить сервер о том, что пользователь сейчас занят в звонке — это приведёт к автоматическому отклонению всех входящих звонков до завершения текущего; подробнее обо всём процессе см. [здесь »](/api/calls/#one-to-one-calls).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.receivedCall#17d54f61 peer:InputPhoneCall = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPhoneCall">InputPhoneCall</a></td><td>[@term:peer] Звонок, в котором мы сейчас находимся</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CALL_ALREADY_DECLINED</td><td>Звонок уже был отклонён.</td></tr><tr><td>400</td><td>CALL_PEER_INVALID</td><td>Указанный объект пира звонка недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
