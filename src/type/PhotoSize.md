---
title: "PhotoSize"
original: "https://core.telegram.org/type/PhotoSize"
section: ref
kind: type
description: "Расположение изображения определённого размера"
layout: layout.njk
---

# PhotoSize

Расположение изображения определённого размера

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===23===
photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize;
photoSize#77bfb61b type:string location:FileLocation w:int h:int size:int = PhotoSize;
photoSizeEmpty#0e17e23c type:string = PhotoSize;
```

Схема API:

```
photoSizeEmpty#e17e23c type:string = PhotoSize;
photoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;
photoCachedSize#21e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;
photoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;
photoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;
photoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/photoSizeEmpty">photoSizeEmpty</a></td><td>Пустой конструктор. Изображение с такой миниатюрой недоступно.</td></tr><tr><td><a href="/constructor/photoSize">photoSize</a></td><td>Описание изображения.</td></tr><tr><td><a href="/constructor/photoCachedSize">photoCachedSize</a></td><td>Описание изображения и его содержимого.</td></tr><tr><td><a href="/constructor/photoStrippedSize">photoStrippedSize</a></td><td>Сжатые JPG-данные низкого разрешения</td></tr><tr><td><a href="/constructor/photoSizeProgressive">photoSizeProgressive</a></td><td>Размер фотографии с прогрессивным кодированием</td></tr><tr><td><a href="/constructor/photoPathSize">photoPathSize</a></td><td>Сообщения с анимированными стикерами могут содержать сжатый svg (&lt; 300 байт), чтобы показать контур стикера до загрузки самой анимации lottie.</td></tr></tbody></table>
