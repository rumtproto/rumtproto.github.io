---
title: "inputInvoiceStarGiftPrepaidUpgrade"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftPrepaidUpgrade"
section: ref
kind: constructor
description: "Отдельная предоплата улучшения подарка »."
layout: layout.njk
---

# inputInvoiceStarGiftPrepaidUpgrade

[Отдельная предоплата улучшения подарка »](https://core.telegram.org/api/gifts#prepaying-for-someone-elses-upgrade).

```
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, которому принадлежит подарок.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:hash] Хеш улучшения из <a href="/constructor/messageActionStarGift">messageActionStarGift</a>.<code>prepaid_upgrade_hash</code> или <a href="/constructor/savedStarGift">savedStarGift</a>.<code>prepaid_upgrade_hash</code>.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [messageActionStarGift](/constructor/messageActionStarGift/)

Вы получили [подарок, подробнее см. здесь »](/api/gifts/).

#### [savedStarGift](/constructor/savedStarGift/)

Представляет [подарок](/api/gifts/), принадлежащий пиру.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
