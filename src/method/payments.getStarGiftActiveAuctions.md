---
title: "payments.getStarGiftActiveAuctions (метод)"
original: "https://core.telegram.org/method/payments.getStarGiftActiveAuctions"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGiftActiveAuctions

*Метод из схемы TL.*

> Fetches all currently active [gift auctions](https://core.telegram.org/api/auctions) **the user has ever bid on** (including auctions where the user was outbid and their bid was returned), as long as the auction hasn't ended yet.
> This method is primarily used to display an auction badge in the chat list immediately on app startup, without waiting for real-time [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) updates to arrive: the client calls it to discover which auctions the user is participating in and show the badge proactively.
> To instead fetch the full state of a single auction, subscribe to its real-time updates and render the detailed auction UI (typically when the user opens a specific auction), use [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/).

## Определение TL

```
payments.starGiftActiveAuctionsNotModified#db33dad0 = payments.StarGiftActiveAuctions;
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;
---functions---
payments.getStarGiftActiveAuctions#a5d0514d hash:long = payments.StarGiftActiveAuctions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | Hash generated [as specified here »](https://core.telegram.org/api/auctions) |

## Результат

[payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/)

## Only users can use this method

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.

#### [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/)

Contains updates to [auction state, see here »](https://core.telegram.org/api/auctions) for more info on how to enable these updates.

#### [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/)

Returns info about a [collectible gift auction »](https://core.telegram.org/api/auctions); also subscribes the user to auction updates, see [here »](https://core.telegram.org/api/auctions) for more info on the full flow.
