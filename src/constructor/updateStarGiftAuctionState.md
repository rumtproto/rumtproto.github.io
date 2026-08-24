---
title: "updateStarGiftAuctionState"
original: "https://core.telegram.org/constructor/updateStarGiftAuctionState"
section: ref
kind: constructor
description: "Содержит обновления состояния аукциона; подробнее о том, как включить эти обновления, см. здесь »."
layout: layout.njk
---

# updateStarGiftAuctionState

Содержит обновления [состояния аукциона; подробнее о том, как включить эти обновления, см. здесь »](/api/auctions/).

```
updateStarGiftAuctionState#48e246c2 gift_id:long state:StarGiftAuctionState = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>, который сейчас распределяется на аукционе.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionState">StarGiftAuctionState</a></td><td>Состояние аукциона.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
