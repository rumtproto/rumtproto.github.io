---
title: "chatPhoto (конструктор)"
original: "https://core.telegram.org/constructor/chatPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# chatPhoto

*Конструктор из схемы TL.*

> Group profile photo.

## Определение TL

```
chatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_video | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the user has an animated profile picture |
| photo_id | [long](/type/long/) | Photo ID |
| stripped_thumb | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[bytes](/type/bytes/) | [Stripped thumbnail](https://core.telegram.org/api/files/#stripped-thumbnails) |
| dc_id | [int](/type/int/) | DC where this photo is stored |

## Тип

[ChatPhoto](/type/ChatPhoto/)

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
