---
title: "inputInvoiceStarGiftUpgrade"
original: "https://core.telegram.org/constructor/inputInvoiceStarGiftUpgrade"
section: ref
kind: constructor
description: "Используется, чтобы оплатить улучшение подарка до коллекционного; подробнее обо всём процессе см. документацию по коллекционным подаркам »."
layout: layout.njk
---

# inputInvoiceStarGiftUpgrade

Используется, чтобы [оплатить улучшение подарка до коллекционного](/api/gifts/#upgrade-a-gift-to-a-collectible-gift); подробнее обо всём процессе см. документацию по [коллекционным подаркам »](/api/gifts/#collectible-gifts).

```
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>keep_original_details</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы сохранить исходный текст подарка, отправителя и получателя в улучшенном подарке в виде атрибута <a href="/constructor/starGiftAttributeOriginalDetails">starGiftAttributeOriginalDetails</a>.</td></tr><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>Идентификатор полученного подарка, который нужно превратить в коллекционный.</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)

Сведения об отправителе, получателе и сообщении, приложенных к исходному [подарку »](/api/gifts/), до того как он был превращён в [коллекционный подарок »](/api/gifts/#collectible-gifts).

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
