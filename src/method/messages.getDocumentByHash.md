---
title: "messages.getDocumentByHash (метод)"
original: "https://core.telegram.org/method/messages.getDocumentByHash"
section: ref
kind: method
layout: layout.njk
---

# messages.getDocumentByHash

*Метод из схемы TL.*

> Get a document by its SHA256 hash, mainly used for gifs

## Определение TL

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
messages.getDocumentByHash#b1f2061f sha256:bytes size:long mime_type:string = Document;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| sha256 | [bytes](/type/bytes/) | SHA256 of file |
| size | [long](/type/long/) | Size of the file in bytes |
| mime_type | [string](/type/string/) | Mime type |

## Результат

[Document](/type/Document/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SHA256_HASH_INVALID | The provided SHA256 hash is invalid. |
