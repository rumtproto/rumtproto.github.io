---
title: "starGiftAttributeModel"
original: "https://core.telegram.org/constructor/starGiftAttributeModel"
section: ref
kind: constructor
description: "Модель коллекционного подарка »."
layout: layout.njk
---

# starGiftAttributeModel

Модель [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>crafted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Эта модель зарезервирована для <a href="/api/gifts#crafting-collectible-gifts">крафта »</a> и должна отфильтровываться из обычных предпросмотров улучшения.</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название модели</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td><a href="/api/stickers">Стикер</a>, представляющий улучшенный подарок</td></tr><tr><td><strong>rarity</strong></td><td style="text-align: center;"><a href="/type/StarGiftAttributeRarity">StarGiftAttributeRarity</a></td><td>Редкость этой модели.</td></tr></tbody></table>

### Тип

[StarGiftAttribute](/type/StarGiftAttribute/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.
