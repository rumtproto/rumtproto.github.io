---
title: "SecureCredentialsEncrypted (тип)"
original: "https://core.telegram.org/type/SecureCredentialsEncrypted"
section: ref
kind: type
layout: layout.njk
---

# SecureCredentialsEncrypted

*Тип из схемы TL.*

> Encrypted secure credentials

## Определение TL

```
secureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [secureCredentialsEncrypted](/constructor/secureCredentialsEncrypted/) | Encrypted credentials required to decrypt [telegram passport](https://core.telegram.org/passport) data. |
