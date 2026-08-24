---
title: "starGiftAuctionAcquiredGift"
original: "https://core.telegram.org/constructor/starGiftAuctionAcquiredGift"
section: ref
kind: constructor
description: "Описывает подарок, который текущий пользователь выиграл на аукционе."
layout: layout.njk
---

# starGiftAuctionAcquiredGift

Описывает подарок, который текущий пользователь выиграл на аукционе.

```
starGiftAuctionAcquiredGift#42b00348 flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities gift_num:flags.2?int = StarGiftAuctionAcquiredGift;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>name_hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, ваше имя будет скрыто, если пир назначения решит показать подарок в своём профиле (он всё равно будет видеть, что подарок отправили вы).</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>[@term:peer] Пир, получивший подарок.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда подарок был получен.</td></tr><tr><td><strong>bid_amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Сумма в <a href="/api/stars">Telegram Stars</a>, предложенная на торгах для получения подарка.</td></tr><tr><td><strong>round</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Номер раунда, в котором был получен подарок.</td></tr><tr><td><strong>pos</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Позиция подарка на аукционе.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities">TextWithEntities</a></td><td>Необязательное сообщение, приложенное к подарку, переданное при размещении ставки.</td></tr><tr><td><strong>gift_num</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Если установлено, коллекционный номер выигранного подарка среди всех коллекционных экземпляров того же типа.<br>Это поле необязательное, потому что флаг не будет установлен <strong>только</strong> у аукционных коллекционных подарков, выигранных до появления этого поля в API.</td></tr></tbody></table>

### Тип

[StarGiftAuctionAcquiredGift](/type/StarGiftAuctionAcquiredGift/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
