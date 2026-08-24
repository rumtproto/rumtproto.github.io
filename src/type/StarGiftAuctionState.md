---
title: "StarGiftAuctionState"
original: "https://core.telegram.org/type/StarGiftAuctionState"
section: ref
kind: type
description: "Состояние аукциона коллекционных подарков »: активен или ожидает начала, завершён либо не изменился по сравнению с локально закешированной версией."
layout: layout.njk
---

# StarGiftAuctionState

Состояние [аукциона коллекционных подарков »](/api/auctions/): активен или ожидает начала, завершён либо не изменился по сравнению с локально закешированной версией.

```
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;
starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starGiftAuctionStateNotModified">starGiftAuctionStateNotModified</a></td><td>Возвращается только методами аукциона (никогда в обновлениях), если переданное значение <code>version</code> совпадает со значением <a href="/api/auctions">аукциона »</a>.<code>version</code> на сервере, то есть информация об аукционе не изменилась по сравнению с локально закешированной версией.</td></tr><tr><td><a href="/constructor/starGiftAuctionState">starGiftAuctionState</a></td><td>Представляет активный или предстоящий <a href="/api/auctions">аукцион »</a>.</td></tr><tr><td><a href="/constructor/starGiftAuctionStateFinished">starGiftAuctionStateFinished</a></td><td>Представляет завершившийся <a href="/api/auctions">аукцион »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
