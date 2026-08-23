---
title: "smsjobs.join (метод)"
original: "https://core.telegram.org/method/smsjobs.join"
section: ref
kind: method
layout: layout.njk
---

# smsjobs.join

*Метод из схемы TL.*

> Enable SMS jobs (official clients only).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.join#a74ece2d = Bool;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | NOT_ELIGIBLE | The current user is not eligible to join the Peer-to-Peer Login Program. |
