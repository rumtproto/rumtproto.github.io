---
title: "invokeWithGooglePlayIntegrity (метод)"
original: "https://core.telegram.org/method/invokeWithGooglePlayIntegrity"
section: ref
kind: method
layout: layout.njk
---

# invokeWithGooglePlayIntegrity

*Метод из схемы TL.*

> Official clients only, invoke with Google Play Integrity token.

## Определение TL

```
---functions---
invokeWithGooglePlayIntegrity#1df92984 {X:Type} nonce:string token:string query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| nonce | [string](/type/string/) | Nonce. |
| token | [string](/type/string/) | Token. |
| query | !X | Query. |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method
