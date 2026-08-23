---
title: "ChatPhoto (тип)"
original: "https://core.telegram.org/type/ChatPhoto"
section: ref
kind: type
layout: layout.njk
---

# ChatPhoto

*Тип из схемы TL.*

> Object defines a group profile photo.

## Определение TL

```
chatPhotoEmpty#37c1011c = ChatPhoto;
chatPhoto#1c6e1c11 flags:# has_video:flags.0?true photo_id:long stripped_thumb:flags.1?bytes dc_id:int = ChatPhoto;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatPhotoEmpty](/constructor/chatPhotoEmpty/) | Group photo is not set. |
| [chatPhoto](/constructor/chatPhoto/) | Group profile photo. |
