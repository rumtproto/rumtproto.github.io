---
title: "InputChatPhoto (тип)"
original: "https://core.telegram.org/type/InputChatPhoto"
section: ref
kind: type
layout: layout.njk
---

# InputChatPhoto

*Тип из схемы TL.*

> Defines a new group profile photo.

## Определение TL

```
inputChatPhotoEmpty#1ca48f57 = InputChatPhoto;
inputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;
inputChatPhoto#8953ad37 id:InputPhoto = InputChatPhoto;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputChatPhotoEmpty](/constructor/inputChatPhotoEmpty/) | Empty constructor, remove group photo. |
| [inputChatUploadedPhoto](/constructor/inputChatUploadedPhoto/) | New photo to be set as group profile photo. The file, video and video_emoji_markup flags are mutually exclusive. |
| [inputChatPhoto](/constructor/inputChatPhoto/) | Existing photo to be set as a chat profile photo. |
