---
title: "starGiftAuctionRound"
original: "https://core.telegram.org/constructor/starGiftAuctionRound"
section: ref
kind: constructor
description: "Описывает один или несколько раундов аукциона коллекционных подарков »."
layout: layout.njk
---

# starGiftAuctionRound

Описывает один или несколько [раундов аукциона коллекционных подарков »](/api/auctions/).

```
starGiftAuctionRound#3aae0528 num:int duration:int = StarGiftAuctionRound;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>num</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Этот объект описывает все раунды, начиная с <code>num</code> и заканчивая <code>next.num-1</code> включительно (<code>next</code> — следующий <a href="/type/StarGiftAuctionRound">StarGiftAuctionRound</a>).</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность раунда (раундов) в секундах.</td></tr></tbody></table>

### Тип

[StarGiftAuctionRound](/type/StarGiftAuctionRound/)

### Связанные страницы

#### [StarGiftAuctionRound](/type/StarGiftAuctionRound/)

Описывает один или несколько раундов [аукциона коллекционных подарков »](/api/auctions/) с возможностью продления.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
