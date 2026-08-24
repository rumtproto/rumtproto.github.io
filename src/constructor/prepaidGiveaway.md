---
title: "prepaidGiveaway"
original: "https://core.telegram.org/constructor/prepaidGiveaway"
section: ref
kind: constructor
description: "Содержит информацию о предоплаченном розыгрыше »."
layout: layout.njk
---

# prepaidGiveaway

Содержит информацию о [предоплаченном розыгрыше »](/api/giveaways/).

```
prepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор предоплаченного розыгрыша.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длительность каждой подаренной подписки <a href="/api/premium">Telegram Premium</a>, в месяцах.</td></tr><tr><td><strong>quantity</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество разыгранных подписок <a href="/api/premium">Telegram Premium</a>.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата платежа.</td></tr></tbody></table>

### Тип

[PrepaidGiveaway](/type/PrepaidGiveaway/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
