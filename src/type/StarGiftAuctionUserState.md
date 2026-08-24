---
title: "StarGiftAuctionUserState"
original: "https://core.telegram.org/type/StarGiftAuctionUserState"
section: ref
kind: type
description: "Содержит информацию о состоянии текущего пользователя в аукционе »."
layout: layout.njk
---

# StarGiftAuctionUserState

Содержит информацию о состоянии текущего пользователя в [аукционе »](/api/auctions/).

Флаги `bid_amount`, `bid_date`, `bid_peer` и `min_bid_amount` конструктора [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) будут установлены все сразу, если пользователь сделал ставку на аукционе.

```
starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAuctionUserState">starGiftAuctionUserState</a></td><td>Содержит информацию о состоянии текущего пользователя в <a href="/api/auctions">аукционе »</a>.<br><br>Флаги <code>bid_amount</code>, <code>bid_date</code>, <code>bid_peer</code> и <code>min_bid_amount</code> в <a href="/constructor/starGiftAuctionUserState">starGiftAuctionUserState</a> будут установлены все, если пользователь сделал ставку на аукционе.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Содержит информацию о состоянии текущего пользователя в [аукционе »](/api/auctions/).

Флаги `bid_amount`, `bid_date`, `bid_peer` и `min_bid_amount` конструктора [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) будут установлены все сразу, если пользователь сделал ставку на аукционе.
