---
title: "payments.checkedGiftCode"
original: "https://core.telegram.org/constructor/payments.checkedGiftCode"
section: ref
kind: constructor
description: "Содержит информацию о ссылке на подарочный код Telegram Premium."
layout: layout.njk
---

# payments.checkedGiftCode

Содержит информацию о [ссылке на подарочный код Telegram Premium](/api/links/#premium-giftcode-links).

```
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>via_giveaway</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Был ли этот подарочный код создан <a href="/api/giveaways">розыгрышем</a>.</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Peer">Peer</a></td><td>Пир, создавший подарочный код.</td></tr><tr><td><strong>giveaway_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Идентификатор сообщения с розыгрышем в канале, указанном в <code>from_id</code>.</td></tr><tr><td><strong>to_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Пользователь — получатель подарка.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата создания подарочного кода.</td></tr><tr><td><strong>days</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Продолжительность подаренной подписки Telegram Premium в днях.</td></tr><tr><td><strong>used_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Когда подарочный код был активирован, если он был активирован.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Chat">Chat</a>&gt;</td><td>Упомянутые чаты</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Упомянутые пользователи</td></tr></tbody></table>

### Тип

[payments.CheckedGiftCode](/type/payments.CheckedGiftCode/)

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
