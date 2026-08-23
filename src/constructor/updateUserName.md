---
title: "updateUserName (конструктор)"
original: "https://core.telegram.org/constructor/updateUserName"
section: ref
kind: constructor
layout: layout.njk
---

# updateUserName

*Конструктор из схемы TL.*

> Changes the user's first name, last name and username.

## Определение TL

```
updateUserName#a7848924 user_id:long first_name:string last_name:string usernames:Vector<Username> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [long](/type/long/) | User identifier |
| first_name | [string](/type/string/) | New first name. Corresponds to the new value of real_first_name field of the [userFull](/constructor/userFull/) constructor. |
| last_name | [string](/type/string/) | New last name. Corresponds to the new value of real_last_name field of the [userFull](/constructor/userFull/) constructor. |
| usernames | [Vector](https://core.telegram.org/type/Vector%20t)<[Username](/type/Username/)> | Usernames. |

## Тип

[Update](/type/Update/)

## Related pages

#### [userFull](/constructor/userFull/)

Extended user info

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).
