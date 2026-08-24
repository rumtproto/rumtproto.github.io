---
title: "PremiumGiftCodeOption"
original: "https://core.telegram.org/type/PremiumGiftCodeOption"
section: ref
kind: type
description: "Вариант розыгрыша."
layout: layout.njk
---

# PremiumGiftCodeOption

Вариант [розыгрыша](/api/giveaways/).

```
premiumGiftCodeOption#257e962b flags:# users:int months:int store_product:flags.0?string store_quantity:flags.1?int currency:string amount:long = PremiumGiftCodeOption;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/premiumGiftCodeOption">premiumGiftCodeOption</a></td><td>Содержит информацию о варианте <a href="/api/giveaways">розыгрыша или подарка</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.
