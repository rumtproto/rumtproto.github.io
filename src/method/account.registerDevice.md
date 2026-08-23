---
title: "account.registerDevice (метод)"
original: "https://core.telegram.org/method/account.registerDevice"
section: ref
kind: method
layout: layout.njk
---

# account.registerDevice

*Метод из схемы TL.*

> Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.registerDevice#ec86017a flags:# no_muted:flags.0?true token_type:int token:string app_sandbox:Bool secret:bytes other_uids:Vector<long> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| no_muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Avoid receiving (silent and invisible background) notifications. Useful to save battery. |
| token_type | [int](/type/int/) | Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. |
| token | [string](/type/string/) | Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. |
| app_sandbox | [Bool](/type/Bool/) | If [(boolTrue)](/constructor/boolTrue/) is transmitted, a sandbox-certificate will be used during transmission. |
| secret | [bytes](/type/bytes/) | For FCM and APNS VoIP, optional encryption key used to encrypt push notifications |
| other_uids | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | List of user identifiers of other users currently using the client |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TOKEN_EMPTY | The specified token is empty. |
| 400 | TOKEN_INVALID | The provided token is invalid. |
| 400 | TOKEN_TYPE_INVALID | The specified token type is invalid. |
| 400 | WEBPUSH_AUTH_INVALID | The specified web push authentication secret is invalid. |
| 400 | WEBPUSH_KEY_INVALID | The specified web push elliptic curve Diffie-Hellman public key is invalid. |
| 400 | WEBPUSH_TOKEN_INVALID | The specified web push token is invalid. |

## Related pages

#### [Handling PUSH-notifications](https://core.telegram.org/api/push-updates)

How to subscribe to and handle PUSH notifications

#### [boolTrue](/constructor/boolTrue/)

The constructor can be interpreted as a **boolean**`true` value.
