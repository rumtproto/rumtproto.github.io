---
title: "auth.sentCodeTypeFirebaseSms (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFirebaseSms"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeTypeFirebaseSms

*Конструктор из схемы TL.*

> An authentication code should be delivered via SMS after Firebase attestation, as described in the [auth documentation »](/api/auth/).

## Определение TL

```
auth.sentCodeTypeFirebaseSms#9fd736 flags:# nonce:flags.0?bytes play_integrity_project_id:flags.2?long play_integrity_nonce:flags.2?bytes receipt:flags.1?string push_timeout:flags.1?int length:int = auth.SentCodeType;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| nonce | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | On Android, the nonce to be used as described in the [auth documentation »](/api/auth/) |
| play_integrity_project_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | Google Play Integrity project ID |
| play_integrity_nonce | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[bytes](/type/bytes/) | Play Integrity API nonce |
| receipt | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | On iOS, must be compared with the receipt extracted from the received push notification. |
| push_timeout | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | On iOS: if a push notification with the ios_push_secret isn't received within push_timeout seconds, the next_type authentication method must be used, with [auth.resendCode](/method/auth.resendCode/). |
| length | [int](/type/int/) | Length of the code that will be delivered. |

## Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [auth.resendCode](/method/auth.resendCode/)

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info.
