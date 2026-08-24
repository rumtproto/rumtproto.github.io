---
title: "payments.starGiftActiveAuctions"
original: "https://core.telegram.org/constructor/payments.starGiftActiveAuctions"
section: ref
kind: constructor
description: "Описывает все текущие активные аукционы подарков, **на которых пользователь сделал ставку**."
layout: layout.njk
---

# payments.starGiftActiveAuctions

Описывает все текущие активные [аукционы подарков](/api/auctions/), **на которых пользователь сделал ставку**.

```
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>auctions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftActiveAuctionState">StarGiftActiveAuctionState</a>&gt;</td><td>Аукционы, на которых пользователь сделал ставку</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr></tbody></table>

### Тип

[payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/)

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
