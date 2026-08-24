---
title: "contacts.found"
original: "https://core.telegram.org/constructor/contacts.found"
section: ref
kind: constructor
description: "Пользователи, найденные по подстроке имени, и вспомогательные данные."
layout: layout.njk
---

# contacts.found

Пользователи, найденные по подстроке имени, и вспомогательные данные.

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>my_results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Персонализированные результаты</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Список найденных идентификаторов пользователей</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Найденные чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Список пользователей</td></tr></tbody></table>

### Тип

[contacts.Found](/type/contacts.Found/)
