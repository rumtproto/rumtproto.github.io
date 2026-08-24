---
title: "disallowedGiftsSettings"
original: "https://core.telegram.org/constructor/disallowedGiftsSettings"
section: ref
kind: constructor
description: "Запретить получение определённых типов подарков."
layout: layout.njk
---

# disallowedGiftsSettings

Запретить получение определённых типов [подарков](/api/gifts/).

```
disallowedGiftsSettings#71f276c4 flags:# disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true disallow_stargifts_from_channels:flags.4?true = DisallowedGiftsSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>disallow_unlimited_stargifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Запретить получение подарков с неограниченным тиражом (тех, у которых флаг <a href="/constructor/starGift">starGift</a>.<code>limited</code> <strong>не</strong> установлен).</td></tr><tr><td><strong>disallow_limited_stargifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Запретить получение подарков ограниченного тиража (тех, у которых установлен флаг <a href="/constructor/starGift">starGift</a>.<code>limited</code>).</td></tr><tr><td><strong>disallow_unique_stargifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Запретить получение <a href="/api/gifts#collectible-gifts">коллекционных подарков »</a>.</td></tr><tr><td><strong>disallow_premium_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Запретить получение <a href="/api/gifts#collectible-gifts">подаренных подписок Telegram Premium »</a>.</td></tr><tr><td><strong>disallow_stargifts_from_channels</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Запретить получение подарков, отправленных каналами.</td></tr></tbody></table>

### Тип

[DisallowedGiftsSettings](/type/DisallowedGiftsSettings/)

### Связанные страницы

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
