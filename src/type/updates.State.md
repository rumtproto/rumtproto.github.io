---
title: "updates.State (тип)"
original: "https://core.telegram.org/type/updates.State"
section: ref
kind: type
layout: layout.njk
---

# updates.State

*Тип из схемы TL.*

> Object contains info on state for further updates.

## Определение TL

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;

---functions---

updates.getState#edd4882a = updates.State;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [updates.state](/constructor/updates.state/) | Updates state. |

## Методы

| Method | Описание |
|---|---|
| [updates.getState](/method/updates.getState/) | Returns a current state of updates. |
