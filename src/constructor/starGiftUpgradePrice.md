---
title: "starGiftUpgradePrice"
original: "https://core.telegram.org/constructor/starGiftUpgradePrice"
section: ref
kind: constructor
description: "Указывает цену улучшения подарка », действующую начиная с определённого момента времени."
layout: layout.njk
---

# starGiftUpgradePrice

Указывает цену [улучшения подарка »](/api/gifts/#collectible-gifts), действующую начиная с определённого момента времени.

```
starGiftUpgradePrice#99ea331d date:int upgrade_stars:long = StarGiftUpgradePrice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Метка времени UNIX, указывающая, когда цена вступит в силу.</td></tr><tr><td><strong>upgrade_stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена улучшения.</td></tr></tbody></table>

### Тип

[StarGiftUpgradePrice](/type/StarGiftUpgradePrice/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
