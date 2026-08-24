---
title: "inputInvoiceStarGiftAuctionBid"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftAuctionBid"
section: ref
kind: constructor
description: "Используется, чтобы сделать ставку на аукционе коллекционных подарков »."
layout: layout.njk
---

# inputInvoiceStarGiftAuctionBid

Используется, чтобы сделать ставку на [аукционе коллекционных подарков »](/api/auctions/).

```
inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>hide_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, ваше имя будет скрыто, если пир назначения решит показать подарок в своём профиле (он всё равно будет видеть, что подарок отправили вы).<br>Не должно задаваться при обновлении существующей ставки, так как для существующих ставок это значение изменить нельзя.</td></tr><tr><td><strong>update_bid</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Обязано устанавливаться при повышении уже сделанной ставки.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Идентификатор пользователя или канала (только если установлен <a href="/constructor/channelFull">channelFull</a>.<code>stargifts_available</code>), который получит подарок.</td></tr><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор подарка, из <a href="/constructor/starGift">starGift</a>.<code>id</code></td></tr><tr><td><strong>bid_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Общая сумма ставки в <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Необязательное сообщение, которое будет приложено к подарку, если мы выиграем этот раунд: максимальная длина этого поля указана в <a href="/api/config#stargifts-message-length-max">значении клиентской конфигурации stargifts_message_length_max »</a>.<br>Не должно задаваться при изменении существующей ставки, так как для уже сделанных ставок это значение изменить нельзя.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [channelFull](/constructor/channelFull/)

Полная информация о [канале](/api/channel/#channels), [супергруппе](/api/channel/#supergroups) или [гигагруппе](/api/channel/#gigagroups).

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [starGift](/constructor/starGift/)

Представляет [звёздный подарок, подробнее см. здесь »](/api/gifts/).

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
