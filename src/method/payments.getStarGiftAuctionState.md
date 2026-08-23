---
title: "payments.getStarGiftAuctionState (метод)"
original: "https://core.telegram.org/method/payments.getStarGiftAuctionState"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGiftAuctionState

*Метод из схемы TL.*

> Returns info about a [collectible gift auction »](https://core.telegram.org/api/auctions); also subscribes the user to auction updates, see [here »](https://core.telegram.org/api/auctions) for more info on the full flow.

## Определение TL

```
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;
---functions---
payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| auction | [InputStarGiftAuction](/type/InputStarGiftAuction/) | Either the ID of the gift linked to the auction, or an [auction deep link slug »](https://core.telegram.org/api/links#auction-links). |
| version | [int](/type/int/) | Initially 0, then set to the returned [starGiftAuctionState](/constructor/starGiftAuctionState/).version, to avoid refetching results if they haven't changed. |

## Результат

[payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_INVALID | The passed gift is invalid. |

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Represents an active or pending [auction »](https://core.telegram.org/api/auctions).

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
