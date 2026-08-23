---
title: "users.getRequirementsToContact (метод)"
original: "https://core.telegram.org/method/users.getRequirementsToContact"
section: ref
kind: method
layout: layout.njk
---

# users.getRequirementsToContact

*Метод из схемы TL.*

> Check whether we can write to the specified users, used to implement bulk checks for [Premium-only messages »](https://core.telegram.org/api/privacy#require-premium-for-new-non-contact-users) and [paid messages »](https://core.telegram.org/api/paid-messages).
> For each input user, returns a [RequirementToContact](/type/RequirementToContact/) constructor (at the same offset in the vector) containing requirements to contact them.

## Определение TL

```
---functions---
users.getRequirementsToContact#d89a83a3 id:Vector<InputUser> = Vector<RequirementToContact>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](/type/InputUser/)> | Users to check. |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[RequirementToContact](/type/RequirementToContact/)\>

## Only users can use this method

## Related pages

#### [Privacy settings](https://core.telegram.org/api/privacy)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [RequirementToContact](/type/RequirementToContact/)

Specifies a requirement that must be satisfied in order to contact a user.
