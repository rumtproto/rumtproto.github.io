---
title: "auth.requestFirebaseSms (метод)"
original: "https://core.telegram.org/method/auth.requestFirebaseSms"
section: ref
kind: method
layout: layout.njk
---

# auth.requestFirebaseSms

*Метод из схемы TL.*

> Request an SMS code via Firebase.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.requestFirebaseSms#8e39261e flags:# phone_number:string phone_code_hash:string safety_net_token:flags.0?string play_integrity_token:flags.2?string ios_push_secret:flags.1?string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| phone_number | [string](/type/string/) | Phone number |
| phone_code_hash | [string](/type/string/) | Phone code hash returned by [auth.sendCode](/method/auth.sendCode/) |
| safety_net_token | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | On Android, a JWS object obtained as described in the [auth documentation »](/api/auth/) |
| play_integrity_token | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | On Android, an object obtained as described in the [auth documentation »](/api/auth/) |
| ios_push_secret | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Secret token received via an apple push notification |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PHONE_CODE_EMPTY | phone_code is missing. |
| 400 | PHONE_NUMBER_INVALID | The phone number is invalid. |

## Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
