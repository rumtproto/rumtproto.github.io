---
title: "account.deleteAccount"
original: "https://core.telegram.org/method/account.deleteAccount"
section: ref
kind: method
description: "Удалить аккаунт пользователя с серверов Telegram."
layout: layout.njk
---

# account.deleteAccount

Удалить аккаунт пользователя с серверов Telegram.

Также может использоваться для удаления аккаунта пользователя, который ввёл код входа, но забыл пароль двухфакторной аутентификации и не настроил способ восстановления; подробнее о восстановлении пароля [см. здесь »](/api/srp/#password-recovery), а об удалении аккаунта — [здесь »](/api/account-deletion/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.deleteAccount#a2c0cf74 flags:# reason:string password:flags.0?InputCheckPasswordSRP = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Почему удаляется аккаунт; может быть пустым</td></tr><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td><a href="/api/srp">Пароль двухфакторной аутентификации</a>: это поле можно не передавать даже для аккаунтов с включённой двухфакторной аутентификацией — в этом случае удаление аккаунта будет отложено на 7 дней, <a href="/api/account-deletion">как указано в документации »</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>420</td><td>2FA_CONFIRM_WAIT_%d</td><td>Поскольку этот аккаунт активен и защищён паролем двухфакторной аутентификации, в целях безопасности мы удалим его через неделю. Вы можете отменить этот процесс в любой момент; сбросить аккаунт вы сможете через %d секунд.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Удаление аккаунта](/api/account-deletion/)

Как сбросить аккаунт, если пароль двухфакторной аутентификации забыт.
