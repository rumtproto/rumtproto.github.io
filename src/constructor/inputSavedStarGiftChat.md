---
title: "inputSavedStarGiftChat"
original: "https://core.telegram.org/constructor/inputSavedStarGiftChat"
section: ref
kind: constructor
description: "Подарок, полученный каналом, которым мы владеем."
layout: layout.njk
---

# inputSavedStarGiftChat

Подарок, полученный каналом, которым мы владеем.

```
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Канал.</td></tr><tr><td><strong>saved_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор подарка; должен совпадать с полем <code>saved_id</code> конструктора <a href="/constructor/messageActionStarGift">messageActionStarGift</a>/<a href="/constructor/messageActionStarGiftUnique">messageActionStarGiftUnique</a>.</td></tr></tbody></table>

### Тип

[InputSavedStarGift](/type/InputSavedStarGift/)

### Связанные страницы

#### [messageActionStarGift](/constructor/messageActionStarGift/)

Вы получили [подарок, подробнее см. здесь »](/api/gifts/).

#### [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

[Подарок »](/api/gifts/) был улучшен до [коллекционного подарка »](/api/gifts/#collectible-gifts).
