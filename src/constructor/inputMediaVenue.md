---
title: "inputMediaVenue"
original: "https://core.telegram.org/constructor/inputMediaVenue"
section: ref
kind: constructor
description: "Может использоваться для отправки геопозиции заведения."
layout: layout.njk
---

# inputMediaVenue

Может использоваться для отправки геопозиции заведения.

```
inputMediaVenue#c13d1c11 geo_point:InputGeoPoint title:string address:string provider:string venue_id:string venue_type:string = InputMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/type/InputGeoPoint">InputGeoPoint</a></td><td>Геопозиция</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название заведения</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Физический адрес заведения</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Поставщик данных о заведениях: в настоящее время требуется поддержка только "foursquare" и "gplaces" (Google Places)</td></tr><tr><td><strong>venue_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор заведения в базе данных поставщика</td></tr><tr><td><strong>venue_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип заведения в базе данных поставщика</td></tr></tbody></table>

### Тип

[InputMedia](/type/InputMedia/)
