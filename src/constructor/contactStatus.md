---
title: "contactStatus (конструктор)"
original: "https://core.telegram.org/constructor/contactStatus"
section: ref
kind: constructor
layout: layout.njk
---

# contactStatus

*Конструктор из схемы TL.*

> Contact status: online / offline.

## Определение TL

```
contactStatus#16d9703b user_id:long status:UserStatus = ContactStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User identifier |
| status | [UserStatus](/type/UserStatus/) | Online status |

## Тип

[ContactStatus](/type/ContactStatus/)
