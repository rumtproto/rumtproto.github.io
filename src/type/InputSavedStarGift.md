---
title: "InputSavedStarGift"
original: "https://core.telegram.org/type/InputSavedStarGift"
section: ref
kind: type
description: "Указывает на подарок »."
layout: layout.njk
---

# InputSavedStarGift

Указывает на [подарок »](/api/gifts/).

```
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputSavedStarGiftUser">inputSavedStarGiftUser</a></td><td>Подарок, полученный в личном чате с другим пользователем.</td></tr><tr><td><a href="/constructor/inputSavedStarGiftChat">inputSavedStarGiftChat</a></td><td>Подарок, полученный каналом, которым мы владеем.</td></tr><tr><td><a href="/constructor/inputSavedStarGiftSlug">inputSavedStarGiftSlug</a></td><td>Указывает на <a href="/api/links#collectible-gift-link">коллекционный подарок, полученный по ссылке на коллекционный подарок »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
