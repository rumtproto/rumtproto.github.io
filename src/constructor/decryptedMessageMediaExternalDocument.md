---
title: "decryptedMessageMediaExternalDocument (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageMediaExternalDocument"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageMediaExternalDocument

*Конструктор из схемы TL.*

> Non-e2e documented forwarded from non-secret chat

## Определение TL

```
===23===
decryptedMessageMediaExternalDocument#fa95b0dd id:long access_hash:long date:int mime_type:string size:int thumb:PhotoSize dc_id:int attributes:Vector<DocumentAttribute> = DecryptedMessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Document ID |
| access_hash | [long](/type/long/) | access hash |
| date | [int](/type/int/) | Date |
| mime_type | [string](/type/string/) | Mime type |
| size | [int](/type/int/) | Size |
| thumb | [PhotoSize](/type/PhotoSize/) | Thumbnail |
| dc_id | [int](/type/int/) | DC ID |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[DocumentAttribute](/type/DocumentAttribute/)> | Attributes for media types |

## Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
