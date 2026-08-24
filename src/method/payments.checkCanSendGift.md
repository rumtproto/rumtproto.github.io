---
title: "payments.checkCanSendGift"
original: "https://core.telegram.org/method/payments.checkCanSendGift"
section: ref
kind: method
description: "Проверить, можно ли отправить указанный подарок »."
layout: layout.njk
---

# payments.checkCanSendGift

Проверить, можно ли отправить указанный [подарок »](/api/gifts/).

```
payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;
---functions---
payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>gift_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор подарка.</td></tr></tbody></table>

### Результат

[payments.CheckCanSendGiftResult](/type/payments.CheckCanSendGiftResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>STARGIFT_INVALID</td><td>Переданный подарок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
