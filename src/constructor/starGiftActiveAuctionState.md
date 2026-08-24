---
title: "starGiftActiveAuctionState"
original: "https://core.telegram.org/constructor/starGiftActiveAuctionState"
section: ref
kind: constructor
description: "Содержит информацию об аукционе, на котором пользователь сделал ставку »."
layout: layout.njk
---

# starGiftActiveAuctionState

Содержит информацию об [аукционе, на котором пользователь сделал ставку »](/api/auctions/).

```
starGiftActiveAuctionState#d31bc45d gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState = StarGiftActiveAuctionState;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td><a href="/api/gifts#collectible-gifts">Коллекционный подарок »</a>, который сейчас разыгрывается на аукционе.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionState">StarGiftAuctionState</a></td><td>Состояние аукциона</td></tr><tr><td><strong>user_state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionUserState">StarGiftAuctionUserState</a></td><td>Состояние аукциона применительно к текущему пользователю (то есть сведения о сделанных ставках, выигранных подарках и так далее).</td></tr></tbody></table>

### Тип

[StarGiftActiveAuctionState](/type/StarGiftActiveAuctionState/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
