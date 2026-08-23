---
title: "photo (конструктор)"
original: "https://core.telegram.org/constructor/photo"
section: ref
kind: constructor
layout: layout.njk
---

# photo

*Конструктор из схемы TL.*

> Photo

## Определение TL

```
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_stickers | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the photo has mask stickers attached to it |
| id | [long](/type/long/) | ID |
| access_hash | [long](/type/long/) | Access hash |
| file_reference | [bytes](/type/bytes/) | [file reference](https://core.telegram.org/api/file-references) |
| date | [int](/type/int/) | Date of upload |
| sizes | [Vector](https://core.telegram.org/type/Vector%20t)<[PhotoSize](/type/PhotoSize/)> | Available sizes for download |
| video_sizes | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[VideoSize](/type/VideoSize/)> | [For animated profiles](https://core.telegram.org/api/files/#animated-profile-pictures), the MPEG4 videos |
| dc_id | [int](/type/int/) | DC ID to use for download |

## Тип

[Photo](/type/Photo/)

## Related pages

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
