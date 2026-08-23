---
title: "contacts.getSaved (метод)"
original: "https://core.telegram.org/method/contacts.getSaved"
section: ref
kind: method
layout: layout.njk
---

# contacts.getSaved

*Метод из схемы TL.*

> Get all contacts, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout).

## Определение TL

```
---functions---
contacts.getSaved#82f1e39f = Vector<SavedContact>;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[SavedContact](/type/SavedContact/)\>

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TAKEOUT_INVALID | The specified takeout ID is invalid. |
| 403 | TAKEOUT_REQUIRED | A [takeout](https://core.telegram.org/api/takeout) session needs to be initialized first, [see here » for more info](https://core.telegram.org/api/takeout). |

## Related pages

#### [Takeout API](https://core.telegram.org/api/takeout)

Telegram's API allows users to export all of their information through the takeout API.
