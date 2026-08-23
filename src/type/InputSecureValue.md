---
title: "InputSecureValue (тип)"
original: "https://core.telegram.org/type/InputSecureValue"
section: ref
kind: type
layout: layout.njk
---

# InputSecureValue

*Тип из схемы TL.*

> Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

## Определение TL

```
inputSecureValue#db21d0a7 flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?InputSecureFile reverse_side:flags.2?InputSecureFile selfie:flags.3?InputSecureFile translation:flags.6?Vector<InputSecureFile> files:flags.4?Vector<InputSecureFile> plain_data:flags.5?SecurePlainData = InputSecureValue;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputSecureValue](/constructor/inputSecureValue/) | Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) |

## Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
