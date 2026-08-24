---
title: "InputStorePaymentPurpose"
original: "https://core.telegram.org/type/InputStorePaymentPurpose"
section: ref
kind: type
description: "Информация о покупке Telegram Premium"
layout: layout.njk
---

# InputStorePaymentPurpose

Информация о покупке Telegram Premium

```
inputStorePaymentPremiumSubscription#a6751e66 flags:# restore:flags.0?true upgrade:flags.1?true = InputStorePaymentPurpose;
inputStorePaymentGiftPremium#616f7fe8 user_id:InputUser currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentPremiumGiftCode#fb790393 flags:# users:Vector<InputUser> boost_peer:flags.0?InputPeer currency:string amount:long message:flags.1?TextWithEntities = InputStorePaymentPurpose;
inputStorePaymentPremiumGiveaway#160544ca flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentStarsTopup#f9a2a6cb flags:# stars:long currency:string amount:long spend_purpose_peer:flags.0?InputPeer = InputStorePaymentPurpose;
inputStorePaymentStarsGift#1d741ef7 user_id:InputUser stars:long currency:string amount:long = InputStorePaymentPurpose;
inputStorePaymentStarsGiveaway#751f08fa flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.3?true stars:long boost_peer:InputPeer additional_peers:flags.1?Vector<InputPeer> countries_iso2:flags.2?Vector<string> prize_description:flags.4?string random_id:long until_date:int currency:string amount:long users:int = InputStorePaymentPurpose;
inputStorePaymentAuthCode#9bb2636d flags:# restore:flags.0?true phone_number:string phone_code_hash:string currency:string amount:long = InputStorePaymentPurpose;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputStorePaymentPremiumSubscription">inputStorePaymentPremiumSubscription</a></td><td>Информация о покупке Telegram Premium</td></tr><tr><td><a href="/constructor/inputStorePaymentGiftPremium">inputStorePaymentGiftPremium</a></td><td>Информация о покупке Telegram Premium в подарок</td></tr><tr><td><a href="/constructor/inputStorePaymentPremiumGiftCode">inputStorePaymentPremiumGiftCode</a></td><td>Используется, чтобы подарить подписки <a href="/api/premium">Telegram Premium</a> только определённым подписчикам канала или супергруппы либо некоторым из наших контактов; подробнее о розыгрышах и подарках см. <a href="/api/giveaways">здесь »</a>.</td></tr><tr><td><a href="/constructor/inputStorePaymentPremiumGiveaway">inputStorePaymentPremiumGiveaway</a></td><td>Используется для оплаты <a href="/api/giveaways">розыгрыша; подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/inputStorePaymentStarsTopup">inputStorePaymentStarsTopup</a></td><td>Используется для пополнения <a href="/api/stars">баланса Telegram Stars</a> текущего аккаунта.</td></tr><tr><td><a href="/constructor/inputStorePaymentStarsGift">inputStorePaymentStarsGift</a></td><td>Используется, чтобы подарить другу <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><a href="/constructor/inputStorePaymentStarsGiveaway">inputStorePaymentStarsGiveaway</a></td><td>Используется для оплаты <a href="/api/giveaways#star-giveaways">розыгрыша звёзд; подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/inputStorePaymentAuthCode">inputStorePaymentAuthCode</a></td><td>Обозначает оплату кода для входа.</td></tr></tbody></table>
