---
title: "payments.getPremiumGiftCodeOptions"
original: "https://core.telegram.org/method/payments.getPremiumGiftCodeOptions"
section: ref
kind: method
description: "Получить список вариантов розыгрыша или подарочного кода » Telegram Premium."
layout: layout.njk
---

# payments.getPremiumGiftCodeOptions

Получить список вариантов [розыгрыша или подарочного кода »](/api/giveaways/) Telegram Premium.

```
---functions---
payments.getPremiumGiftCodeOptions#2757ba54 flags:# boost_peer:flags.0?InputPeer = Vector<PremiumGiftCodeOption>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputPeer">InputPeer</a></td><td>Канал, который запустит розыгрыш</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[PremiumGiftCodeOption](/type/PremiumGiftCodeOption/)\>

### Этот метод доступен только пользователям

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
