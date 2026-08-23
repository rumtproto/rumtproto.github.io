---
title: "ExportedContactToken (тип)"
original: "https://core.telegram.org/type/ExportedContactToken"
section: ref
kind: type
layout: layout.njk
---

# ExportedContactToken

*Тип из схемы TL.*

> Describes a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links).

## Определение TL

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;

---functions---

contacts.exportContactToken#f8654027 = ExportedContactToken;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [exportedContactToken](/constructor/exportedContactToken/) | Describes a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). |

## Методы

| Method | Описание |
|---|---|
| [contacts.exportContactToken](/method/contacts.exportContactToken/) | Generates a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links) for the currently logged-in user. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
