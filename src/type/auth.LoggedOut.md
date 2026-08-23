---
title: "auth.LoggedOut (тип)"
original: "https://core.telegram.org/type/auth.LoggedOut"
section: ref
kind: type
layout: layout.njk
---

# auth.LoggedOut

*Тип из схемы TL.*

> [Future auth token »](https://core.telegram.org/api/auth/#future-auth-tokens) to be used on subsequent authorizations

## Определение TL

```
auth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;

---functions---

auth.logOut#3e72ba19 = auth.LoggedOut;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [auth.loggedOut](/constructor/auth.loggedOut/) | [Future auth token »](https://core.telegram.org/api/auth/#future-auth-tokens) to be used on subsequent authorizations |

## Методы

| Method | Описание |
|---|---|
| [auth.logOut](/method/auth.logOut/) | Logs out the user. |

## Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
