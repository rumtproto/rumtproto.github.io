---
title: "pageBlockEmbedPost (конструктор)"
original: "https://core.telegram.org/constructor/pageBlockEmbedPost"
section: ref
kind: constructor
layout: layout.njk
---

# pageBlockEmbedPost

*Конструктор из схемы TL.*

> An embedded post

## Определение TL

```
pageBlockEmbedPost#f259a80b url:string webpage_id:long author_photo_id:long author:string date:int blocks:Vector<PageBlock> caption:PageCaption = PageBlock;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| url | [string](/type/string/) | Web page URL |
| webpage_id | [long](/type/long/) | ID of generated webpage preview |
| author_photo_id | [long](/type/long/) | ID of the author's photo |
| author | [string](/type/string/) | Author name |
| date | [int](/type/int/) | Creation date |
| blocks | [Vector](https://core.telegram.org/type/Vector%20t)<[PageBlock](/type/PageBlock/)> | Post contents |
| caption | [PageCaption](/type/PageCaption/) | Caption |

## Тип

[PageBlock](/type/PageBlock/)
