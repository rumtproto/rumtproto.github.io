---
title: "messageActionStarGiftPurchaseOffer"
original: "https://core.telegram.org/constructor/messageActionStarGiftPurchaseOffer"
section: ref
kind: constructor
description: "Содержит предложение о покупке коллекционного подарка »; полный порядок действий см. здесь »."
layout: layout.njk
---

# messageActionStarGiftPurchaseOffer

Содержит предложение о покупке [коллекционного подарка »](/api/gifts/#collectible-gift-purchase-offers); полный порядок действий см. [здесь »](/api/gifts/#collectible-gift-purchase-offers).

```
messageActionStarGiftPurchaseOffer#774278d4 flags:# accepted:flags.0?true declined:flags.1?true gift:StarGift price:StarsAmount expires_at:int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>accepted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, владелец подарка принял это предложение.</td></tr><tr><td><strong>declined</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, владелец подарка отклонил это предложение.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift">StarGift</a></td><td>Коллекционный подарок, к которому относится предложение.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Предложенная цена.</td></tr><tr><td><strong>expires_at</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата истечения срока действия предложения (временная метка UNIX): если владелец не совершит никаких действий до этой даты, предложение истечёт, а покупателю будет автоматически возвращён платёж.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
