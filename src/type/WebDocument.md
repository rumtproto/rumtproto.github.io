---
title: "WebDocument (тип)"
original: "https://core.telegram.org/type/WebDocument"
section: ref
kind: type
layout: layout.njk
---

# WebDocument

*Тип из схемы TL.*

> Remote document

## Определение TL

```
webDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
webDocumentNoProxy#f9c8bcc6 url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [webDocument](/constructor/webDocument/) | Remote document |
| [webDocumentNoProxy](/constructor/webDocumentNoProxy/) | Remote document that can be downloaded without [proxying through telegram](/api/files/) |
