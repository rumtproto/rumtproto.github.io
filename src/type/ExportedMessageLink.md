---
title: "ExportedMessageLink (тип)"
original: "https://core.telegram.org/type/ExportedMessageLink"
section: ref
kind: type
layout: layout.njk
---

# ExportedMessageLink

*Тип из схемы TL.*

> HTTP link and embed info of channel message

## Определение TL

```
exportedMessageLink#5dab1af4 link:string html:string = ExportedMessageLink;

---functions---

channels.exportMessageLink#e63fadeb flags:# grouped:flags.0?true thread:flags.1?true channel:InputChannel id:int = ExportedMessageLink;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [exportedMessageLink](/constructor/exportedMessageLink/) | Link to a message in a supergroup/channel |

## Методы

| Method | Описание |
|---|---|
| [channels.exportMessageLink](/method/channels.exportMessageLink/) | Get link and embed info of a message in a [channel/supergroup](https://core.telegram.org/api/channel) |
