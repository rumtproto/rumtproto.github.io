---
title: "payments.checkGiftCode"
original: "https://core.telegram.org/method/payments.checkGiftCode"
section: ref
kind: method
description: "Получить сведения о подарочном коде Telegram Premium »"
layout: layout.njk
---

# payments.checkGiftCode

Получить сведения о [подарочном коде Telegram Premium »](/api/giveaways/)

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;
---functions---
payments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Подарочный код для проверки</td></tr></tbody></table>

### Результат

[payments.CheckedGiftCode](/type/payments.CheckedGiftCode/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GIFT_SLUG_EXPIRED</td><td>Срок действия указанного слага подарка истёк.</td></tr><tr><td>400</td><td>GIFT_SLUG_INVALID</td><td>Указанный слаг недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
