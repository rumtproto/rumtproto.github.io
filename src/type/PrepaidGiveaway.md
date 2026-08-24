---
title: "PrepaidGiveaway"
original: "https://core.telegram.org/type/PrepaidGiveaway"
section: ref
kind: type
description: "Содержит информацию о предоплаченном розыгрыше »."
layout: layout.njk
---

# PrepaidGiveaway

Содержит информацию о [предоплаченном розыгрыше »](/api/giveaways/).

```
prepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;
prepaidStarsGiveaway#9a9d77e0 id:long stars:long quantity:int boosts:int date:int = PrepaidGiveaway;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/prepaidGiveaway">prepaidGiveaway</a></td><td>Содержит информацию о <a href="/api/giveaways">предоплаченном розыгрыше »</a>.</td></tr><tr><td><a href="/constructor/prepaidStarsGiveaway">prepaidStarsGiveaway</a></td><td>Содержит информацию о <a href="/api/giveaways#star-giveaways">предоплаченном розыгрыше Telegram Stars »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
