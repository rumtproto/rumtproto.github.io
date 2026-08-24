---
title: "contacts.blockedSlice"
original: "https://core.telegram.org/constructor/contacts.blockedSlice"
section: ref
kind: constructor
description: "Неполный список заблокированных пользователей."
layout: layout.njk
---

# contacts.blockedSlice

Неполный список заблокированных пользователей.

```
contacts.blockedSlice#e1664194 count:int blocked:Vector<PeerBlocked> chats:Vector<Chat> users:Vector<User> = contacts.Blocked;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число элементов в списке</td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PeerBlocked">PeerBlocked</a>&gt;</td><td>Список заблокированных пользователей</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Заблокированные чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей</td></tr></tbody></table>

### Тип

[contacts.Blocked](/type/contacts.Blocked/)
