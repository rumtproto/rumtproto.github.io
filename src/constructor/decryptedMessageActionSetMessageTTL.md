---
title: "decryptedMessageActionSetMessageTTL (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageActionSetMessageTTL"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageActionSetMessageTTL

*Конструктор из схемы TL.*

> Setting of a message lifetime after reading.
> Upon receiving such message the client shall start deleting of all messages of an encrypted chat **ttl\_seconds** seconds after the messages were read by user.

## Определение TL

```
===8===
decryptedMessageActionSetMessageTTL#a1733aec ttl_seconds:int = DecryptedMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| ttl_seconds | [int](/type/int/) | Lifetime in seconds |

## Тип

[DecryptedMessageAction](/type/DecryptedMessageAction/)
