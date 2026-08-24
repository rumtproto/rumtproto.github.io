---
title: "payments.StarGiftAuctionAcquiredGifts"
original: "https://core.telegram.org/type/payments.StarGiftAuctionAcquiredGifts"
section: ref
kind: type
description: "Описывает все подарки, которые текущий пользователь выиграл на аукционе."
layout: layout.njk
---

# Payments.StarGiftAuctionAcquiredGifts

Описывает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/).

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;

---functions---

payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftAuctionAcquiredGifts">payments.starGiftAuctionAcquiredGifts</a></td><td>Описывает все подарки, которые текущий пользователь выиграл на <a href="/api/auctions">аукционе</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftAuctionAcquiredGifts">payments.getStarGiftAuctionAcquiredGifts</a></td><td>Получает все подарки, которые текущий пользователь выиграл на <a href="/api/auctions">аукционе</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
