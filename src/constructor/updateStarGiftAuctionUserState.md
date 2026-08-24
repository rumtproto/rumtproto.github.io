---
title: "updateStarGiftAuctionUserState"
original: "https://core.telegram.org/constructor/updateStarGiftAuctionUserState"
section: ref
kind: constructor
description: "Содержит обновления состояния аукциона, относящиеся к текущему пользователю; подробнее о том, как включить эти обновления, см. здесь »."
layout: layout.njk
---

# updateStarGiftAuctionUserState

Содержит обновления [состояния аукциона, относящиеся к текущему пользователю; подробнее о том, как включить эти обновления, см. здесь »](/api/auctions/).

```
updateStarGiftAuctionUserState#dc58f31e gift_id:long user_state:StarGiftAuctionUserState = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор <a href="/api/gifts#collectible-gifts">коллекционного подарка »</a>, который сейчас распределяется на аукционе.</td></tr><tr><td><strong>user_state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionUserState">StarGiftAuctionUserState</a></td><td>Состояние аукциона применительно к текущему пользователю (то есть сведения о сделанных ставках, выигранных подарках и так далее).</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
