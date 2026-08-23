---
title: "codeSettings (конструктор)"
original: "https://core.telegram.org/constructor/codeSettings"
section: ref
kind: constructor
layout: layout.njk
---

# codeSettings

*Конструктор из схемы TL.*

> Settings used by telegram servers for sending the confirm code.
> Example implementations: [telegram for android](https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java), [tdlib](https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp).

## Определение TL

```
codeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| allow_flashcall | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to allow phone verification via [phone calls](/api/auth/). |
| current_number | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Pass true if the phone number is used on the current device. Ignored if allow_flashcall is not set. |
| allow_app_hash | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If a token that will be included in eventually sent SMSs is required: required in newer versions of android, to use the [android SMS receiver APIs](https://developers.google.com/identity/sms-retriever/overview) |
| allow_missed_call | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether this device supports receiving the code using the [auth.codeTypeMissedCall](/constructor/auth.codeTypeMissedCall/) method |
| allow_firebase | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether Firebase auth is supported |
| unknown_number | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Set this flag if there is a SIM card in the current device, but it is not possible to check whether the specified phone number matches the SIM's phone number. |
| logout_tokens | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Vector](https://core.telegram.org/type/Vector%20t)<[bytes](/type/bytes/)> | Previously stored future auth tokens, see [the documentation for more info »](https://core.telegram.org/api/auth/#future-auth-tokens) |
| token | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[string](/type/string/) | Used only by official iOS apps for Firebase auth: device token for apple push. |
| app_sandbox | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[Bool](/type/Bool/) | Used only by official iOS apps for firebase auth: whether a sandbox-certificate will be used during transmission of the push notification. |

## Тип

[CodeSettings](/type/CodeSettings/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.

#### [auth.codeTypeMissedCall](/constructor/auth.codeTypeMissedCall/)

The next time, the authentication code will be delivered via an immediately canceled incoming call, handled manually by the user.
