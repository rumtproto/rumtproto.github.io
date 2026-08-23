---
title: "contacts.importContacts (метод)"
original: "https://core.telegram.org/method/contacts.importContacts"
section: ref
kind: method
layout: layout.njk
---

# contacts.importContacts

*Метод из схемы TL.*

> Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.
> Use [contacts.addContact](/method/contacts.addContact/) to add Telegram contacts without actually using their phone number.

## Определение TL

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;
---functions---
contacts.importContacts#2c800be5 contacts:Vector<InputContact> = contacts.ImportedContacts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| contacts | [Vector](https://core.telegram.org/type/Vector%20t)<[InputContact](/type/InputContact/)> | List of contacts to import |

## Результат

[contacts.ImportedContacts](/type/contacts.ImportedContacts/)

## Only users can use this method

## Related pages

#### [contacts.addContact](/method/contacts.addContact/)

Add an existing telegram user as contact.

Use [contacts.importContacts](/method/contacts.importContacts/) to add contacts by phone number, without knowing their Telegram ID.
