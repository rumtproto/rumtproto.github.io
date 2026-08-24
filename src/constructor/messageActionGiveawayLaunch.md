---
title: "messageActionGiveawayLaunch"
original: "https://core.telegram.org/constructor/messageActionGiveawayLaunch"
section: ref
kind: constructor
description: "Розыгрыш начат."
layout: layout.njk
---

# messageActionGiveawayLaunch

[Розыгрыш](/api/giveaways/) начат.

```
messageActionGiveawayLaunch#a80f51e4 flags:# stars:flags.0?long = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Для <a href="/api/stars#star-giveaways">розыгрышей Telegram Stars</a> — общее количество разыгрываемых Telegram Stars.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
