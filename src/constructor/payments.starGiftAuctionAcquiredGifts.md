---
title: "payments.starGiftAuctionAcquiredGifts"
original: "https://core.telegram.org/constructor/payments.starGiftAuctionAcquiredGifts"
section: ref
kind: constructor
description: "Описывает все подарки, которые текущий пользователь выиграл на аукционе."
layout: layout.njk
---

# payments.starGiftAuctionAcquiredGifts

Описывает все подарки, которые текущий пользователь выиграл на [аукционе](/api/auctions/).

```
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gifts</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAuctionAcquiredGift">StarGiftAuctionAcquiredGift</a>&gt;</td><td>Подарки</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr></tbody></table>

### Тип

[payments.StarGiftAuctionAcquiredGifts](/type/payments.StarGiftAuctionAcquiredGifts/)

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
