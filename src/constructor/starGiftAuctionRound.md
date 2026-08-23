---
title: "starGiftAuctionRound (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAuctionRound"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAuctionRound

*Конструктор из схемы TL.*

> Describes one or more [collectible gift auction rounds »](https://core.telegram.org/api/auctions).

## Определение TL

```
starGiftAuctionRound#3aae0528 num:int duration:int = StarGiftAuctionRound;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| num | [int](/type/int/) | This object describes all rounds starting from num up until next.num-1 inclusively (next is the next [StarGiftAuctionRound](/type/StarGiftAuctionRound/)). |
| duration | [int](/type/int/) | Duration in seconds of the round(s). |

## Тип

[StarGiftAuctionRound](/type/StarGiftAuctionRound/)

## Related pages

#### [StarGiftAuctionRound](/type/StarGiftAuctionRound/)

Describes one or more rounds of a [collectible gift auction »](https://core.telegram.org/api/auctions), optionally extendable.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
