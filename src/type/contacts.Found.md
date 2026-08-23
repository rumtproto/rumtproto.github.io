---
title: "contacts.Found (тип)"
original: "https://core.telegram.org/type/contacts.Found"
section: ref
kind: type
layout: layout.njk
---

# contacts.Found

*Тип из схемы TL.*

> Object contains info on users found by name substring and auxiliary data.

## Определение TL

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;

---functions---

contacts.search#11f812d8 q:string limit:int = contacts.Found;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.found](/constructor/contacts.found/) | Users found by name substring and auxiliary data. |

## Методы

| Method | Описание |
|---|---|
| [contacts.search](/method/contacts.search/) | Returns users found by username substring. |
