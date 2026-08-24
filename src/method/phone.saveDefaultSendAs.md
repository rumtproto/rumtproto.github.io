---
title: "phone.saveDefaultSendAs"
original: "https://core.telegram.org/method/phone.saveDefaultSendAs"
section: ref
kind: method
description: "Сохранить пир, отображаемый по умолчанию как автор комментариев и реакций в прямых историях, см. сообщения во время звонка »."
layout: layout.njk
---

# phone.saveDefaultSendAs

Сохранить пир, отображаемый по умолчанию как автор комментариев и реакций в прямых историях, см. [сообщения во время звонка »](/api/group-calls/#in-call-messages).

Его нельзя использовать для обычных видеочатов и трансляций, где сообщения во время звонка отправляются от имени пира, использованного для присоединения (`join_as`).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.saveDefaultSendAs#4167add1 call:InputGroupCall send_as:InputPeer = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок прямой истории</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир, который будет отображаться как автор последующих комментариев и реакций</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
