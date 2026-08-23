---
title: "account.changeAuthorizationSettings (метод)"
original: "https://core.telegram.org/method/account.changeAuthorizationSettings"
section: ref
kind: method
layout: layout.njk
---

# account.changeAuthorizationSettings

*Метод из схемы TL.*

> Change settings related to a session.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.changeAuthorizationSettings#40f48462 flags:# confirmed:flags.3?true hash:long encrypted_requests_disabled:flags.0?Bool call_requests_disabled:flags.1?Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| confirmed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, [confirms a newly logged in session »](https://core.telegram.org/api/auth/#confirming-login). |
| hash | [long](/type/long/) | Session ID from the [authorization](/constructor/authorization/) constructor, fetchable using [account.getAuthorizations](/method/account.getAuthorizations/) |
| encrypted_requests_disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Bool](/type/Bool/) | Whether to enable or disable receiving encrypted chats: if the flag is not set, the previous setting is not changed |
| call_requests_disabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Bool](/type/Bool/) | Whether to enable or disable receiving calls: if the flag is not set, the previous setting is not changed |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | HASH_INVALID | The provided hash is invalid. |

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [authorization](/constructor/authorization/)

Logged-in session

#### [account.getAuthorizations](/method/account.getAuthorizations/)

Get logged-in sessions
