---
title: "auth.authorization (конструктор)"
original: "https://core.telegram.org/constructor/auth.authorization"
section: ref
kind: constructor
layout: layout.njk
---

# auth.authorization

*Конструктор из схемы TL.*

> Contains user authorization info.

## Определение TL

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| setup_password_required | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Suggests the user to set up a 2-step verification password to be able to log in again |
| otherwise_relogin_days | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | If and only if setup_password_required is set and the user declines to set a 2-step verification password, they will be able to log into their account via SMS again only after this many days pass. |
| tmp_sessions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Number of [parallel sessions](https://core.telegram.org/api/datacenter#parallel-sessions) the client may open to the main connection of its home DC to increase throughput; if absent or ≤ 1, a single main session must be used |
| future_auth_token | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[bytes](/type/bytes/) | A [future auth token](https://core.telegram.org/api/auth/#future-auth-tokens) |
| user | [User](/type/User/) | Info on authorized user |

## Тип

[auth.Authorization](/type/auth.Authorization/)

## Related pages

#### [Working with Different Data Centers](https://core.telegram.org/api/datacenter)

How to connect to the closest DC access point for faster interaction with the API, and things to watch out for when developing a client.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
