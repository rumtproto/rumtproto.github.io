---
title: "auth.logOut (метод)"
original: "https://core.telegram.org/method/auth.logOut"
section: ref
kind: method
layout: layout.njk
---

# auth.logOut

*Метод из схемы TL.*

> Logs out the user.

## Определение TL

```
auth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;
---functions---
auth.logOut#3e72ba19 = auth.LoggedOut;
```

## Параметры

This constructor does not require any parameters.

## Результат

[auth.LoggedOut](/type/auth.LoggedOut/)

## Both users and bots can use this method
