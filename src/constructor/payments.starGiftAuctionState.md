---
title: "payments.starGiftAuctionState"
original: "https://core.telegram.org/constructor/payments.starGiftAuctionState"
section: ref
kind: constructor
description: "Описывает аукцион коллекционных подарков »."
layout: layout.njk
---

# payments.starGiftAuctionState

Описывает [аукцион коллекционных подарков »](/api/auctions/).

```
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td>Подарок, который разыгрывается на аукционе в данный момент.</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionState">StarGiftAuctionState</a></td><td>Состояние аукциона.</td></tr><tr><td><strong>user_state</strong></td><td style="text-align: center;"><a href="/type/StarGiftAuctionUserState">StarGiftAuctionUserState</a></td><td>Состояние аукциона применительно к текущему пользователю (то есть сведения о сделанных ставках, выигранных подарках и т. п.).</td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Повторно вызвать метод <a href="/method/payments.getStarGiftAuctionState">payments.getStarGiftAuctionState</a> через <code>timeout</code> секунд, чтобы продолжать получать обновления аукциона; подробнее обо всём процессе см. <a href="/api/auctions">здесь »</a>.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr></tbody></table>

### Тип

[payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/)

### Связанные страницы

#### [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/)

Возвращает сведения об [аукционе коллекционных подарков »](/api/auctions/); также подписывает пользователя на обновления аукциона, подробнее обо всём процессе см. [здесь »](/api/auctions/).

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
