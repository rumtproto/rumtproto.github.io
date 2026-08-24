---
title: "prepaidStarsGiveaway"
original: "https://core.telegram.org/constructor/prepaidStarsGiveaway"
section: ref
kind: constructor
description: "Содержит информацию о предоплаченном розыгрыше Telegram Stars »."
layout: layout.njk
---

# prepaidStarsGiveaway

Содержит информацию о [предоплаченном розыгрыше Telegram Stars »](/api/giveaways/#star-giveaways).

```
prepaidStarsGiveaway#9a9d77e0 id:long stars:long quantity:int boosts:int date:int = PrepaidGiveaway;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор предоплаченного розыгрыша.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество разыгранных <a href="/api/stars">Telegram Stars »</a></td></tr><tr><td><strong>quantity</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество победителей розыгрыша</td></tr><tr><td><strong>boosts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество бустов, которые канал получит при запуске розыгрыша.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда розыгрыш был оплачен</td></tr></tbody></table>

### Тип

[PrepaidGiveaway](/type/PrepaidGiveaway/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
