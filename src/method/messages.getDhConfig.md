---
title: "messages.getDhConfig (метод)"
original: "https://core.telegram.org/method/messages.getDhConfig"
section: ref
kind: method
layout: layout.njk
---

# messages.getDhConfig

*Метод из схемы TL.*

> Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length.

## Определение TL

```
messages.dhConfigNotModified#c0e24635 random:bytes = messages.DhConfig;
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;
---functions---
messages.getDhConfig#26cf8950 version:int random_length:int = messages.DhConfig;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| version | [int](/type/int/) | Value of the version parameter from [messages.dhConfig](/constructor/messages.dhConfig/), available at the client |
| random_length | [int](/type/int/) | Length of the required random sequence |

## Результат

[messages.DhConfig](/type/messages.DhConfig/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | RANDOM_LENGTH_INVALID | Random length invalid. |

## Related pages

#### [messages.dhConfig](/constructor/messages.dhConfig/)

New set of configuring parameters.
