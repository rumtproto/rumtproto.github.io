---
title: "document (конструктор)"
original: "https://core.telegram.org/constructor/document"
section: ref
kind: constructor
layout: layout.njk
---

# document

*Конструктор из схемы TL.*

> Document

## Определение TL

```
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [long](/type/long/) | Document ID |
| access_hash | [long](/type/long/) | Check sum, dependent on document ID |
| file_reference | [bytes](/type/bytes/) | [File reference](https://core.telegram.org/api/file-references) |
| date | [int](/type/int/) | Creation date |
| mime_type | [string](/type/string/) | MIME type |
| size | [long](/type/long/) | Size |
| thumbs | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[PhotoSize](/type/PhotoSize/)> | Thumbnails |
| video_thumbs | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[VideoSize](/type/VideoSize/)> | Video thumbnails |
| dc_id | [int](/type/int/) | DC ID |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[DocumentAttribute](/type/DocumentAttribute/)> | Attributes |

## Тип

[Document](/type/Document/)

## Related pages

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.
