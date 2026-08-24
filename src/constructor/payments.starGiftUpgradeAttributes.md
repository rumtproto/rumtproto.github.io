---
title: "payments.starGiftUpgradeAttributes"
original: "https://core.telegram.org/constructor/payments.starGiftUpgradeAttributes"
section: ref
kind: constructor
description: "Список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его улучшения до коллекционного подарка »."
layout: layout.njk
---

# payments.starGiftUpgradeAttributes

Список только тех коллекционных атрибутов, которые могут появиться у типа подарка после его улучшения до [коллекционного подарка »](/api/gifts/#collectible-gifts).

```
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAttribute">StarGiftAttribute</a>&gt;</td><td>Полный список возможных атрибутов, которые могут быть назначены при превращении подарков указанного типа в <a href="/api/gifts#collectible-gifts">коллекционные подарки »</a>, включая модели, доступные только при крафте и отмеченные полем <a href="/constructor/starGiftAttributeModel">starGiftAttributeModel</a>.<code>crafted</code>.</td></tr></tbody></table>

### Тип

[payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

Модель [коллекционного подарка »](/api/gifts/#collectible-gifts).
