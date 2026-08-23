---
title: "Messages.DhConfig (тип)"
original: "https://core.telegram.org/type/messages.DhConfig"
section: ref
kind: type
layout: layout.njk
---

# Messages.DhConfig

*Тип из схемы TL.*

> Contains Diffie-Hellman key generation protocol parameters.

## Определение TL

```
messages.dhConfigNotModified#c0e24635 random:bytes = messages.DhConfig;
messages.dhConfig#2c221edd g:int p:bytes version:int random:bytes = messages.DhConfig;

---functions---

messages.getDhConfig#26cf8950 version:int random_length:int = messages.DhConfig;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.dhConfigNotModified](/constructor/messages.dhConfigNotModified/) | Configuring parameters did not change. |
| [messages.dhConfig](/constructor/messages.dhConfig/) | New set of configuring parameters. |

## Методы

| Method | Описание |
|---|---|
| [messages.getDhConfig](/method/messages.getDhConfig/) | Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length. |
