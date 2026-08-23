---
title: "contacts.contacts (конструктор)"
original: "https://core.telegram.org/constructor/contacts.contacts"
section: ref
kind: constructor
layout: layout.njk
---

# contacts.contacts

*Конструктор из схемы TL.*

> The current user's contact list and info on users.

## Определение TL

```
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| contacts | [Vector](https://core.telegram.org/type/Vector%20t)<[Contact](/type/Contact/)> | Contact list |
| saved_count | [int](/type/int/) | Number of contacts that were saved successfully |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | User list |

## Тип

[contacts.Contacts](/type/contacts.Contacts/)
