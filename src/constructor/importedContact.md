---
title: "importedContact (конструктор)"
original: "https://core.telegram.org/constructor/importedContact"
section: ref
kind: constructor
layout: layout.njk
---

# importedContact

*Конструктор из схемы TL.*

> Successfully imported contact.

## Определение TL

```
importedContact#c13e3c50 user_id:long client_id:long = ImportedContact;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User identifier |
| client_id | [long](/type/long/) | The contact's client identifier (passed to one of the [InputContact](/type/InputContact/) constructors) |

## Тип

[ImportedContact](/type/ImportedContact/)

## Related pages

#### [InputContact](/type/InputContact/)

Object defines a contact from the user's phone book.
