---
title: "PhotoSize (тип)"
original: "https://core.telegram.org/type/PhotoSize"
section: ref
kind: type
layout: layout.njk
---

# PhotoSize

*Тип из схемы TL.*

> Location of a certain size of a picture
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===23===
> photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize;
> photoSize#77bfb61b type:string location:FileLocation w:int h:int size:int = PhotoSize;
> photoSizeEmpty#0e17e23c type:string = PhotoSize;
> ```
> API schema:

## Определение TL

```
photoSizeEmpty#e17e23c type:string = PhotoSize;
photoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;
photoCachedSize#21e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;
photoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;
photoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;
photoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [photoSizeEmpty](/constructor/photoSizeEmpty/) | Empty constructor. Image with this thumbnail is unavailable. |
| [photoSize](/constructor/photoSize/) | Image description. |
| [photoCachedSize](/constructor/photoCachedSize/) | Description of an image and its content. |
| [photoStrippedSize](/constructor/photoStrippedSize/) | A low-resolution compressed JPG payload |
| [photoSizeProgressive](/constructor/photoSizeProgressive/) | Progressively encoded photosize |
| [photoPathSize](/constructor/photoPathSize/) | Messages with animated stickers can have a compressed svg (< 300 bytes) to show the outline of the sticker before fetching the actual lottie animation. |
