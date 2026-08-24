---
title: "starGiftAuctionUserState"
original: "https://core.telegram.org/constructor/starGiftAuctionUserState"
section: ref
kind: constructor
description: "Содержит информацию о состоянии текущего пользователя в аукционе »."
layout: layout.njk
---

# starGiftAuctionUserState

Содержит информацию о состоянии текущего пользователя в [аукционе »](/api/auctions/).

Флаги `bid_amount`, `bid_date`, `bid_peer` и `min_bid_amount` конструктора [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) будут установлены все сразу, если пользователь сделал ставку на аукционе.

```
starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>returned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, сделанная ставка была возвращена пользователю, потому что её перебили настолько, что она выпала за пределы верхних <a href="/constructor/starGiftAuctionState">starGiftAuctionState</a>.<code>gifts_left</code> позиций: это означает, что пользователь не получит ни одного подарка, даже если новых ставок больше не будет, поэтому ставка была полностью снята с аукциона, и для повторного участия пользователь обязан вручную сделать новую ставку.</td></tr><tr><td><strong>bid_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Содержит размер сделанной ставки в <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>bid_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Содержит метку времени UNIX, указывающую, когда была сделана ставка.</td></tr><tr><td><strong>min_bid_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Содержит минимально допустимый размер ставки в <a href="/api/stars">Telegram Stars</a>; если задано, переопределяет <a href="/constructor/starGiftAuctionState">starGiftAuctionState</a>.<code>min_bid_amount</code> для текущего пользователя.</td></tr><tr><td><strong>bid_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Содержит пир, который получит подарок, если вы в итоге выиграете этот раунд</td></tr><tr><td><strong>acquired_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Содержит количество подарков, приобретённых текущим пользователем на аукционе к настоящему моменту.</td></tr></tbody></table>

### Тип

[StarGiftAuctionUserState](/type/StarGiftAuctionUserState/)

### Связанные страницы

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Представляет активный или ожидающий [аукцион »](/api/auctions/).

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Содержит информацию о состоянии текущего пользователя в [аукционе »](/api/auctions/).

Флаги `bid_amount`, `bid_date`, `bid_peer` и `min_bid_amount` конструктора [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) будут установлены все сразу, если пользователь сделал ставку на аукционе.
