---
title: "secureValue (конструктор)"
original: "https://core.telegram.org/constructor/secureValue"
section: ref
kind: constructor
layout: layout.njk
---

# secureValue

*Конструктор из схемы TL.*

> Secure value

## Определение TL

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| type | [SecureValueType](/type/SecureValueType/) | Secure [passport](https://core.telegram.org/passport) value type |
| data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[SecureData](/type/SecureData/) | Encrypted [Telegram Passport](https://core.telegram.org/passport) element data |
| front_side | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[SecureFile](/type/SecureFile/) | Encrypted [passport](https://core.telegram.org/passport) file with the front side of the document |
| reverse_side | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[SecureFile](/type/SecureFile/) | Encrypted [passport](https://core.telegram.org/passport) file with the reverse side of the document |
| selfie | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[SecureFile](/type/SecureFile/) | Encrypted [passport](https://core.telegram.org/passport) file with a selfie of the user holding the document |
| translation | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Vector](https://core.telegram.org/type/Vector%20t)<[SecureFile](/type/SecureFile/)> | Array of encrypted [passport](https://core.telegram.org/passport) files with translated versions of the provided documents |
| files | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[SecureFile](/type/SecureFile/)> | Array of encrypted [passport](https://core.telegram.org/passport) files with photos the of the documents |
| plain_data | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[SecurePlainData](/type/SecurePlainData/) | Plaintext verified [passport](https://core.telegram.org/passport) data |
| hash | [bytes](/type/bytes/) | Data hash |

## Тип

[SecureValue](/type/SecureValue/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
