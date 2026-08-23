---
title: "starGiftAuctionStateNotModified (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAuctionStateNotModified"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAuctionStateNotModified

*Конструктор из схемы TL.*

> Returned only by auction methods (never by updates) if the passed `version` is equal to the remote [auction »](https://core.telegram.org/api/auctions).`version`, meaning auction information hasn't changed over the locally cached version.

## Определение TL

```
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;
```

## Параметры

This constructor does not require any parameters.

## Тип

[StarGiftAuctionState](/type/StarGiftAuctionState/)

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
