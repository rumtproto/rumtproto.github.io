---
title: "photoSize (конструктор)"
original: "https://core.telegram.org/constructor/photoSize"
section: ref
kind: constructor
layout: layout.njk
---

# photoSize

*Конструктор из схемы TL.*

> Image description.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===23===
> photoSize#77bfb61b type:string location:FileLocation w:int h:int size:int = PhotoSize;
> ```
> #### API schema

## Определение TL

```
photoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [string](/type/string/) | [PhotoSize.type value »](https://core.telegram.org/api/files/#photosizetype-values) |
| w | [int](/type/int/) | Image width |
| h | [int](/type/int/) | Image height |
| size | [int](/type/int/) | File size |

## Тип

[PhotoSize](/type/PhotoSize/)

## Photosize.type values

See [PhotoSize.type values »](https://core.telegram.org/api/files/#photosizetype-values).

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
