---
title: "messageActionSecureValuesSent (конструктор)"
original: "https://core.telegram.org/constructor/messageActionSecureValuesSent"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionSecureValuesSent

*Конструктор из схемы TL.*

> Request for secure [telegram passport](https://core.telegram.org/passport) values was sent

## Определение TL

```
messageActionSecureValuesSent#d95c6154 types:Vector<SecureValueType> = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| types | [Vector](https://core.telegram.org/type/Vector%20t)<[SecureValueType](/type/SecureValueType/)> | Secure value types |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
