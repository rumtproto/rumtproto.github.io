---
title: "payments.StarGiftUpgradeAttributes"
original: "https://core.telegram.org/type/payments.StarGiftUpgradeAttributes"
section: ref
kind: type
description: "Список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его улучшения до коллекционного подарка »."
layout: layout.njk
---

# Payments.StarGiftUpgradeAttributes

Список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;

---functions---

payments.getStarGiftUpgradeAttributes#6d038b58 gift_id:long = payments.StarGiftUpgradeAttributes;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftUpgradeAttributes">payments.starGiftUpgradeAttributes</a></td><td>Список только тех коллекционных атрибутов, которые могут появиться у данного типа подарка после его улучшения до <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftUpgradeAttributes">payments.getStarGiftUpgradeAttributes</a></td><td>Получает <strong>полный</strong> список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его превращения в <a href="/api/gifts#collectible-gifts">коллекционный подарок »</a>.<br><br>Результат может также содержать конструкторы <a href="/constructor/starGiftAttributeModel">starGiftAttributeModel</a> с установленным флагом <code>crafted</code>: эти модели зарезервированы для <a href="/api/gifts#crafting-collectible-gifts">создания »</a> и должны отфильтровываться из обычных предпросмотров улучшения (и наоборот).</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
