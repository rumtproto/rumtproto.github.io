---
title: "missingInvitee (конструктор)"
original: "https://core.telegram.org/constructor/missingInvitee"
section: ref
kind: constructor
layout: layout.njk
---

# missingInvitee

*Конструктор из схемы TL.*

> Info about why a specific user could not be [invited »](https://core.telegram.org/api/invites#direct-invites).

## Определение TL

```
missingInvitee#628c9224 flags:# premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:long = MissingInvitee;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| premium_would_allow_invite | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, we could not add the user only because the current account needs to purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription to complete the operation. |
| premium_required_for_pm | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, we could not add the user because of their privacy settings, and additionally, the current account needs to purchase a [Telegram Premium](https://core.telegram.org/api/premium) subscription to directly share an invite link with the user via a private message. |
| user_id | [long](/type/long/) | ID of the user. If neither of the flags below are set, we could not add the user because of their privacy settings, and we can create and directly share an [invite link](https://core.telegram.org/api/invites#invite-links) with them using a normal message, instead. |

## Тип

[MissingInvitee](/type/MissingInvitee/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
