---
title: "contacts.getContacts (метод)"
original: "https://core.telegram.org/method/contacts.getContacts"
section: ref
kind: method
layout: layout.njk
---

# contacts.getContacts

*Метод из схемы TL.*

> Returns the current user's contact list.

## Определение TL

```
contacts.contactsNotModified#b74ba9d2 = contacts.Contacts;
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;
---functions---
contacts.getContacts#5dd69e12 hash:long = contacts.Contacts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). Note that the hash is computed [using the usual algorithm](https://core.telegram.org/api/offsets#hash-generation), passing to the algorithm first the previously returned [contacts.contacts](/constructor/contacts.contacts/).saved_count field, then max 100000 sorted user IDs from the contact list, including the ID of the currently logged in user if it is saved as a contact. Example: [tdlib implementation](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L7865). |

## Результат

[contacts.Contacts](/type/contacts.Contacts/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [contacts.contacts](/constructor/contacts.contacts/)

The current user's contact list and info on users.
