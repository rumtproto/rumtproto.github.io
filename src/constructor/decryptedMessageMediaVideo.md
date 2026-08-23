---
title: "decryptedMessageMediaVideo (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageMediaVideo"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageMediaVideo

*Конструктор из схемы TL.*

> Video attached to an encrypted message.

## Определение TL

```
===8===
decryptedMessageMediaVideo#4cee6ef3 thumb:bytes thumb_w:int thumb_h:int duration:int w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===17===
decryptedMessageMediaVideo#524a415d thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===45===
decryptedMessageMediaVideo#970c8c0e thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes caption:string = DecryptedMessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| thumb | [bytes](/type/bytes/) | Content of thumbnail file (JPEG file, quality 55, set in a square 90x90) |
| thumb_w | [int](/type/int/) | Thumbnail width |
| thumb_h | [int](/type/int/) | Thumbnail height |
| duration | [int](/type/int/) | Duration of video in seconds |
| w | [int](/type/int/) | Image width |
| h | [int](/type/int/) | Image height |
| size | [int](/type/int/) | File size |
| key | [bytes](/type/bytes/) | Key to decrypt the attached video file |
| iv | [bytes](/type/bytes/) | Initialization vector |
| mime_type | [string](/type/string/) | MIME-type of the video file Parameter added in Layer 17. |
| caption | [string](/type/string/) | Caption |

## Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
