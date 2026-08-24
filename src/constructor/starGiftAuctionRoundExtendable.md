---
title: "starGiftAuctionRoundExtendable"
original: "https://core.telegram.org/constructor/starGiftAuctionRoundExtendable"
section: ref
kind: constructor
description: "Описывает один или несколько продлеваемых раундов аукциона коллекционных подарков »."
layout: layout.njk
---

# starGiftAuctionRoundExtendable

Описывает один или несколько продлеваемых [раундов аукциона коллекционных подарков »](/api/auctions/).

```
starGiftAuctionRoundExtendable#aa021e5 num:int duration:int extend_top:int extend_window:int = StarGiftAuctionRound;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>num</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Этот объект описывает все раунды, начиная с <code>num</code> и заканчивая <code>next.num-1</code> включительно (<code>next</code> — следующий <a href="/type/StarGiftAuctionRound">StarGiftAuctionRound</a>).</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность раунда (раундов) в секундах.</td></tr><tr><td><strong>extend_top</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Раунд (раунды) будет продлён на <code>extend_window</code>, если ставка изменит состав или порядок первых <code>extend_top</code> участников.</td></tr><tr><td><strong>extend_window</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Раунд (раунды) будет продлён на указанное число секунд, если ставка изменит состав или порядок первых <code>extend_top</code> участников.</td></tr></tbody></table>

### Тип

[StarGiftAuctionRound](/type/StarGiftAuctionRound/)

### Связанные страницы

#### [StarGiftAuctionRound](/type/StarGiftAuctionRound/)

Описывает один или несколько раундов [аукциона коллекционных подарков »](/api/auctions/) с возможностью продления.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
