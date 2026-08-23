---
title: "updateReadStories (конструктор)"
original: "https://core.telegram.org/constructor/updateReadStories"
section: ref
kind: constructor
layout: layout.njk
---

# updateReadStories

*Конструктор из схемы TL.*

> Stories of a specific peer were marked as read.

## Определение TL

```
updateReadStories#f74e932b peer:Peer max_id:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | The peer |
| max_id | [int](/type/int/) | ID of the last story that was marked as read |

## Тип

[Update](/type/Update/)
