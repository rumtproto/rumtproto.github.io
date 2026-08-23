---
title: "MessageViews (тип)"
original: "https://core.telegram.org/type/MessageViews"
section: ref
kind: type
layout: layout.njk
---

# MessageViews

*Тип из схемы TL.*

> View, forward counter + info about replies of a specific message

## Определение TL

```
messageViews#455b853d flags:# views:flags.0?int forwards:flags.1?int replies:flags.2?MessageReplies = MessageViews;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messageViews](/constructor/messageViews/) | View, forward counter + info about replies of a specific message |
