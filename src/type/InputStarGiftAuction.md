---
title: "InputStarGiftAuction"
original: "https://core.telegram.org/type/InputStarGiftAuction"
section: ref
kind: type
description: "Определяет аукцион коллекционных подарков » — либо по идентификатору связанного коллекционного подарка, либо по слагу глубокой ссылки на аукцион."
layout: layout.njk
---

# InputStarGiftAuction

Определяет [аукцион коллекционных подарков »](/api/auctions/) — либо по идентификатору связанного коллекционного подарка, либо по слагу глубокой ссылки на аукцион.

```
inputStarGiftAuction#2e16c98 gift_id:long = InputStarGiftAuction;
inputStarGiftAuctionSlug#7ab58308 slug:string = InputStarGiftAuction;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputStarGiftAuction">inputStarGiftAuction</a></td><td>Используется для получения <a href="/api/auctions">аукционов</a> по идентификатору связанного <a href="/api/gifts#collectible-gifts">коллекционного подарка</a>.</td></tr><tr><td><a href="/constructor/inputStarGiftAuctionSlug">inputStarGiftAuctionSlug</a></td><td>Используется для получения <a href="/api/auctions">аукционов</a> по <a href="/api/links#auction-links">слагу глубокой ссылки на аукцион »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
