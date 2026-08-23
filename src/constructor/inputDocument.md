---
title: "inputDocument (конструктор)"
original: "https://core.telegram.org/constructor/inputDocument"
section: ref
kind: constructor
layout: layout.njk
---

# inputDocument

*Конструктор из схемы TL.*

> Defines a document for subsequent interaction.

## Определение TL

```
inputDocument#1abfb575 id:long access_hash:long file_reference:bytes = InputDocument;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Document ID |
| access_hash | [long](/type/long/) | access_hash parameter from the [document](/constructor/document/) constructor |
| file_reference | [bytes](/type/bytes/) | [File reference](https://core.telegram.org/api/file-references) |

## Тип

[InputDocument](/type/InputDocument/)

## Related pages

#### [document](/constructor/document/)

Document

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.
