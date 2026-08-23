---
title: "messageMediaContact (конструктор)"
original: "https://core.telegram.org/constructor/messageMediaContact"
section: ref
kind: constructor
layout: layout.njk
---

# messageMediaContact

*Конструктор из схемы TL.*

> Attached contact.

## Определение TL

```
messageMediaContact#70322949 phone_number:string first_name:string last_name:string vcard:string user_id:long = MessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number |
| first_name | [string](/type/string/) | Contact's first name |
| last_name | [string](/type/string/) | Contact's last name |
| vcard | [string](/type/string/) | VCARD of contact |
| user_id | [long](/type/long/) | User identifier or 0, if the user with the given phone number is not registered |

## Тип

[MessageMedia](/type/MessageMedia/)
