---
title: "auth.sentCodeSuccess (конструктор)"
original: "https://core.telegram.org/constructor/auth.sentCodeSuccess"
section: ref
kind: constructor
layout: layout.njk
---

# auth.sentCodeSuccess

*Конструктор из схемы TL.*

> The user successfully authorized using [future auth tokens](https://core.telegram.org/api/auth/#future-auth-tokens)

## Определение TL

```
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| authorization | [auth.Authorization](/type/auth.Authorization/) | Authorization info |

## Тип

[auth.SentCode](/type/auth.SentCode/)

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
