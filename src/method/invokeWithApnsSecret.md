---
title: "invokeWithApnsSecret (метод)"
original: "https://core.telegram.org/method/invokeWithApnsSecret"
section: ref
kind: method
layout: layout.njk
---

# invokeWithApnsSecret

*Метод из схемы TL.*

> Official clients only, invoke with Apple push verification.

## Определение TL

```
---functions---
invokeWithApnsSecret#0dae54f8 {X:Type} nonce:string secret:string query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| nonce | [string](/type/string/) | Nonce. |
| secret | [string](/type/string/) | Secret. |
| query | !X | Query. |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method
