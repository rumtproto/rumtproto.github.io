---
title: "smsjobs.leave (метод)"
original: "https://core.telegram.org/method/smsjobs.leave"
section: ref
kind: method
layout: layout.njk
---

# smsjobs.leave

*Метод из схемы TL.*

> Disable SMS jobs (official clients only).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
smsjobs.leave#9898ad73 = Bool;
```

## Параметры

This constructor does not require any parameters.

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | NOT_JOINED | The current user hasn't joined the Peer-to-Peer Login Program. |
