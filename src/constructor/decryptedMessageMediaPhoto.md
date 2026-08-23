---
title: "decryptedMessageMediaPhoto (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageMediaPhoto"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageMediaPhoto

*Конструктор из схемы TL.*

> Photo attached to an encrypted message.

## Определение TL

```
===8===
decryptedMessageMediaPhoto#32798a8c thumb:bytes thumb_w:int thumb_h:int w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaPhoto#f1fa8d78 thumb:bytes thumb_w:int thumb_h:int w:int h:int size:int key:bytes iv:bytes caption:string = DecryptedMessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| thumb | [bytes](/type/bytes/) | Content of thumbnail file (JPEGfile, quality 55, set in a square 90x90) |
| thumb_w | [int](/type/int/) | Thumbnail width |
| thumb_h | [int](/type/int/) | Thumbnail height |
| w | [int](/type/int/) | Photo width |
| h | [int](/type/int/) | Photo height |
| size | [int](/type/int/) | Size of the photo in bytes |
| key | [bytes](/type/bytes/) | Key to decrypt an attached file with a full version |
| iv | [bytes](/type/bytes/) | Initialization vector |
| caption | [string](/type/string/) | Caption |

## Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
