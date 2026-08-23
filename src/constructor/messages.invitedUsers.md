---
title: "messages.invitedUsers (конструктор)"
original: "https://core.telegram.org/constructor/messages.invitedUsers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.invitedUsers

*Конструктор из схемы TL.*

> Contains info about successfully or unsuccessfully [invited »](https://core.telegram.org/api/invites#direct-invites) users.

## Определение TL

```
messages.invitedUsers#7f5defa6 updates:Updates missing_invitees:Vector<MissingInvitee> = messages.InvitedUsers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| updates | [Updates](/type/Updates/) | List of updates about successfully invited users (and eventually info about the created group) |
| missing_invitees | [Vector](https://core.telegram.org/type/Vector%20t)<[MissingInvitee](/type/MissingInvitee/)> | A list of users that could not be invited, along with the reason why they couldn't be invited. |

## Тип

[messages.InvitedUsers](/type/messages.InvitedUsers/)

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
