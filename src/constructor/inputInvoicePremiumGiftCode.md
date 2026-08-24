---
title: "inputInvoicePremiumGiftCode"
original: "https://core.telegram.org/constructor/inputInvoicePremiumGiftCode"
section: ref
kind: constructor
description: "Используется, если пользователь хочет запустить розыгрыш в канале или супергруппе либо отправить подарочные коды участникам канала или супергруппы в обмен на бусты."
layout: layout.njk
---

# inputInvoicePremiumGiftCode

Используется, если пользователь хочет запустить [розыгрыш](/api/giveaways/) в канале или супергруппе либо отправить [подарочные коды](/api/giveaways/) участникам канала или супергруппы в обмен на [бусты](/api/boost/).

```
inputInvoicePremiumGiftCode#98986c0d purpose:InputStorePaymentPurpose option:PremiumGiftCodeOption = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>purpose</strong></td><td style="text-align: center;"><a href="/type/InputStorePaymentPurpose">InputStorePaymentPurpose</a></td><td>Следует заполнить конструктором <a href="/constructor/inputStorePaymentPremiumGiveaway">inputStorePaymentPremiumGiveaway</a> для <a href="/api/giveaways">розыгрышей</a> и <a href="/constructor/inputStorePaymentPremiumGiftCode">inputStorePaymentPremiumGiftCode</a> для <a href="/api/giveaways">подарков</a>.</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/PremiumGiftCodeOption">PremiumGiftCodeOption</a></td><td>Следует заполнить одним из вариантов розыгрыша, возвращённых методом <a href="/method/payments.getPremiumGiftCodeOptions">payments.getPremiumGiftCodeOptions</a>; подробнее см. документацию по <a href="/api/giveaways">розыгрышам »</a>.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [inputStorePaymentPremiumGiveaway](/constructor/inputStorePaymentPremiumGiveaway/)

Используется для оплаты [розыгрыша; подробнее см. здесь »](/api/giveaways/).

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [inputStorePaymentPremiumGiftCode](/constructor/inputStorePaymentPremiumGiftCode/)

Используется, чтобы подарить подписки [Telegram Premium](/api/premium/) только определённым подписчикам канала или супергруппы либо некоторым из наших контактов; подробнее о розыгрышах и подарках см. [здесь »](/api/giveaways/).

#### [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/)

Получить список вариантов [розыгрыша или подарочного кода »](/api/giveaways/) Telegram Premium.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.
