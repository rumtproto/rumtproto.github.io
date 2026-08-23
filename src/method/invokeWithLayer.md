---
title: "invokeWithLayer (метод)"
original: "https://core.telegram.org/method/invokeWithLayer"
section: ref
kind: method
layout: layout.njk
---

# invokeWithLayer

*Метод из схемы TL.*

> Invoke the specified query using the specified API [layer](https://core.telegram.org/api/invoking/#layers)

## Определение TL

```
---functions---
invokeWithLayer#da9b0d0d {X:Type} layer:int query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| layer | [int](/type/int/) | The layer to use |
| query | !X | The query |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | AUTH_BYTES_INVALID | The provided authorization is invalid. |
| 400 | CDN_METHOD_INVALID | You can't call this method in a CDN DC. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | CONNECTION_API_ID_INVALID | The provided API id is invalid. |
| 400 | CONNECTION_LAYER_INVALID | Layer invalid. |
| 406 | INVITE_HASH_EXPIRED | The invite link has expired. |

## Related pages

#### [Calling API Methods](/api/invoking/)

Additional options for calling methods.
