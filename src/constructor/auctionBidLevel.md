---
title: "auctionBidLevel"
original: "https://core.telegram.org/constructor/auctionBidLevel"
section: ref
kind: constructor
description: "Описывает ставку на аукционе."
layout: layout.njk
---

# auctionBidLevel

Описывает ставку на [аукционе](/api/auctions/).

```
auctionBidLevel#310240cc pos:int amount:long date:int = AuctionBidLevel;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>pos</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция ставки.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Размер ставки в <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата, когда была сделана ставка.</td></tr></tbody></table>

### Тип

[AuctionBidLevel](/type/AuctionBidLevel/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
