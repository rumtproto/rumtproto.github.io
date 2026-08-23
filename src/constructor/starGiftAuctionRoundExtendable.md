---
title: "starGiftAuctionRoundExtendable (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAuctionRoundExtendable"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAuctionRoundExtendable

*Конструктор из схемы TL.*

> Describes one or more extendable [collectible gift auction rounds »](https://core.telegram.org/api/auctions).

## Определение TL

```
starGiftAuctionRoundExtendable#aa021e5 num:int duration:int extend_top:int extend_window:int = StarGiftAuctionRound;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| num | [int](/type/int/) | This object describes all rounds starting from num up until next.num-1 inclusively (next is the next [StarGiftAuctionRound](/type/StarGiftAuctionRound/)). |
| duration | [int](/type/int/) | Duration in seconds of the round(s). |
| extend_top | [int](/type/int/) | The round(s) will be extended by extend_window if a bid changes the composition/order of the top extend_top bidders. |
| extend_window | [int](/type/int/) | The round(s) will be extended by this many seconds if a bid changes the composition/order of the top extend_top bidders. |

## Тип

[StarGiftAuctionRound](/type/StarGiftAuctionRound/)

## Related pages

#### [StarGiftAuctionRound](/type/StarGiftAuctionRound/)

Describes one or more rounds of a [collectible gift auction »](https://core.telegram.org/api/auctions), optionally extendable.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
