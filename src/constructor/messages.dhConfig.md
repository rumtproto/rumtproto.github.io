---
title: "messages.dhConfig (конструктор)"
original: "https://core.telegram.org/constructor/messages.dhConfig"
section: ref
kind: constructor
layout: layout.njk
---

# messages.dhConfig

*Конструктор из схемы TL.*

> New set of configuring parameters.

## Определение TL

```
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| g | [int](/type/int/) | New value primitive root, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |
| p | [bytes](/type/bytes/) | New value prime, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) |
| version | [int](/type/int/) | Version of set of parameters |
| random | [bytes](/type/bytes/) | Random sequence of bytes of assigned length |

## Тип

[messages.DhConfig](/type/messages.DhConfig/)
