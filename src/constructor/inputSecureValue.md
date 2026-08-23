---
title: "inputSecureValue (конструктор)"
original: "https://core.telegram.org/constructor/inputSecureValue"
section: ref
kind: constructor
layout: layout.njk
---

# inputSecureValue

*Конструктор из схемы TL.*

> Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Определение TL

```
inputSecureValue#db21d0a7 flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?InputSecureFile reverse_side:flags.2?InputSecureFile selfie:flags.3?InputSecureFile translation:flags.6?Vector<InputSecureFile> files:flags.4?Vector<InputSecureFile> plain_data:flags.5?SecurePlainData = InputSecureValue;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| type | [SecureValueType](/type/SecureValueType/) | Secure [passport](https://core.telegram.org/passport) value type |
| data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[SecureData](/type/SecureData/) | Encrypted [Telegram Passport](https://core.telegram.org/passport) element data |
| front_side | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[InputSecureFile](/type/InputSecureFile/) | Encrypted [passport](https://core.telegram.org/passport) file with the front side of the document |
| reverse_side | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[InputSecureFile](/type/InputSecureFile/) | Encrypted [passport](https://core.telegram.org/passport) file with the reverse side of the document |
| selfie | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[InputSecureFile](/type/InputSecureFile/) | Encrypted [passport](https://core.telegram.org/passport) file with a selfie of the user holding the document |
| translation | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Vector](https://core.telegram.org/type/Vector%20t)<[InputSecureFile](/type/InputSecureFile/)> | Array of encrypted [passport](https://core.telegram.org/passport) files with translated versions of the provided documents |
| files | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[InputSecureFile](/type/InputSecureFile/)> | Array of encrypted [passport](https://core.telegram.org/passport) files with photos the of the documents |
| plain_data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[SecurePlainData](/type/SecurePlainData/) | Plaintext verified [passport](https://core.telegram.org/passport) data |

## Тип

[InputSecureValue](/type/InputSecureValue/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
