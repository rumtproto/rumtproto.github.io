---
title: "InputStarGiftAuction (тип)"
original: "https://core.telegram.org/type/InputStarGiftAuction"
section: ref
kind: type
layout: layout.njk
---

# InputStarGiftAuction

*Тип из схемы TL.*

> Identifies a [collectible gift auction »](https://core.telegram.org/api/auctions), either by the ID of the linked collectible gift or by an auction deep link slug.

## Определение TL

```
inputStarGiftAuction#2e16c98 gift_id:long = InputStarGiftAuction;
inputStarGiftAuctionSlug#7ab58308 slug:string = InputStarGiftAuction;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputStarGiftAuction](/constructor/inputStarGiftAuction/) | Used to fetch [auctions](https://core.telegram.org/api/auctions) using the ID of the linked [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts). |
| [inputStarGiftAuctionSlug](/constructor/inputStarGiftAuctionSlug/) | Used to fetch [auctions](https://core.telegram.org/api/auctions) using the [slug of an auction deep link »](https://core.telegram.org/api/links#auction-links). |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
