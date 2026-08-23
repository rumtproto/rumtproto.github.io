---
title: "contacts.updateContactNote (метод)"
original: "https://core.telegram.org/method/contacts.updateContactNote"
section: ref
kind: method
layout: layout.njk
---

# contacts.updateContactNote

*Метод из схемы TL.*

> Update the private note associated to a contact; see [here »](https://core.telegram.org/api/contacts#private-notes-for-contacts) for more info.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.updateContactNote#139f63fb id:InputUser note:TextWithEntities = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputUser](/type/InputUser/) | The contact. |
| note | [TextWithEntities](/type/TextWithEntities/) | The note. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CONTACT_ID_INVALID | The provided contact ID is invalid. |
| 400 | CONTACT_MISSING | The specified user is not a contact. |

## Related pages

#### [Contact list](https://core.telegram.org/api/contacts)

Working with contacts.
