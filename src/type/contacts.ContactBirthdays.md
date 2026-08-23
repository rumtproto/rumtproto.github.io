---
title: "contacts.ContactBirthdays (тип)"
original: "https://core.telegram.org/type/contacts.ContactBirthdays"
section: ref
kind: type
layout: layout.njk
---

# contacts.ContactBirthdays

*Тип из схемы TL.*

> Birthday information of our contacts.

## Определение TL

```
contacts.contactBirthdays#114ff30d contacts:Vector<ContactBirthday> users:Vector<User> = contacts.ContactBirthdays;

---functions---

contacts.getBirthdays#daeda864 = contacts.ContactBirthdays;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [contacts.contactBirthdays](/constructor/contacts.contactBirthdays/) | Birthday information of our contacts. |

## Методы

| Method | Описание |
|---|---|
| [contacts.getBirthdays](/method/contacts.getBirthdays/) | Fetch all users with birthdays that fall within +1/-1 days, relative to the current day: this method should be invoked by clients every 6-8 hours, and if the result is non-empty, it should be used to appropriately update locally cached birthday information in [user](/constructor/user/).birthday. [See here »](https://core.telegram.org/api/profile#birthday) for more info. |
