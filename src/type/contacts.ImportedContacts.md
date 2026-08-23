---
title: "contacts.ImportedContacts (тип)"
original: "https://core.telegram.org/type/contacts.ImportedContacts"
section: ref
kind: type
layout: layout.njk
---

# contacts.ImportedContacts

*Тип из схемы TL.*

> Object contains info on successfully imported contacts.

## Определение TL

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;

---functions---

contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.importedContacts](/constructor/contacts.importedContacts/) | Info on successfully imported contacts. |

## Методы

| Method | Описание |
|---|---|
| [contacts.importContacts](/method/contacts.importContacts/) | Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info. Use [contacts.addContact](/method/contacts.addContact/) to add Telegram contacts without actually using their phone number. |
