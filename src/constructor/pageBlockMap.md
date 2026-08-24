---
title: "pageBlockMap"
original: "https://core.telegram.org/constructor/pageBlockMap"
section: ref
kind: constructor
description: "Карта"
layout: layout.njk
---

# pageBlockMap

Карта

```
pageBlockMap#a44f3ef6 geo:GeoPoint zoom:int w:int h:int caption:PageCaption = PageBlock;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint">GeoPoint</a></td><td>Координаты центра карты</td></tr><tr><td><strong>zoom</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Уровень приближения карты; 13–20</td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Ширина карты в пикселях до применения масштаба; 16-102</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Высота карты в пикселях до применения масштаба; 16–1024</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/type/PageCaption">PageCaption</a></td><td>Подпись</td></tr></tbody></table>

### Тип

[PageBlock](/type/PageBlock/)
