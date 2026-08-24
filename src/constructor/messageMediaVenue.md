---
title: "messageMediaVenue"
original: "https://core.telegram.org/constructor/messageMediaVenue"
section: ref
kind: constructor
description: "Заведение"
layout: layout.njk
---

# messageMediaVenue

Заведение

```
messageMediaVenue#2ec0533f geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/type/GeoPoint">GeoPoint</a></td><td>Геопозиция заведения</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название заведения</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Поставщик данных о заведениях: в настоящее время требуется поддержка только "foursquare" и "gplaces" (Google Places)</td></tr><tr><td><strong>venue_id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор заведения в базе данных поставщика</td></tr><tr><td><strong>venue_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Тип заведения в базе данных поставщика</td></tr></tbody></table>

### Тип

[MessageMedia](/type/MessageMedia/)
