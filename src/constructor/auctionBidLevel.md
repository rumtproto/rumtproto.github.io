---
title: "auctionBidLevel (конструктор)"
original: "https://core.telegram.org/constructor/auctionBidLevel"
section: ref
kind: constructor
layout: layout.njk
---

# auctionBidLevel

*Конструктор из схемы TL.*

> Describes a bid in an [auction](https://core.telegram.org/api/auctions).

## Определение TL

```
auctionBidLevel#310240cc pos:int amount:long date:int = AuctionBidLevel;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pos | [int](/type/int/) | Position of the bid. |
| amount | [long](/type/long/) | Amount of the bid in [Telegram Stars](https://core.telegram.org/api/stars). |
| date | [int](/type/int/) | Date when the bid was placed. |

## Тип

[AuctionBidLevel](/type/AuctionBidLevel/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
