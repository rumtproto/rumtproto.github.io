---
title: "decryptedMessageMediaDocument (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageMediaDocument"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageMediaDocument

*Конструктор из схемы TL.*

> Document attached to a message in a secret chat.

## Определение TL

```
===8===
decryptedMessageMediaDocument#b095434b thumb:bytes thumb_w:int thumb_h:int file_name:string mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaDocument#7afe8ae2 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:int key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;

===143===
decryptedMessageMediaDocument#6abd9782 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:long key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| thumb | [bytes](/type/bytes/) | Thumbnail-file contents (JPEG-file, quality 55, set in a 90x90 square) |
| thumb_w | [int](/type/int/) | Thumbnail width |
| thumb_h | [int](/type/int/) | Thumbnail height |
| file_name | [string](/type/string/) | File name, moved to attributes in Layer 45. |
| mime_type | [string](/type/string/) | File MIME-type |
| size | [long](/type/long/) | Document size ([int](/type/int/) on layer <143, [long](/type/long/) on layer >=143) |
| key | [bytes](/type/bytes/) | Key to decrypt the attached document file |
| iv | [bytes](/type/bytes/) | Initialization |
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[DocumentAttribute](/type/DocumentAttribute/)> | Document attributes for media types |
| caption | [string](/type/string/) | Caption |

## Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)

## Related pages

#### [int](/type/int/)

A basic bare type, the values of which correspond to single-element sequences, i.e. numbers from -2^31 to 2^31-1 which in this case represent themselves.

#### [long](/type/long/)

A basic bare type, elements of which correspond to two-element sequences, representing 64-bit signed numbers (little-endian).
