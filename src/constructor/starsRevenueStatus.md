---
title: "starsRevenueStatus"
original: "https://core.telegram.org/constructor/starsRevenueStatus"
section: ref
kind: constructor
description: "Описывает балансы дохода в Telegram Stars »."
layout: layout.njk
---

# starsRevenueStatus

Описывает [балансы дохода в Telegram Stars »](/api/stars/).

```
starsRevenueStatus#febe5491 flags:# withdrawal_enabled:flags.0?true current_balance:StarsAmount available_balance:StarsAmount overall_revenue:StarsAmount next_withdrawal_at:flags.1?int = StarsRevenueStatus;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>withdrawal_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, пользователь может <a href="/api/stars#withdrawing-revenue">вывести</a> до <code>available_balance</code> stars.</td></tr><tr><td><strong>current_balance</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Количество ещё не выведенных Telegram Stars.</td></tr><tr><td><strong>available_balance</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Количество Telegram Stars, доступных для вывода.</td></tr><tr><td><strong>overall_revenue</strong></td><td style="text-align: center;"><a href="/type/StarsAmount">StarsAmount</a></td><td>Общая сумма заработанных Telegram Stars.</td></tr><tr><td><strong>next_withdrawal_at</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Время в формате unixtime, указывающее, когда пользователю станет доступен вывод средств. Если поле не задано, вывод можно начать прямо сейчас.</td></tr></tbody></table>

### Тип

[StarsRevenueStatus](/type/StarsRevenueStatus/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
