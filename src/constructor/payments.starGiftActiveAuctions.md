---
title: "payments.starGiftActiveAuctions (конструктор)"
original: "https://core.telegram.org/constructor/payments.starGiftActiveAuctions"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starGiftActiveAuctions

*Конструктор из схемы TL.*

> Describes all currently active [gift auctions](https://core.telegram.org/api/auctions) **where the user has placed a bid**.

## Определение TL

```
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| auctions | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftActiveAuctionState](/type/StarGiftActiveAuctionState/)> | Auctions where the user has placed a bid |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |

## Тип

[payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/)

## Related pages

#### [Collectible gift auctions](https://core.telegram.org/api/auctions)

New collectible gift releases are distributed through Stars auctions held over several rounds.
