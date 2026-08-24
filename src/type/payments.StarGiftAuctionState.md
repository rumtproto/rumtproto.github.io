---
title: "payments.StarGiftAuctionState"
original: "https://core.telegram.org/type/payments.StarGiftAuctionState"
section: ref
kind: type
description: "Описывает аукцион коллекционных подарков »."
layout: layout.njk
---

# Payments.StarGiftAuctionState

Описывает [аукцион коллекционных подарков »](/api/auctions/).

```
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;

---functions---

payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftAuctionState">payments.starGiftAuctionState</a></td><td>Описывает <a href="/api/auctions">аукцион коллекционных подарков »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftAuctionState">payments.getStarGiftAuctionState</a></td><td>Возвращает информацию об <a href="/api/auctions">аукционе коллекционных подарков »</a>, а также подписывает пользователя на обновления аукциона; подробнее о полном процессе см. <a href="/api/auctions">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
