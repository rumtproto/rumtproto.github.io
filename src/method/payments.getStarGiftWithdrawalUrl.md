---
title: "payments.getStarGiftWithdrawalUrl"
original: "https://core.telegram.org/method/payments.getStarGiftWithdrawalUrl"
section: ref
kind: method
description: "Преобразовать коллекционный подарок » в NFT в блокчейне TON."
layout: layout.njk
---

# payments.getStarGiftWithdrawalUrl

Преобразовать [коллекционный подарок »](/api/gifts/) в NFT в блокчейне TON.

```
payments.starGiftWithdrawalUrl#84aa3a9c url:string = payments.StarGiftWithdrawalUrl;
---functions---
payments.getStarGiftWithdrawalUrl#d06e93a8 stargift:InputSavedStarGift password:InputCheckPasswordSRP = payments.StarGiftWithdrawalUrl;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>stargift</strong></td><td style="text-align: center;"><a href="/type/InputSavedStarGift">InputSavedStarGift</a></td><td>Коллекционный подарок, который требуется экспортировать.</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>Пароль двухфакторной авторизации текущего пользователя, передаваемый <a href="/api/srp">как описано здесь »</a>.</td></tr></tbody></table>

### Результат

[payments.StarGiftWithdrawalUrl](/type/payments.StarGiftWithdrawalUrl/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr><tr><td>400</td><td>PASSWORD_TOO_FRESH_%d</td><td>Пароль был изменён менее 24 часов назад, повторите попытку через %d секунд.</td></tr><tr><td>400</td><td>SESSION_TOO_FRESH_%d</td><td>Эта сессия была создана менее 24 часов назад, повторите попытку через %d секунд.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.
