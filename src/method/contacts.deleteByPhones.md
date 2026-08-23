---
title: "contacts.deleteByPhones (метод)"
original: "https://core.telegram.org/method/contacts.deleteByPhones"
section: ref
kind: method
layout: layout.njk
---

# contacts.deleteByPhones

*Метод из схемы TL.*

> Delete contacts by phone number

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
contacts.deleteByPhones#1013fd9e phones:Vector<string> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phones | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | Phone numbers |

## Результат

[Bool](/type/Bool/)

## Only users can use this method
