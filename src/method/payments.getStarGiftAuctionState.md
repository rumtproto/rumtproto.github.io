---
title: "payments.getStarGiftAuctionState"
original: "https://core.telegram.org/method/payments.getStarGiftAuctionState"
section: ref
kind: method
description: "Возвращает сведения об аукционе коллекционных подарков »; также подписывает пользователя на обновления аукциона, подробнее обо всём процессе см. здесь »."
layout: layout.njk
---

# payments.getStarGiftAuctionState

Возвращает сведения об [аукционе коллекционных подарков »](/api/auctions/); также подписывает пользователя на обновления аукциона, подробнее обо всём процессе см. [здесь »](/api/auctions/).

```
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;
---functions---
payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>auction</strong></td><td style="text-align: center;"><a href="/type/InputStarGiftAuction">InputStarGiftAuction</a></td><td>Либо идентификатор подарка, связанного с аукционом, либо <a href="/api/links#auction-links">слаг глубокой ссылки на аукцион »</a>.</td></tr><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Изначально <code>0</code>, затем устанавливается в возвращённое значение <a href="/constructor/starGiftAuctionState">starGiftAuctionState</a>.<code>version</code>, чтобы не запрашивать результаты повторно, если они не изменились.</td></tr></tbody></table>

### Результат

[payments.StarGiftAuctionState](/type/payments.StarGiftAuctionState/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>Переданный подарок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Представляет активный или ожидающий [аукцион »](/api/auctions/).

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
