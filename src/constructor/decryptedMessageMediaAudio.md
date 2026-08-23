---
title: "decryptedMessageMediaAudio (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageMediaAudio"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageMediaAudio

*Конструктор из схемы TL.*

> Audio file attached to a secret chat message.

## Определение TL

```
===8===
decryptedMessageMediaAudio#6080758f duration:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===17===
decryptedMessageMediaAudio#57e0a9cb duration:int mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| duration | [int](/type/int/) | Audio duration in seconds |
| size | [int](/type/int/) | File size |
| key | [bytes](/type/bytes/) | Key to decrypt the attached media file |
| iv | [bytes](/type/bytes/) | Initialization vector |
| mime_type | [string](/type/string/) | MIME-type of the audio file Parameter added in Layer 13. |

## Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
