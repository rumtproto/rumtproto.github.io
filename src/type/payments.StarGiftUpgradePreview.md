---
title: "payments.StarGiftUpgradePreview"
original: "https://core.telegram.org/type/payments.StarGiftUpgradePreview"
section: ref
kind: type
description: "Предпросмотр возможных атрибутов (выбираемых случайно), которые подарок » может получить после улучшения до коллекционного подарка »; подробнее см. здесь »."
layout: layout.njk
---

# payments.StarGiftUpgradePreview

Предпросмотр возможных атрибутов (выбираемых случайно), которые [подарок »](/api/gifts/) может получить после улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts); подробнее см. [здесь »](/api/gifts/#collectible-gifts).

```
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;

---functions---

payments.getStarGiftUpgradePreview#9c9abcb1 gift_id:long = payments.StarGiftUpgradePreview;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftUpgradePreview">payments.starGiftUpgradePreview</a></td><td>Предпросмотр возможных атрибутов (выбираемых случайно), которые <a href="/api/gifts">подарок »</a> может получить после улучшения до <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>; подробнее см. <a href="/api/gifts#collectible-gifts">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftUpgradePreview">payments.getStarGiftUpgradePreview</a></td><td>Получить предпросмотр возможных атрибутов (выбираемых случайно), которые <a href="/api/gifts">подарок »</a> может получить после улучшения до <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>; подробнее см. <a href="/api/gifts#collectible-gifts">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
