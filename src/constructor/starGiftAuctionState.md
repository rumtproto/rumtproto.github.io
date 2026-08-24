---
title: "starGiftAuctionState"
original: "https://core.telegram.org/constructor/starGiftAuctionState"
section: ref
kind: constructor
description: "Представляет активный или ожидающий аукцион »."
layout: layout.njk
---

# starGiftAuctionState

Представляет активный или ожидающий [аукцион »](/api/auctions/).

```
starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>version</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Применяйте входящие конструкторы <a href="/constructor/starGiftAuctionState">starGiftAuctionState</a> только если полученное значение <code>version</code> больше локально сохранённого <code>version</code>.</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Метка времени UNIX, указывающая, когда начнётся аукцион (или когда он начался, если это время уже прошло).</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Метка времени UNIX, указывающая, когда завершится аукцион</td></tr><tr><td><strong>min_bid_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Минимальная допустимая сумма ставки в <a href="/api/stars">Telegram Stars</a>: применимо, только если пользователь ещё не сделал ставку, иначе должно быть заменено значением <a href="/constructor/starGiftAuctionUserState">starGiftAuctionUserState</a>.<code>min_bid_amount</code> (которое устанавливается тогда и только тогда, когда пользователь уже сделал ставку на этом аукционе).</td></tr><tr><td><strong>bid_levels</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AuctionBidLevel">AuctionBidLevel</a>&gt;</td><td>Содержит разреженный список ставок, начиная с наибольших; более подробное описание доступно в <a href="/api/auctions">документации</a>.</td></tr><tr><td><strong>top_bidders</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Идентификаторы пользователей из числа трёх лидирующих участников торгов (конструкторы <a href="/constructor/user">user</a> будут возвращены в содержащем объекте как <a href="/api/min">min</a>-конструкторы).</td></tr><tr><td><strong>next_round_at</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Метка времени UNIX, указывающая, когда завершится текущий раунд аукциона, по итогам которого <a href="/constructor/starGift">starGift</a>.<code>gifts_per_round</code> подарков будут распределены между <a href="/constructor/starGift">starGift</a>.<code>gifts_per_round</code> лучшими участниками торгов.</td></tr><tr><td><strong>last_gift_num</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество подарков, розданных в предыдущем раунде (также используется для вычисления приблизительного номера подарка, который получит текущий пользователь, — <code>last_gift_num + approx_pos</code>; подробнее см. <a href="/api/auctions">здесь »</a>).</td></tr><tr><td><strong>gifts_left</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Оставшееся число подарков, которые ещё предстоит раздать.</td></tr><tr><td><strong>current_round</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Номер текущего раунда (начиная с 1).</td></tr><tr><td><strong>total_rounds</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Общее число раундов в этом аукционе.</td></tr><tr><td><strong>rounds</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/StarGiftAuctionRound">StarGiftAuctionRound</a>&gt;</td><td>Подробные сведения о раунде.</td></tr></tbody></table>

### Тип

[StarGiftAuctionState](/type/StarGiftAuctionState/)

### Связанные страницы

#### [starGiftAuctionState](/constructor/starGiftAuctionState/)

Представляет активный или ожидающий [аукцион »](/api/auctions/).

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/)

Содержит информацию о состоянии текущего пользователя в [аукционе »](/api/auctions/).

Флаги `bid_amount`, `bid_date`, `bid_peer` и `min_bid_amount` конструктора [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) будут установлены все сразу, если пользователь сделал ставку на аукционе.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.

#### [user](/constructor/user/)

Содержит сведения об определённом пользователе.

Если не указано иное, при обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) реализацию логики, которую следует применять при обновлении [локальной базы пиров-пользователей](/api/peers/).

#### [Конструкторы min](/api/min/)

В некоторых случаях в конструкторах пользователя и канала присутствует сокращённый набор полей (хотя id есть всегда) и установлен флаг min.

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).
