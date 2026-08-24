---
title: "geoPointAddress"
original: "https://core.telegram.org/constructor/geoPointAddress"
section: ref
kind: constructor
description: "Необязательный адрес, связанный с geoPoint."
layout: layout.njk
---

# geoPointAddress

Необязательный адрес, связанный с [geoPoint](/constructor/geoPoint/).

```
geoPointAddress#de4c5d93 flags:# country_iso2:string state:flags.0?string city:flags.1?string street:flags.2?string = GeoPointAddress;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>country_iso2</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Двухбуквенный код страны по ISO 3166-1 alpha-2</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Состояние</td></tr><tr><td><strong>city</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Город</td></tr><tr><td><strong>street</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Улица</td></tr></tbody></table>

### Тип

[GeoPointAddress](/type/GeoPointAddress/)

### Связанные страницы

#### [geoPoint](/constructor/geoPoint/)

Географическая точка.
