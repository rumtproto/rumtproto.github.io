---
title: "phone.GroupParticipants"
original: "https://core.telegram.org/type/phone.GroupParticipants"
section: ref
kind: type
description: "Информация об участниках группового звонка или трансляции"
layout: layout.njk
---

# phone.GroupParticipants

Информация об участниках группового звонка или трансляции

```
phone.groupParticipants#f47751b6 count:int participants:Vector<GroupCallParticipant> next_offset:string chats:Vector<Chat> users:Vector<User> version:int = phone.GroupParticipants;

---functions---

phone.getGroupParticipants#c558d8ab call:InputGroupCall ids:Vector<InputPeer> sources:Vector<int> offset:string limit:int = phone.GroupParticipants;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupParticipants">phone.groupParticipants</a></td><td>Содержит страницу списка участников группового звонка, см. <a href="/api/group-calls#getting-info-about-a-group-call">получение сведений о групповом звонке »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupParticipants">phone.getGroupParticipants</a></td><td>Получить участников <a href="/api/group-calls#getting-info-about-a-group-call">группового звонка</a>.</td></tr></tbody></table>
