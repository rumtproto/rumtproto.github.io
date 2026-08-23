---
title: "inputDocumentFileLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputDocumentFileLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputDocumentFileLocation

*Конструктор из схемы TL.*

> Document location (video, voice, audio, basically every type except photo)

## Определение TL

```
inputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Document ID |
| access_hash | [long](/type/long/) | access_hash parameter from the [document](/constructor/document/) constructor |
| file_reference | [bytes](/type/bytes/) | [File reference](https://core.telegram.org/api/file-references) |
| thumb_size | [string](/type/string/) | Thumbnail size to download the thumbnail |

## Тип

[InputFileLocation](/type/InputFileLocation/)

## Related pages

#### [document](/constructor/document/)

Document

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.
