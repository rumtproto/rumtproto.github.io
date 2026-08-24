---
title: "messageActionGiveawayResults"
original: "https://core.telegram.org/constructor/messageActionGiveawayResults"
section: ref
kind: constructor
description: "Розыгрыш завершён."
layout: layout.njk
---

# messageActionGiveawayResults

[Розыгрыш](/api/giveaways/) завершён.

```
messageActionGiveawayResults#87e2f155 flags:# stars:flags.0?true winners_count:int unclaimed_count:int = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, это <a href="/api/stars#star-giveaways">розыгрыш Telegram Stars</a></td></tr><tr><td><strong>winners_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество победителей в розыгрыше</td></tr><tr><td><strong>unclaimed_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество нераспределённых призов</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
