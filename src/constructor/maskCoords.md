---
title: "maskCoords"
original: "https://core.telegram.org/constructor/maskCoords"
section: ref
kind: constructor
description: "Место на фотографии, куда следует поместить маску при прикреплении стикеров к медиафайлам »"
layout: layout.njk
---

# maskCoords

Место на фотографии, куда следует поместить маску при [прикреплении стикеров к медиафайлам »](/api/stickers/#attached-stickers)

Позиция `n` указывает, куда следует поместить маску:

-   0 => Относительно лба
-   1 => Относительно глаз
-   2 => Относительно рта
-   3 => Относительно подбородка

```
maskCoords#aed6dbb2 n:int x:double y:double zoom:double = MaskCoords;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>n</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Часть лица, относительно которой следует размещать маску</td></tr><tr><td><strong>x</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Сдвиг по оси X, измеряемый в ширинах маски, отмасштабированной под размер лица, слева направо. (Например, значение -1.0 поместит маску слева от её положения по умолчанию)</td></tr><tr><td><strong>y</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Сдвиг по оси Y, измеряемый в ширинах маски, отмасштабированной под размер лица, слева направо. (Например, значение -1.0 поместит маску сразу под её положением по умолчанию)</td></tr><tr><td><strong>zoom</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Коэффициент масштабирования маски. (Например, 2.0 означает удвоенный размер)</td></tr></tbody></table>

### Тип

[MaskCoords](/type/MaskCoords/)

### Связанные страницы

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
