---
title: "payments.getStarsRevenueWithdrawalUrl"
original: "https://core.telegram.org/method/payments.getStarsRevenueWithdrawalUrl"
section: ref
kind: method
description: "Вывести средства с баланса Stars » канала или бота."
layout: layout.njk
---

# payments.getStarsRevenueWithdrawalUrl

Вывести средства с [баланса Stars »](/api/stars/#withdrawing-revenue) канала или бота.

```
payments.starsRevenueWithdrawalUrl#1dab80b7 url:string = payments.StarsRevenueWithdrawalUrl;
---functions---
payments.getStarsRevenueWithdrawalUrl#2433dc92 flags:# ton:flags.0?true peer:InputPeer amount:flags.1?long password:InputCheckPasswordSRP = payments.StarsRevenueWithdrawalUrl;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, выводит доход канала или доход от рекламы в TON.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Канал или бот, с которого выводятся средства.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>Количество звёзд или нанограммов для вывода.</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>Пароль 2FA, подробнее <a href="/api/srp#using-the-2fa-password">см. здесь »</a>.</td></tr></tbody></table>

### Результат

[payments.StarsRevenueWithdrawalUrl](/type/payments.StarsRevenueWithdrawalUrl/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr><tr><td>400</td><td>PASSWORD_MISSING</td><td>Перед выполнением этой операции вы обязаны <a href="/api/srp">включить двухфакторную аутентификацию</a>.</td></tr><tr><td>400</td><td>PASSWORD_TOO_FRESH_%d</td><td>Пароль был изменён менее 24 часов назад, повторите попытку через %d секунд.</td></tr><tr><td>400</td><td>SESSION_TOO_FRESH_%d</td><td>Эта сессия была создана менее 24 часов назад, повторите попытку через %d секунд.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
