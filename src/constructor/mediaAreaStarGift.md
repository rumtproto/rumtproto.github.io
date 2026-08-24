---
title: "mediaAreaStarGift"
original: "https://core.telegram.org/constructor/mediaAreaStarGift"
section: ref
kind: constructor
description: "Представляет коллекционный подарок »."
layout: layout.njk
---

# mediaAreaStarGift

Представляет [коллекционный подарок »](/api/gifts/#collectible-gifts).

```
mediaAreaStarGift#5787686d coordinates:MediaAreaCoordinates slug:string = MediaArea;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates">MediaAreaCoordinates</a></td><td>Координаты области медиа.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] <code>slug</code> из поля <a href="/constructor/starGiftUnique">starGiftUnique</a>.<code>slug</code>, который можно разрешить, как <a href="/api/gifts#sharing-and-getting-info-about-a-collectible-gift">описано здесь »</a>.</td></tr></tbody></table>

### Тип

[MediaArea](/type/MediaArea/)

### Связанные страницы

#### [starGiftUnique](/constructor/starGiftUnique/)

Представляет коллекционный звёздный подарок, [подробнее см. здесь »](/api/gifts/#collectible-gifts).

Стикер, представляющий подарок, содержится в объекте [starGiftAttributeModel](/constructor/starGiftAttributeModel/) в поле `attributes`.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
