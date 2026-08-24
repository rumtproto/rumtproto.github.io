---
title: "InputInvoice"
original: "https://core.telegram.org/type/InputInvoice"
section: ref
kind: type
description: "Счёт"
layout: layout.njk
---

# InputInvoice

Счёт

```
inputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;
inputInvoiceSlug#c326caef slug:string = InputInvoice;
inputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;
inputInvoiceStars#65f00ce3 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceChatInviteSubscription#34e793f1 hash:string = InputInvoice;
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
inputInvoicePremiumAuthCode#3e77f614 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceStarGiftDropOriginalDetails#923d8d1 stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/inputInvoiceMessage">inputInvoiceMessage</a></td><td>Счёт, содержащийся в сообщении <a href="/constructor/messageMediaInvoice">messageMediaInvoice</a> или в <a href="/api/paid-media">платном медиа »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceSlug">inputInvoiceSlug</a></td><td>Идентификатор счёта (slug), взятый из <a href="/api/links#invoice-links">глубокой ссылки на счёт</a> или из <a href="/api/config#premium-invoice-slug">параметра конфигурации приложения <code>premium_invoice_slug</code> »</a></td></tr><tr><td><a href="/constructor/inputInvoicePremiumGiftCode">inputInvoicePremiumGiftCode</a></td><td>Используется, если пользователь хочет запустить <a href="/api/giveaways">розыгрыш</a> в канале или супергруппе либо отправить <a href="/api/giveaways">подарочные коды</a> участникам канала или супергруппы в обмен на <a href="/api/boost">бусты</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStars">inputInvoiceStars</a></td><td>Используется для пополнения баланса <a href="/api/stars">Telegram Stars</a> текущего или чужого аккаунта, а также для запуска <a href="/api/giveaways#star-giveaways">розыгрыша Telegram Stars »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceChatInviteSubscription">inputInvoiceChatInviteSubscription</a></td><td>Используется для оплаты <a href="/api/stars#star-subscriptions">подписки за Telegram Stars »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGift">inputInvoiceStarGift</a></td><td>Используется для покупки <a href="/api/gifts">звёздного подарка Telegram, подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftUpgrade">inputInvoiceStarGiftUpgrade</a></td><td>Используется, чтобы <a href="/api/gifts#upgrade-a-gift-to-a-collectible-gift">оплатить улучшение подарка до коллекционного</a>; подробнее обо всём процессе см. документацию по <a href="/api/gifts#collectible-gifts">коллекционным подаркам »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftTransfer">inputInvoiceStarGiftTransfer</a></td><td>Используется, чтобы <a href="/api/gifts#transferring-collectible-gifts">оплатить передачу коллекционного подарка другому пиру</a>; подробнее см. документацию по <a href="/api/gifts#transferring-collectible-gifts">подаркам »</a>.</td></tr><tr><td><a href="/constructor/inputInvoicePremiumGiftStars">inputInvoicePremiumGiftStars</a></td><td>Используется, чтобы подарить другому пользователю подписку <a href="/api/premium">Telegram Premium</a> с оплатой <a href="/api/stars">Telegram Stars</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceBusinessBotTransferStars">inputInvoiceBusinessBotTransferStars</a></td><td>Перевести stars с баланса учётной записи пользователя, <a href="/api/bots/connected-business-bots">подключённой к бизнес-боту</a>, на баланс <a href="/api/bots/connected-business-bots">бизнес-бота</a>; подробнее обо всём процессе см. <a href="/api/stars#transferring-stars-from-a-business-account-to-the-business-bot">здесь »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftResale">inputInvoiceStarGiftResale</a></td><td>Используется для покупки <a href="/api/gifts#collectible-gifts">коллекционного подарка</a>, выставленного на перепродажу; подробнее обо всём процессе см. <a href="/api/gifts#reselling-collectible-gifts">здесь</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftPrepaidUpgrade">inputInvoiceStarGiftPrepaidUpgrade</a></td><td><a href="/api/gifts#prepaying-for-someone-elses-upgrade">Отдельная предоплата улучшения подарка »</a>.</td></tr><tr><td><a href="/constructor/inputInvoicePremiumAuthCode">inputInvoicePremiumAuthCode</a></td><td>Используется для оплаты кодов входа в случае высокой стоимости SMS с кодами подтверждения для страны или оператора пользователя; подробнее <a href="/api/auth#paid-auth">см. здесь »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftDropOriginalDetails">inputInvoiceStarGiftDropOriginalDetails</a></td><td>Используется для оплаты удаления атрибута <a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a> у коллекционного подарка; полный порядок действий см. <a href="/api/gifts#dropping-the-original-details-of-an-upgraded-gift">здесь »</a>.</td></tr><tr><td><a href="/constructor/inputInvoiceStarGiftAuctionBid">inputInvoiceStarGiftAuctionBid</a></td><td>Используется, чтобы сделать ставку на <a href="/api/auctions">аукционе коллекционных подарков »</a>.</td></tr></tbody></table>
