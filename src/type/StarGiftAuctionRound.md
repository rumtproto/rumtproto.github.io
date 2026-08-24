---
title: "StarGiftAuctionRound"
original: "https://core.telegram.org/type/StarGiftAuctionRound"
section: ref
kind: type
description: "Описывает один или несколько раундов аукциона коллекционных подарков » с возможностью продления."
layout: layout.njk
---

# StarGiftAuctionRound

Описывает один или несколько раундов [аукциона коллекционных подарков »](/api/auctions/) с возможностью продления.

```
starGiftAuctionRound#3aae0528 num:int duration:int = StarGiftAuctionRound;
starGiftAuctionRoundExtendable#aa021e5 num:int duration:int extend_top:int extend_window:int = StarGiftAuctionRound;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAuctionRound">starGiftAuctionRound</a></td><td>Описывает один или несколько <a href="/api/auctions">раундов аукциона коллекционных подарков »</a>.</td></tr><tr><td><a href="/constructor/starGiftAuctionRoundExtendable">starGiftAuctionRoundExtendable</a></td><td>Описывает один или несколько продлеваемых <a href="/api/auctions">раундов аукциона коллекционных подарков »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
