---
title: "MissingInvitee (тип)"
original: "https://core.telegram.org/type/MissingInvitee"
section: ref
kind: type
layout: layout.njk
---

# MissingInvitee

*Тип из схемы TL.*

> Info about why a specific user could not be [invited »](https://core.telegram.org/api/invites#direct-invites).

## Определение TL

```
missingInvitee#628c9224 flags:# premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:long = MissingInvitee;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [missingInvitee](/constructor/missingInvitee/) | Info about why a specific user could not be [invited »](https://core.telegram.org/api/invites#direct-invites). |

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
