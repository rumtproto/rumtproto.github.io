---
title: "inputInvoiceStarGiftTransfer"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftTransfer"
section: ref
kind: constructor
description: "Используется, чтобы оплатить передачу коллекционного подарка другому пиру; подробнее см. документацию по подаркам »."
layout: layout.njk
---

# inputInvoiceStarGiftTransfer

Используется, чтобы [оплатить передачу коллекционного подарка другому пиру](/api/gifts/#transferring-collectible-gifts); подробнее см. документацию по [подаркам »](/api/gifts/#transferring-collectible-gifts).

```
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>Идентификатор полученного подарка</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пир назначения</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
