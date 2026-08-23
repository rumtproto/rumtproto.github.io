---
title: "contacts.found (конструктор)"
original: "https://core.telegram.org/constructor/contacts.found"
section: ref
kind: constructor
layout: layout.njk
---

# contacts.found

*Конструктор из схемы TL.*

> Users found by name substring and auxiliary data.

## Определение TL

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| my_results | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | Personalized results |
| results | [Vector](https://core.telegram.org/type/Vector%20t)<[Peer](/type/Peer/)> | List of found user identifiers |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Found chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users |

## Тип

[contacts.Found](/type/contacts.Found/)
