---
title: "contacts.getContactIDs (метод)"
original: "https://core.telegram.org/method/contacts.getContactIDs"
section: ref
kind: method
layout: layout.njk
---

# contacts.getContactIDs

*Метод из схемы TL.*

> Get the telegram IDs of all contacts.  
> Returns an array of Telegram user IDs for all contacts (0 if a contact does not have an associated Telegram account or have hidden their account using privacy settings).

## Определение TL

```
---functions---
contacts.getContactIDs#7adc669d hash:long = Vector<int>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)\>

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
