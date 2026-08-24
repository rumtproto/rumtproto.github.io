---
title: "starGiftAuctionStateFinished"
original: "https://core.telegram.org/constructor/starGiftAuctionStateFinished"
section: ref
kind: constructor
description: "Представляет завершившийся аукцион »."
layout: layout.njk
---

# starGiftAuctionStateFinished

Представляет завершившийся [аукцион »](/api/auctions/).

```
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Метка времени UNIX, указывающая, когда начался аукцион.</td></tr><tr><td><strong>end_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Метка времени UNIX, указывающая, когда завершился аукцион.</td></tr><tr><td><strong>average_price</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Средняя стоимость распределённых подарков.</td></tr><tr><td><strong>listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Количество подарков с этого аукциона, которые сейчас перепродаются в Telegram: если установлено, при нажатии на соответствующий элемент в графических клиентах следует вызвать <a href="/method/payments.getResaleStarGifts">payments.getResaleStarGifts</a> с идентификатором подарка, связанного с этим аукционом; подробнее см. <a href="/api/auctions">здесь »</a>.</td></tr><tr><td><strong>fragment_listed_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Количество подарков с этого аукциона, которые сейчас перепродаются на <a href="https://fragment.com">Fragment</a>.</td></tr><tr><td><strong>fragment_listed_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Устанавливается, только если установлено <code>fragment_listed_count</code>. Если установлено, при нажатии на соответствующий элемент в графических клиентах следует открыть этот URL.</td></tr></tbody></table>

### Тип

[StarGiftAuctionState](/type/StarGiftAuctionState/)

### Связанные страницы

#### [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

Получить [коллекционные подарки](/api/gifts/#collectible-gifts) определённого типа, выставленные на перепродажу; подробнее [см. здесь »](/api/gifts/#reselling-collectible-gifts).

Параметры `sort_by_price` и `sort_by_num` взаимно исключают друг друга; если не задан ни один из них, результаты сортируются по времени последнего изменения цены перепродажи (unixtime, по убыванию).

Подробную документацию по этому методу см. [здесь »](/api/gifts/#sending-gifts).

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
