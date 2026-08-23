---
title: "Photo (тип)"
original: "https://core.telegram.org/type/Photo"
section: ref
kind: type
layout: layout.njk
---

# Photo

*Тип из схемы TL.*

> Object describes a photo.

## Определение TL

```
photoEmpty#2331b22d id:long = Photo;
photo#fb197a65 flags:# has_stickers:flags.0?true id:long access_hash:long file_reference:bytes date:int sizes:Vector<PhotoSize> video_sizes:flags.1?Vector<VideoSize> dc_id:int = Photo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [photoEmpty](/constructor/photoEmpty/) | Empty constructor, non-existent photo |
| [photo](/constructor/photo/) | Photo |
