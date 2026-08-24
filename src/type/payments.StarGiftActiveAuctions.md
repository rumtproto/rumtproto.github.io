---
title: "payments.StarGiftActiveAuctions"
original: "https://core.telegram.org/type/payments.StarGiftActiveAuctions"
section: ref
kind: type
description: "Список аукционов подарков », в которых пользователь сделал ставку и которые сейчас активны, либо признак того, что локально закешированный список не изменился."
layout: layout.njk
---

# Payments.StarGiftActiveAuctions

Список [аукционов подарков »](/api/auctions/), в которых пользователь сделал ставку и которые сейчас активны, либо признак того, что локально закешированный список не изменился.

```
payments.starGiftActiveAuctionsNotModified#db33dad0 = payments.StarGiftActiveAuctions;
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;

---functions---

payments.getStarGiftActiveAuctions#a5d0514d hash:long = payments.StarGiftActiveAuctions;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starGiftActiveAuctionsNotModified">payments.starGiftActiveAuctionsNotModified</a></td><td>Список <a href="/api/auctions">аукционов подарков</a>, которые сейчас активны и <strong>в которых пользователь сделал ставку</strong>, не изменился.</td></tr><tr><td><a href="/constructor/payments.starGiftActiveAuctions">payments.starGiftActiveAuctions</a></td><td>Описывает все текущие активные <a href="/api/auctions">аукционы подарков</a>, <strong>на которых пользователь сделал ставку</strong>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarGiftActiveAuctions">payments.getStarGiftActiveAuctions</a></td><td>Получает все текущие активные <a href="/api/auctions">аукционы подарков</a>, <strong>на которых пользователь когда-либо делал ставку</strong> (включая аукционы, где ставку пользователя перебили и она была возвращена), при условии что аукцион ещё не завершился.<br><br>Этот метод в первую очередь используется, чтобы сразу при запуске приложения показать значок аукциона в списке чатов, не дожидаясь поступления обновлений <a href="/constructor/updateStarGiftAuctionState">updateStarGiftAuctionState</a> в реальном времени: клиент вызывает его, чтобы узнать, в каких аукционах участвует пользователь, и заранее показать значок.<br><br>Чтобы вместо этого получить полное состояние одного аукциона, подписаться на его обновления в реальном времени и отобразить подробный интерфейс аукциона (обычно когда пользователь открывает конкретный аукцион), используйте <a href="/method/payments.getStarGiftAuctionState">payments.getStarGiftAuctionState</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
