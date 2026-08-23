---
title: "userStatusLastWeek (конструктор)"
original: "https://core.telegram.org/constructor/userStatusLastWeek"
section: ref
kind: constructor
layout: layout.njk
---

# userStatusLastWeek

*Конструктор из схемы TL.*

> Online status: last seen last week

## Определение TL

```
userStatusLastWeek#541a1d1a flags:# by_me:flags.0?true = UserStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| by_me | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the exact user status of this user is actually available to us, but to view it we must first purchase a [Premium](https://core.telegram.org/api/premium) subscription, or allow this user to see our exact last online status. See [here »](/constructor/privacyKeyStatusTimestamp/) for more info. |

## Тип

[UserStatus](/type/UserStatus/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [privacyKeyStatusTimestamp](/constructor/privacyKeyStatusTimestamp/)

Whether we can see the last online timestamp of this user.

Note that if _we_ decide to hide our exact last online timestamp to someone (i.e., users A, B, C, or all users) **and** we do not have a [Premium](https://core.telegram.org/api/premium) subscription, we won't be able to see the exact last online timestamp of those users (A, B, C, or all users), even if those users _do_ share it with us.

If those users _do_ share their exact online status with us, but we can't see it due to the reason mentioned above, the `by_me` flag of [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/) will be set.
