---
title: "messageActionStarGiftPurchaseOfferDeclined"
original: "https://core.telegram.org/constructor/messageActionStarGiftPurchaseOfferDeclined"
section: ref
kind: constructor
description: "Предложение о покупке коллекционного подарка » было отклонено либо срок его действия истёк; весь порядок действий описан здесь »."
layout: layout.njk
---

# messageActionStarGiftPurchaseOfferDeclined

[Предложение о покупке коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers) было отклонено либо срок его действия истёк; весь порядок действий описан [здесь »](/api/gifts/#collectible-gift-purchase-offers).

```
messageActionStarGiftPurchaseOfferDeclined#73ada76b flags:# expired:flags.0?true gift:StarGift price:StarsAmount = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, владелец не предпринял никаких действий до истечения срока <a href="/constructor/messageActionStarGiftPurchaseOffer">messageActionStarGiftPurchaseOffer</a>.<code>expires_at</code>, и предложение истекло автоматически; иначе владелец явно отклонил предложение.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td>Коллекционный подарок, к которому относилось отклонённое или истёкшее предложение.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Предложенная цена, автоматически возвращаемая покупателю.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/)

Содержит предложение о покупке [коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полный порядок действий см. [здесь »](/api/gifts/#collectible-gift-purchase-offers).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
