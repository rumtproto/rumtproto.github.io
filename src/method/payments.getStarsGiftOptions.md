---
title: "payments.getStarsGiftOptions"
original: "https://core.telegram.org/method/payments.getStarsGiftOptions"
section: ref
kind: method
description: "Получить список вариантов подарка за Telegram Stars » в виде конструкторов starsGiftOption."
layout: layout.njk
---

# payments.getStarsGiftOptions

Получить список [вариантов подарка за Telegram Stars »](/api/stars/#buying-or-gifting-stars) в виде конструкторов [starsGiftOption](/constructor/starsGiftOption/).

```
---functions---
payments.getStarsGiftOptions#d3c96bc8 flags:# user_id:flags.0?InputUser = Vector<StarsGiftOption>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputUser">InputUser</a></td><td>Получатель подарка (необязательно).</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[StarsGiftOption](/type/StarsGiftOption/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>USER_GIFT_UNAVAILABLE</td><td>Подарки недоступны в текущем регионе (<a href="/api/config#stars-gifts-enabled">stars_gifts_enabled</a> равен false).</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [starsGiftOption](/constructor/starsGiftOption/)

[Вариант подарка за Telegram Stars](/api/stars/#buying-or-gifting-stars).

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
