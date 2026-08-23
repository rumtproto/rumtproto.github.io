---
title: "contacts.importedContacts (конструктор)"
original: "https://core.telegram.org/constructor/contacts.importedContacts"
section: ref
kind: constructor
layout: layout.njk
---

# contacts.importedContacts

*Конструктор из схемы TL.*

> Info on successfully imported contacts.

## Определение TL

```
contacts.importedContacts#77d01c3b imported:Vector<ImportedContact> popular_invites:Vector<PopularContact> retry_contacts:Vector<long> users:Vector<User> = contacts.ImportedContacts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| imported | [Vector](https://core.telegram.org/type/Vector%20t)<[ImportedContact](/type/ImportedContact/)> | List of successfully imported contacts |
| popular_invites | [Vector](https://core.telegram.org/type/Vector%20t)<[PopularContact](/type/PopularContact/)> | Popular contacts |
| retry_contacts | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | List of contact ids that could not be imported due to system limitation and will need to be imported at a later date. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | List of users |

## Тип

[contacts.ImportedContacts](/type/contacts.ImportedContacts/)
