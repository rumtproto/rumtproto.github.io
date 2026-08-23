---
title: "inputPhotoFileLocation (конструктор)"
original: "https://core.telegram.org/constructor/inputPhotoFileLocation"
section: ref
kind: constructor
layout: layout.njk
---

# inputPhotoFileLocation

*Конструктор из схемы TL.*

> Use this object to download a photo with [upload.getFile](/method/upload.getFile/) method

## Определение TL

```
inputPhotoFileLocation#40181ffe id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Photo ID, obtained from the [photo](/constructor/photo/) object |
| access_hash | [long](/type/long/) | Photo's access hash, obtained from the [photo](/constructor/photo/) object |
| file_reference | [bytes](/type/bytes/) | [File reference](https://core.telegram.org/api/file-references) |
| thumb_size | [string](/type/string/) | The [PhotoSize](/type/PhotoSize/) to download: must be set to the type field of the desired PhotoSize object of the [photo](/constructor/photo/) |

## Тип

[InputFileLocation](/type/InputFileLocation/)

## Related pages

#### [photo](/constructor/photo/)

Photo

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.

#### [PhotoSize](/type/PhotoSize/)

Location of a certain size of a picture

#### [upload.getFile](/method/upload.getFile/)

Returns content of a whole file or its part.
