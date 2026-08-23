---
title: "inputPhoneContact (конструктор)"
original: "https://core.telegram.org/constructor/inputPhoneContact"
section: ref
kind: constructor
layout: layout.njk
---

# inputPhoneContact

*Конструктор из схемы TL.*

> Phone contact.

## Определение TL

```
inputPhoneContact#6a1dc4be flags:# client_id:long phone:string first_name:string last_name:string note:flags.0?TextWithEntities = InputContact;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| client_id | [long](/type/long/) | An arbitrary 64-bit integer: it should be set, for example, to an incremental number when using [contacts.importContacts](/method/contacts.importContacts/), in order to retry importing only the contacts that weren't imported successfully, according to the client_ids returned in [contacts.importedContacts](/constructor/contacts.importedContacts/).retry_contacts. |
| phone | [string](/type/string/) | Phone number |
| first_name | [string](/type/string/) | Contact's first name |
| last_name | [string](/type/string/) | Contact's last name |
| note | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[TextWithEntities](/type/TextWithEntities/) | A private note for this contact, only visible to us; see [here »](https://core.telegram.org/api/contacts#private-notes-for-contacts) for more info on contact notes. |

## Тип

[InputContact](/type/InputContact/)

## Related pages

#### [contacts.importContacts](/method/contacts.importContacts/)

Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info.

Use [contacts.addContact](/method/contacts.addContact/) to add Telegram contacts without actually using their phone number.

#### [contacts.importedContacts](/constructor/contacts.importedContacts/)

Info on successfully imported contacts.

#### [Contact list](https://core.telegram.org/api/contacts)

Working with contacts.
