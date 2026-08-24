---
title: "contacts.Found"
original: "https://core.telegram.org/type/contacts.Found"
section: ref
kind: type
description: "Объект содержит информацию о пользователях, найденных по подстроке имени, и вспомогательные данные."
layout: layout.njk
---

# contacts.Found

Объект содержит информацию о пользователях, найденных по подстроке имени, и вспомогательные данные.

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;

---functions---

contacts.search#11f812d8 q:string limit:int = contacts.Found;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.found">contacts.found</a></td><td>Пользователи, найденные по подстроке имени, и вспомогательные данные.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/contacts.search">contacts.search</a></td><td>Возвращает пользователей, найденных по подстроке имени пользователя.</td></tr></tbody></table>
