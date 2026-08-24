---
title: "businessLocation"
original: "https://core.telegram.org/constructor/businessLocation"
section: ref
kind: constructor
description: "Представляет местоположение Telegram Business »."
layout: layout.njk
---

# businessLocation

Представляет местоположение [Telegram Business »](/api/business/#location).

```
businessLocation#ac5c1af7 flags:# geo_point:flags.0?GeoPoint address:string = BusinessLocation;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/GeoPoint">GeoPoint</a></td><td>Географические координаты (необязательно).</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текстовое описание адреса (обязательно).</td></tr></tbody></table>

### Тип

[BusinessLocation](/type/BusinessLocation/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
