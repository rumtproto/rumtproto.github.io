---
title: "inputStarGiftAuction (конструктор)"
original: "https://core.telegram.org/constructor/inputStarGiftAuction"
section: ref
kind: constructor
layout: layout.njk
---

# inputStarGiftAuction

*Конструктор из схемы TL.*

> Used to fetch [auctions](https://core.telegram.org/api/auctions) using the ID of the linked [collectible gift](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
inputStarGiftAuction#2e16c98 gift_id:long = InputStarGiftAuction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift_id | [long](/type/long/) | [Collectible gift ID](https://core.telegram.org/api/gifts#collectible-gifts) |

## Тип

[InputStarGiftAuction](/type/InputStarGiftAuction/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
