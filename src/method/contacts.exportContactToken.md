---
title: "contacts.exportContactToken (метод)"
original: "https://core.telegram.org/method/contacts.exportContactToken"
section: ref
kind: method
layout: layout.njk
---

# contacts.exportContactToken

*Метод из схемы TL.*

> Generates a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links) for the currently logged-in user.

## Определение TL

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;
---functions---
contacts.exportContactToken#f8654027 = ExportedContactToken;
```

## Параметры

This constructor does not require any parameters.

## Результат

[ExportedContactToken](/type/ExportedContactToken/)

## Only users can use this method

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
