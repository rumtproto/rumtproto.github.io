---
title: "phone.getGroupParticipants"
original: "https://core.telegram.org/method/phone.getGroupParticipants"
section: ref
kind: method
description: "Получить участников группового звонка."
layout: layout.njk
---

# phone.getGroupParticipants

Получить участников [группового звонка](/api/group-calls/#getting-info-about-a-group-call).

```
phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;
---functions---
phone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Групповой звонок, участников которого нужно получить</td></tr><tr><td><strong>ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>Если указано, будет получена информация об участниках группы для указанных пиров</td></tr><tr><td><strong>sources</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Если указано, будет получена информация об участниках группы для указанных идентификаторов источников WebRTC</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:next_offset] Смещение для результатов, берётся из поля <code>next_offset</code> конструктора <a href="/constructor/phone.groupParticipants">phone.groupParticipants</a> или из поля <code>participants_next_offset</code> конструктора <a href="/constructor/phone.groupCall">phone.groupCall</a>; изначально — пустая строка.<br>Примечание: если больше результатов нет, вызов метода вернёт пустое поле <code>next_offset</code>; поэтому не передавайте значение <code>next_offset</code>, возвращённое в <a href="/constructor/phone.groupParticipants">phone.groupParticipants</a>, если оно пустое, — иначе возникнет бесконечный цикл.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[phone.GroupParticipants](/type/phone.GroupParticipants/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [phone.groupParticipants](/constructor/phone.groupParticipants/)

Содержит страницу списка участников группового звонка, см. [получение сведений о групповом звонке »](/api/group-calls/#getting-info-about-a-group-call).

#### [phone.groupCall](/constructor/phone.groupCall/)

Содержит информацию о групповом звонке и первую страницу списка участников, см. [получение информации о групповом звонке »](/api/group-calls/#getting-info-about-a-group-call).

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
