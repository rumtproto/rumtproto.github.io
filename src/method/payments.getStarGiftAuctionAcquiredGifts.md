---
title: "payments.getStarGiftAuctionAcquiredGifts"
original: "https://core.telegram.org/method/payments.getStarGiftAuctionAcquiredGifts"
section: ref
kind: method
description: "Получает все подарки, которые текущий пользователь выиграл на аукционе."
layout: layout.njk
---

# payments.getStarGiftAuctionAcquiredGifts

Получает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/).

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;
---functions---
payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор подарка, связанного с аукционом.</td></tr></tbody></table>

### Результат

[payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>Переданный подарок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
