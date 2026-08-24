---
title: "StarsTransactionPeer"
original: "https://core.telegram.org/type/StarsTransactionPeer"
section: ref
kind: type
description: "Источник входящей транзакции Telegram Stars либо получатель исходящей транзакции Telegram Stars."
layout: layout.njk
---

# StarsTransactionPeer

Источник входящей [транзакции Telegram Stars](/api/stars/) либо получатель исходящей [транзакции Telegram Stars](/api/stars/).

```
starsTransactionPeerUnsupported#95f2bfe4 = StarsTransactionPeer;
starsTransactionPeerAppStore#b457b375 = StarsTransactionPeer;
starsTransactionPeerPlayMarket#7b560a0b = StarsTransactionPeer;
starsTransactionPeerPremiumBot#250dbaf8 = StarsTransactionPeer;
starsTransactionPeerFragment#e92fd902 = StarsTransactionPeer;
starsTransactionPeer#d80da15d peer:Peer = StarsTransactionPeer;
starsTransactionPeerAds#60682812 = StarsTransactionPeer;
starsTransactionPeerAPI#f9677aad = StarsTransactionPeer;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/starsTransactionPeerUnsupported">starsTransactionPeerUnsupported</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a>, которую невозможно описать средствами текущего слоя.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAppStore">starsTransactionPeerAppStore</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a> с App Store, используемую при покупке Telegram Stars через App Store.</td></tr><tr><td><a href="/constructor/starsTransactionPeerPlayMarket">starsTransactionPeerPlayMarket</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a> с Play Store, используемую при покупке Telegram Stars через Play Store.</td></tr><tr><td><a href="/constructor/starsTransactionPeerPremiumBot">starsTransactionPeerPremiumBot</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a>, совершённую через <a href="https://t.me/premiumbot">@PremiumBot</a> (то есть по схеме <a href="/constructor/inputInvoiceStars">inputInvoiceStars</a>, описанной <a href="/api/stars#buying-or-gifting-stars">здесь »</a>).</td></tr><tr><td><a href="/constructor/starsTransactionPeerFragment">starsTransactionPeerFragment</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a> с <a href="https://fragment.com">Fragment</a>, используемую при покупке Telegram Stars через <a href="https://fragment.com">Fragment</a>.</td></tr><tr><td><a href="/constructor/starsTransactionPeer">starsTransactionPeer</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a> с другим пиром.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAds">starsTransactionPeerAds</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a>, которой оплачивается <a href="/api/stars#paying-for-ads">реклама в Telegram, как описано здесь »</a>.</td></tr><tr><td><a href="/constructor/starsTransactionPeerAPI">starsTransactionPeerAPI</a></td><td>Описывает транзакцию <a href="/api/stars">Telegram Star</a>, которой оплачивается платное использование API, например <a href="/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once">платные рассылки ботов</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
