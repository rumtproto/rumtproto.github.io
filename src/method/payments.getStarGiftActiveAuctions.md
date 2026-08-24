---
title: "payments.getStarGiftActiveAuctions"
original: "https://core.telegram.org/method/payments.getStarGiftActiveAuctions"
section: ref
kind: method
description: "Получает все текущие активные аукционы подарков, **на которых пользователь когда-либо делал ставку** (включая аукционы, где ставку пользователя перебили и она была возвращена),…"
layout: layout.njk
---

# payments.getStarGiftActiveAuctions

Получает все текущие активные [аукционы подарков](/api/auctions/), **на которых пользователь когда-либо делал ставку** (включая аукционы, где ставку пользователя перебили и она была возвращена), при условии что аукцион ещё не завершился.

Этот метод в первую очередь используется, чтобы отобразить значок аукциона в списке чатов сразу при запуске приложения, не дожидаясь поступления обновлений [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) в реальном времени: клиент вызывает его, чтобы узнать, в каких аукционах участвует пользователь, и заранее показать значок.

Чтобы вместо этого получить полное состояние одного аукциона, подписаться на его обновления в реальном времени и отобразить подробный интерфейс аукциона (обычно когда пользователь открывает конкретный аукцион), используйте [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/).

```
payments.starGiftActiveAuctionsNotModified#db33dad0 = payments.StarGiftActiveAuctions;
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;
---functions---
payments.getStarGiftActiveAuctions#a5d0514d hash:long = payments.StarGiftActiveAuctions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш, вычисленный <a href="/api/auctions">так, как указано здесь »</a></td></tr></tbody></table>

### Результат

[payments.StarGiftActiveAuctions](/type/payments.StarGiftActiveAuctions/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.

#### [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/)

Содержит обновления [состояния аукциона; подробнее о том, как включить эти обновления, см. здесь »](/api/auctions/).

#### [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/)

Возвращает сведения об [аукционе коллекционных подарков »](/api/auctions/); также подписывает пользователя на обновления аукциона, подробнее обо всём процессе см. [здесь »](/api/auctions/).
