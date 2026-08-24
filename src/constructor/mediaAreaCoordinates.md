---
title: "mediaAreaCoordinates"
original: "https://core.telegram.org/constructor/mediaAreaCoordinates"
section: ref
kind: constructor
description: "Координаты и размер кликабельной прямоугольной области поверх истории."
layout: layout.njk
---

# mediaAreaCoordinates

Координаты и размер кликабельной прямоугольной области поверх истории.

```
mediaAreaCoordinates#cfc9e002 flags:# x:double y:double w:double h:double rotation:double radius:flags.0?double = MediaAreaCoordinates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>x</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Абсцисса центра прямоугольника в процентах от ширины медиафайла (0-100).</td></tr><tr><td><strong>y</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Ордината центра прямоугольника в процентах от высоты медиафайла (0-100).</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Ширина прямоугольника в процентах от ширины медиафайла (0-100).</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Высота прямоугольника в процентах от высоты медиафайла (0-100).</td></tr><tr><td><strong>rotation</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Угол поворота прямоугольника по часовой стрелке в градусах (0-360).</td></tr><tr><td><strong>radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/double">double</a></td><td>Радиус скругления углов прямоугольника в процентах от ширины медиа.</td></tr></tbody></table>

### Тип

[MediaAreaCoordinates](/type/MediaAreaCoordinates/)
