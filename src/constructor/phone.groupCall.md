---
title: "phone.groupCall"
original: "https://core.telegram.org/constructor/phone.groupCall"
section: ref
kind: constructor
description: "Содержит информацию о групповом звонке и первую страницу списка участников, см. получение информации о групповом звонке »."
layout: layout.njk
---

# phone.groupCall

Содержит информацию о групповом звонке и первую страницу списка участников, см. [получение информации о групповом звонке »](/api/group-calls/#getting-info-about-a-group-call).

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/GroupCall">GroupCall</a></td><td>Информация о групповом звонке</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallParticipant">GroupCallParticipant</a>&gt;</td><td>Неполный список участников.</td></tr><tr><td><strong>participants_next_offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Следующее смещение, которое следует использовать при загрузке остальных участников методом <a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a></td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Чаты, упомянутые в векторе участников</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Пользователи, упомянутые в векторе участников</td></tr></tbody></table>

### Тип

[phone.GroupCall](/type/phone.GroupCall/)

### Связанные страницы

#### [phone.getGroupParticipants](/method/phone.getGroupParticipants/)

Получить участников [группового звонка](/api/group-calls/#getting-info-about-a-group-call).

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.
