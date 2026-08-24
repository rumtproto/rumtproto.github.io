---
title: "starGiftAttributeBackdrop"
original: "https://core.telegram.org/constructor/starGiftAttributeBackdrop"
section: ref
kind: constructor
description: "Подложка коллекционного подарка »."
layout: layout.njk
---

# starGiftAttributeBackdrop

Подложка [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название подложки</td></tr><tr><td><strong>backdrop_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Уникальный идентификатор фона</td></tr><tr><td><strong>center_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет центра подложки в формате RGB24.</td></tr><tr><td><strong>edge_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет краёв фона в формате RGB24.</td></tr><tr><td><strong>pattern_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет узора <a href="/constructor/starGiftAttributePattern">starGiftAttributePattern</a>, наложенного на подложку, в формате RGB24.</td></tr><tr><td><strong>text_color</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Цвет текста на фоне в формате RGB24.</td></tr><tr><td><strong>rarity</strong></td><td style="text-align: center;"><a href="/type/StarGiftAttributeRarity">StarGiftAttributeRarity</a></td><td>Редкость этой подложки.</td></tr></tbody></table>

### Тип

[StarGiftAttribute](/type/StarGiftAttribute/)

### Связанные страницы

#### [starGiftAttributePattern](/constructor/starGiftAttributePattern/)

[Стикер](/api/stickers/), наложенный повторяющимся узором на подложку [коллекционного подарка »](/api/gifts/).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
