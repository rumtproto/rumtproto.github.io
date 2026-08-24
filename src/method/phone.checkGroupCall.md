---
title: "phone.checkGroupCall"
original: "https://core.telegram.org/method/phone.checkGroupCall"
section: ref
kind: method
description: "Проверить, какие из указанных идентификаторов источников сервер по-прежнему считает подключёнными к групповому звонку. Этот метод применим ко всем типам групповых звонков,…"
layout: layout.njk
---

# phone.checkGroupCall

Проверить, какие из указанных идентификаторов источников сервер по-прежнему считает подключёнными к групповому звонку. Этот метод применим ко всем типам групповых звонков, подробнее см. [здесь »](/api/group-calls/#maintaining-group-call-connections).

После входа в основное соединение с помощью [phone.joinGroupCall](/method/phone.joinGroupCall/) периодически передавайте этому методу его ненулевой SSRC (идентификатор источника). Если активно также соединение для презентации, включите в вызов отдельный источник, зарегистрированный через [phone.joinGroupCallPresentation](/method/phone.joinGroupCallPresentation/).

Метод возвращает подмножество переданных источников, которые всё ещё участвуют в звонке. Отсутствие источника означает, что соответствующее соединение необходимо создать заново и присоединиться повторно; оно не говорит о том, идёт ли сейчас передача медиапакетов. Если метод возвращает `GROUPCALL_JOIN_MISSING`, необходимо заново присоединиться по основному соединению.

```
---functions---
phone.checkGroupCall#b59cf977 call:InputGroupCall sources:Vector<int> = Vector<int>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок, WebRTC-соединения которого нужно проверить</td></tr><tr><td><strong>sources</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Ненулевые SSRC (идентификаторы источников) основного соединения и соединения для презентации у звонящего</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr><tr><td>400</td><td>GROUPCALL_JOIN_MISSING</td><td>Вы не присоединились к этому групповому звонку.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [phone.joinGroupCall](/method/phone.joinGroupCall/)

Присоединиться к групповому звонку [любого типа »](/api/group-calls/#group-call-types). Для конференций дополнительно требуется [сквозной сценарий подключения »](/api/end-to-end/group-calls/#joining-a-call).

Поле `params` должно содержать полезную нагрузку для входа, сформированную локальным движком групповых звонков tgcalls. Она содержит случайный ненулевой аудио-`ssrc`, ICE-значения `ufrag` и `pwd`, DTLS-`fingerprints`, а при публикации видео — ещё и `ssrc-groups`.

Например, полезная нагрузка для входа без публикации видео имеет следующий вид:

```
{
  "ssrc": 123456789,
  "ufrag": "...",
  "pwd": "...",
  "fingerprints": [{
    "hash": "sha-256",
    "fingerprint": "...",
    "setup": "passive"
  }]
}
```

При подключении к звонку в режиме RTMP формируйте полезную нагрузку без групп публикуемых видеоисточников.

#### [phone.joinGroupCallPresentation](/method/phone.joinGroupCallPresentation/)

Начать демонстрацию экрана в видеочате, трансляции или конференции без RTMP. Презентации не поддерживаются в прямых историях и в видеочатах или трансляциях в режиме RTMP; подробнее см. [здесь »](/api/group-calls/#presentations).
