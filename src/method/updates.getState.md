---
title: "updates.getState (метод)"
original: "https://core.telegram.org/method/updates.getState"
section: ref
kind: method
layout: layout.njk
---

# updates.getState

*Метод из схемы TL.*

> Returns a current state of updates.

## Определение TL

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;
---functions---
updates.getState#edd4882a = updates.State;
```

## Параметры

This constructor does not require any parameters.

## Результат

[updates.State](/type/updates.State/)

## Both users and bots can use this method
