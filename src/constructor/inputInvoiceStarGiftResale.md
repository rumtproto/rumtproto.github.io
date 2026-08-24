---
title: "inputInvoiceStarGiftResale"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftResale"
section: ref
kind: constructor
description: "Используется для покупки коллекционного подарка, выставленного на перепродажу; подробнее обо всём процессе см. здесь."
layout: layout.njk
---

# inputInvoiceStarGiftResale

Используется для покупки [коллекционного подарка](/api/gifts/#collectible-gifts), выставленного на перепродажу; подробнее обо всём процессе см. [здесь](/api/gifts/#reselling-collectible-gifts).

```
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Купить подарок за TON.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Слаг подарка, который нужно купить.</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Получатель подарка.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
