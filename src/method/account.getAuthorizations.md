---
title: "account.getAuthorizations (метод)"
original: "https://core.telegram.org/method/account.getAuthorizations"
section: ref
kind: method
layout: layout.njk
---

# account.getAuthorizations

*Метод из схемы TL.*

> Get logged-in sessions

## Определение TL

```
account.authorizations#4bff8ea0 authorization_ttl_days:int authorizations:Vector<Authorization> = account.Authorizations;
---functions---
account.getAuthorizations#e320c158 = account.Authorizations;
```

## Параметры

This constructor does not require any parameters.

## Результат

[account.Authorizations](/type/account.Authorizations/)

## Only users can use this method
