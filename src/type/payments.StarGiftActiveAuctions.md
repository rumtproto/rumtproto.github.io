---
title: "Payments.StarGiftActiveAuctions (тип)"
original: "https://core.telegram.org/type/payments.StarGiftActiveAuctions"
section: ref
kind: type
layout: layout.njk
---

# Payments.StarGiftActiveAuctions

*Тип из схемы TL.*

> List of currently active [gift auctions »](https://core.telegram.org/api/auctions) where the user has placed a bid, or an indication that the locally cached list hasn't changed.

## Определение TL

```
payments.starGiftActiveAuctionsNotModified#db33dad0 = payments.StarGiftActiveAuctions;
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;

---functions---

payments.getStarGiftActiveAuctions#a5d0514d hash:long = payments.StarGiftActiveAuctions;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftActiveAuctionsNotModified](/constructor/payments.starGiftActiveAuctionsNotModified/) | The list of currently active [gift auctions](https://core.telegram.org/api/auctions) where the user has placed a bid hasn't changed. |
| [payments.starGiftActiveAuctions](/constructor/payments.starGiftActiveAuctions/) | Describes all currently active [gift auctions](https://core.telegram.org/api/auctions) where the user has placed a bid. |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/) | Fetches all currently active [gift auctions](https://core.telegram.org/api/auctions) the user has ever bid on (including auctions where the user was outbid and their bid was returned), as long as the auction hasn't ended yet. This method is primarily used to display an auction badge in the chat list immediately on app startup, without waiting for real-time [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) updates to arrive: the client calls it to discover which auctions the user is participating in and show the badge proactively. To instead fetch the full state of a single auction, subscribe to its real-time updates and render the detailed auction UI (typically when the user opens a specific auction), use [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/). |

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
