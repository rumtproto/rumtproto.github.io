---
title: "contacts.getBirthdays (метод)"
original: "https://core.telegram.org/method/contacts.getBirthdays"
section: ref
kind: method
layout: layout.njk
---

# contacts.getBirthdays

*Метод из схемы TL.*

> Fetch all users with birthdays that fall within +1/-1 days, relative to the current day: this method should be invoked by clients every 6-8 hours, and if the result is non-empty, it should be used to appropriately update locally cached birthday information in [user](/constructor/user/).`birthday`.
> [See here »](https://core.telegram.org/api/profile#birthday) for more info.

## Определение TL

```
contacts.contactBirthdays#114ff30d contacts:Vector<ContactBirthday> users:Vector<User> = contacts.ContactBirthdays;
---functions---
contacts.getBirthdays#daeda864 = contacts.ContactBirthdays;
```

## Параметры

This constructor does not require any parameters.

## Результат

[contacts.ContactBirthdays](/type/contacts.ContactBirthdays/)

## Only users can use this method

## Related pages

#### [user](/constructor/user/)

Indicates info about a certain user.

Unless specified otherwise, when updating the [local peer database](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

See [here »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) for an implementation of the logic to use when updating the [local user peer database](https://core.telegram.org/api/peers).

#### [User profiles](https://core.telegram.org/api/profile)

Telegram offers many customization options for your profile!
