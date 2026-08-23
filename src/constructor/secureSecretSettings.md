---
title: "secureSecretSettings (конструктор)"
original: "https://core.telegram.org/constructor/secureSecretSettings"
section: ref
kind: constructor
layout: layout.njk
---

# secureSecretSettings

*Конструктор из схемы TL.*

> Secure settings

## Определение TL

```
secureSecretSettings#1527bcac secure_algo:SecurePasswordKdfAlgo secure_secret:bytes secure_secret_id:long = SecureSecretSettings;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| secure_algo | [SecurePasswordKdfAlgo](/type/SecurePasswordKdfAlgo/) | Secure KDF algo |
| secure_secret | [bytes](/type/bytes/) | Secure secret |
| secure_secret_id | [long](/type/long/) | Secret ID |

## Тип

[SecureSecretSettings](/type/SecureSecretSettings/)
