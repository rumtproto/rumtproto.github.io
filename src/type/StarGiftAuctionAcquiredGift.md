---
title: "StarGiftAuctionAcquiredGift (тип)"
original: "https://core.telegram.org/type/StarGiftAuctionAcquiredGift"
section: ref
kind: type
layout: layout.njk
---

# StarGiftAuctionAcquiredGift

*Тип из схемы TL.*

> Describes a gift that the current user won in an auction.

## Определение TL

```
starGiftAuctionAcquiredGift#42b00348 flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities gift_num:flags.2?int = StarGiftAuctionAcquiredGift;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/) | Describes a gift that the current user won in an auction. |
