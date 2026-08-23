---
title: "photoCachedSize (конструктор)"
original: "https://core.telegram.org/constructor/photoCachedSize"
section: ref
kind: constructor
layout: layout.njk
---

# photoCachedSize

*Конструктор из схемы TL.*

> Description of an image and its content.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===23===
> photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize;
> ```
> #### API schema

## Определение TL

```
photoCachedSize#21e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [string](/type/string/) | [PhotoSize.type value »](https://core.telegram.org/api/files/#photosizetype-values) |
| w | [int](/type/int/) | Image width |
| h | [int](/type/int/) | Image height |
| bytes | [bytes](/type/bytes/) | Binary data, file content |

## Тип

[PhotoSize](/type/PhotoSize/)

## Photosize.type values

See [PhotoSize.type values »](https://core.telegram.org/api/files/#photosizetype-values).

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
