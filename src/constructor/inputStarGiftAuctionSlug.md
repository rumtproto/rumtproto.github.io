---
title: "inputStarGiftAuctionSlug (конструктор)"
original: "https://core.telegram.org/constructor/inputStarGiftAuctionSlug"
section: ref
kind: constructor
layout: layout.njk
---

# inputStarGiftAuctionSlug

*Конструктор из схемы TL.*

> Used to fetch [auctions](https://core.telegram.org/api/auctions) using the [slug of an auction deep link »](https://core.telegram.org/api/links#auction-links).

## Определение TL

```
inputStarGiftAuctionSlug#7ab58308 slug:string = InputStarGiftAuction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | [Auction deep link slug »](https://core.telegram.org/api/links#auction-links). |

## Тип

[InputStarGiftAuction](/type/InputStarGiftAuction/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
