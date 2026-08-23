---
title: "photoSizeProgressive (конструктор)"
original: "https://core.telegram.org/constructor/photoSizeProgressive"
section: ref
kind: constructor
layout: layout.njk
---

# photoSizeProgressive

*Конструктор из схемы TL.*

> Progressively encoded photosize

## Определение TL

```
photoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| type | [string](/type/string/) | [PhotoSize.type value »](https://core.telegram.org/api/files/#photosizetype-values) |
| w | [int](/type/int/) | Photo width |
| h | [int](/type/int/) | Photo height |
| sizes | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Sizes of progressive JPEG file prefixes, which can be used to preliminarily show the image. |

## Тип

[PhotoSize](/type/PhotoSize/)

## Photosize.type values

See [PhotoSize.type values »](https://core.telegram.org/api/files/#photosizetype-values).

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
