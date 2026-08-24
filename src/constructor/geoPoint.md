---
title: "geoPoint"
original: "https://core.telegram.org/constructor/geoPoint"
section: ref
kind: constructor
description: "Географическая точка."
layout: layout.njk
---

# geoPoint

Географическая точка.

```
geoPoint#b2a2f663 flags:# long:double lat:double access_hash:long accuracy_radius:flags.0?int = GeoPoint;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>long</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Долгота</td></tr><tr><td><strong>lat</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Широта</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа</td></tr><tr><td><strong>accuracy_radius</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Оценочная горизонтальная точность местоположения в метрах, как её указал отправитель.</td></tr></tbody></table>

### Тип

[GeoPoint](/type/GeoPoint/)
