---
title: "phone.GroupCall"
original: "https://core.telegram.org/type/phone.GroupCall"
section: ref
kind: type
description: "Содержит информацию о групповом звонке и частичную информацию о его участниках."
layout: layout.njk
---

# phone.GroupCall

Содержит информацию о групповом звонке и частичную информацию о его участниках.

```
phone.groupCall#9e727aad call:GroupCall participants:Vector<GroupCallParticipant> participants_next_offset:string chats:Vector<Chat> users:Vector<User> = phone.GroupCall;

---functions---

phone.getGroupCall#41845db call:InputGroupCall limit:int = phone.GroupCall;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCall">phone.groupCall</a></td><td>Содержит информацию о групповом звонке и первую страницу списка участников, см. <a href="/api/group-calls#getting-info-about-a-group-call">получение информации о групповом звонке »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCall">phone.getGroupCall</a></td><td>Получить информацию о <a href="/api/group-calls#getting-info-about-a-group-call">групповом звонке</a> и его участниках.</td></tr></tbody></table>
