---
title: "StarGiftCollection"
original: "https://core.telegram.org/type/StarGiftCollection"
section: ref
kind: type
description: "Представляет коллекцию звёздных подарков »."
layout: layout.njk
---

# StarGiftCollection

Представляет [коллекцию звёздных подарков »](/api/gifts/#gift-collections).

```
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;

---functions---

payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
payments.updateStarGiftCollection#4fddbee7 flags:# peer:InputPeer collection_id:int title:flags.0?string delete_stargift:flags.1?Vector<InputSavedStarGift> add_stargift:flags.2?Vector<InputSavedStarGift> order:flags.3?Vector<InputSavedStarGift> = StarGiftCollection;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftCollection">starGiftCollection</a></td><td>Представляет <a href="/api/gifts#gift-collections">коллекцию звёздных подарков »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.createStarGiftCollection">payments.createStarGiftCollection</a></td><td>Создать <a href="/api/gifts#gift-collections">коллекцию звёздных подарков »</a>.</td></tr><tr><td><a href="/method/payments.updateStarGiftCollection">payments.updateStarGiftCollection</a></td><td>Добавить подарки в <a href="/api/gifts#gift-collections">коллекцию звёздных подарков »</a> или удалить их оттуда, либо переименовать коллекцию.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
