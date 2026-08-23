---
title: "help.getSupportName (метод)"
original: "https://core.telegram.org/method/help.getSupportName"
section: ref
kind: method
layout: layout.njk
---

# help.getSupportName

*Метод из схемы TL.*

> Get localized name of the telegram support user

## Определение TL

```
help.supportName#8c05f1c9 name:string = help.SupportName;
---functions---
help.getSupportName#d360e72c = help.SupportName;
```

## Параметры

This constructor does not require any parameters.

## Результат

[help.SupportName](/type/help.SupportName/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | USER_INVALID | Invalid user provided. |
