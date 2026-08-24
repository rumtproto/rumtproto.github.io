---
title: "payments.CheckedGiftCode"
original: "https://core.telegram.org/type/payments.CheckedGiftCode"
section: ref
kind: type
description: "Информация о подарочном коде Telegram Premium."
layout: layout.njk
---

# Payments.CheckedGiftCode

Информация о [подарочном коде Telegram Premium](/api/giveaways/).

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;

---functions---

payments.checkGiftCode#8e51b4c1 slug:string = payments.CheckedGiftCode;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.checkedGiftCode">payments.checkedGiftCode</a></td><td>Содержит информацию о <a href="/api/links#premium-giftcode-links">ссылке на подарочный код Telegram Premium</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.checkGiftCode">payments.checkGiftCode</a></td><td>Получить сведения о <a href="/api/giveaways">подарочном коде Telegram Premium »</a></td></tr></tbody></table>

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
