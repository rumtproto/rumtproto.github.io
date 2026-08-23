---
title: "contact (конструктор)"
original: "https://core.telegram.org/constructor/contact"
section: ref
kind: constructor
layout: layout.njk
---

# contact

*Конструктор из схемы TL.*

> A contact of the current user that is registered in the system.

## Определение TL

```
contact#145ade0b user_id:long mutual:Bool = Contact;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User identifier |
| mutual | [Bool](/type/Bool/) | Current user is in the user's contact list |

## Тип

[Contact](/type/Contact/)
