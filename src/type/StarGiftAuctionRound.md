---
title: "StarGiftAuctionRound (тип)"
original: "https://core.telegram.org/type/StarGiftAuctionRound"
section: ref
kind: type
layout: layout.njk
---

# StarGiftAuctionRound

*Тип из схемы TL.*

> Describes one or more rounds of a [collectible gift auction »](https://core.telegram.org/api/auctions), optionally extendable.

## Определение TL

```
starGiftAuctionRound#3aae0528 num:int duration:int = StarGiftAuctionRound;
starGiftAuctionRoundExtendable#aa021e5 num:int duration:int extend_top:int extend_window:int = StarGiftAuctionRound;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starGiftAuctionRound](/constructor/starGiftAuctionRound/) | Describes one or more [collectible gift auction rounds »](https://core.telegram.org/api/auctions). |
| [starGiftAuctionRoundExtendable](/constructor/starGiftAuctionRoundExtendable/) | Describes one or more extendable [collectible gift auction rounds »](https://core.telegram.org/api/auctions). |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
