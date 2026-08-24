---
title: "starsGiveawayWinnersOption"
original: "https://core.telegram.org/constructor/starsGiveawayWinnersOption"
section: ref
kind: constructor
description: "Допустимые варианты числа победителей розыгрыша."
layout: layout.njk
---

# starsGiveawayWinnersOption

Допустимые варианты числа победителей розыгрыша.

```
starsGiveawayWinnersOption#54236209 flags:# default:flags.0?true users:int per_user_stars:long = StarsGiveawayWinnersOption;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, этот вариант должен быть заранее выбран по умолчанию в списке вариантов.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество пользователей, которые будут выбраны победителями случайным образом.</td></tr><tr><td><strong>per_user_stars</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество <a href="/api/stars">Telegram Stars</a>, которое получит каждый победитель.</td></tr></tbody></table>

### Тип

[StarsGiveawayWinnersOption](/type/StarsGiveawayWinnersOption/)

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
