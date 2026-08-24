---
title: "payments.StarGiftCollections"
original: "https://core.telegram.org/type/payments.StarGiftCollections"
section: ref
kind: type
description: "Представляет список коллекций подарков »."
layout: layout.njk
---

# payments.StarGiftCollections

Представляет список [коллекций подарков »](/api/gifts/#gift-collections).

```
payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;

---functions---

payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftCollectionsNotModified">payments.starGiftCollectionsNotModified</a></td><td>Список <a href="/api/gifts#gift-collections">коллекций звёздных подарков »</a> не изменился.</td></tr><tr><td><a href="/constructor/payments.starGiftCollections">payments.starGiftCollections</a></td><td>Представляет список <a href="/api/gifts#gift-collections">коллекций звёздных подарков »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftCollections">payments.getStarGiftCollections</a></td><td>Получает все <a href="/api/gifts#gift-collections">коллекции звёздных подарков »</a> пира.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
