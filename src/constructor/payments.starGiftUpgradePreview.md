---
title: "payments.starGiftUpgradePreview"
original: "https://core.telegram.org/constructor/payments.starGiftUpgradePreview"
section: ref
kind: constructor
description: "Предпросмотр возможных атрибутов (выбираемых случайно), которые подарок » может получить после улучшения до коллекционного подарка »; подробнее см. здесь »."
layout: layout.njk
---

# payments.starGiftUpgradePreview

Предпросмотр возможных атрибутов (выбираемых случайно), которые [подарок »](/api/gifts/) может получить после улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/gifts/#collectible-gifts).

```
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>sample_attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAttribute">StarGiftAttribute</a>&gt;</td><td>Возможные атрибуты подарка</td></tr><tr><td><strong>prices</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice">StarGiftUpgradePrice</a>&gt;</td><td>Содержит аналогичный список цен обновления и меток времени, менее подробный, чем в <code>next_prices</code> (то есть цены отстоят друг от друга примерно на месяц); используется в основном для масштабирования графика цен и для показа более общей картины будущей цены обновления.</td></tr><tr><td><strong>next_prices</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftUpgradePrice">StarGiftUpgradePrice</a>&gt;</td><td>Содержит текущую цену улучшения и список будущих цен, каждая из которых связана с меткой времени UNIX, указывающей, когда цена вступает в силу (текущая цена действует только до вступления в силу следующей, и так далее для всех цен в списке).</td></tr></tbody></table>

### Тип

[payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
