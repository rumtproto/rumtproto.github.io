---
title: "contacts.Contacts (тип)"
original: "https://core.telegram.org/type/contacts.Contacts"
section: ref
kind: type
layout: layout.njk
---

# contacts.Contacts

*Тип из схемы TL.*

> Info on the current user's contact list.

## Определение TL

```
contacts.contactsNotModified#b74ba9d2 = contacts.Contacts;
contacts.contacts#eae87e42 contacts:Vector<Contact> saved_count:int users:Vector<User> = contacts.Contacts;

---functions---

contacts.getContacts#5dd69e12 hash:long = contacts.Contacts;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.contactsNotModified](/constructor/contacts.contactsNotModified/) | Contact list on the server is the same as the list on the client. |
| [contacts.contacts](/constructor/contacts.contacts/) | The current user's contact list and info on users. |

## Методы

| Method | Описание |
|---|---|
| [contacts.getContacts](/method/contacts.getContacts/) | Returns the current user's contact list. |
