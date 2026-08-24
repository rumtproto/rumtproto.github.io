---
title: "contacts.Blocked"
original: "https://core.telegram.org/type/contacts.Blocked"
section: ref
kind: type
description: "Информация о пользователях из чёрного списка текущего пользователя."
layout: layout.njk
---

# contacts.Blocked

Информация о пользователях из чёрного списка текущего пользователя.

```
contacts.blocked#ade1591 blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;

---functions---

contacts.getBlocked#9a868f80 flags:# my_stories_from:flags.0?true offset:int limit:int = contacts.Blocked;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.blocked">contacts.blocked</a></td><td>Полный список заблокированных пользователей.</td></tr><tr><td><a href="/constructor/contacts.blockedSlice">contacts.blockedSlice</a></td><td>Неполный список заблокированных пользователей.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.getBlocked">contacts.getBlocked</a></td><td>Возвращает список заблокированных пользователей.</td></tr></tbody></table>
