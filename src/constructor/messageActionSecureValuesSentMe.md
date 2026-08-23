---
title: "messageActionSecureValuesSentMe (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSecureValuesSentMe"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSecureValuesSentMe

*Конструктор из схемы TL.*

> Secure [telegram passport](https://core.telegram.org/passport) values were received

## Определение TL

```
messageActionSecureValuesSentMe#1b287353 values:Vector<SecureValue> credentials:SecureCredentialsEncrypted = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| values | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValue](/type/SecureValue/)> | Vector with information about documents and other Telegram Passport elements that were shared with the bot |
| credentials | [SecureCredentialsEncrypted](/type/SecureCredentialsEncrypted/) | Encrypted credentials required to decrypt the data |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
