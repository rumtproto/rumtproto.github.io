---
title: "account.updatePasswordSettings"
original: "https://core.telegram.org/method/account.updatePasswordSettings"
section: ref
kind: method
description: "Задать новый пароль двухфакторной аутентификации"
layout: layout.njk
---

# account.updatePasswordSettings

Задать новый пароль двухфакторной аутентификации

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updatePasswordSettings#a59b102f password:InputCheckPasswordSRP new_settings:account.PasswordInputSettings = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>Прежний пароль (см. <a href="/api/srp">SRP</a>)</td></tr><tr><td><strong>new_settings</strong></td><td style="text-align: center;"><a href="/type/account.PasswordInputSettings">account.PasswordInputSettings</a></td><td>Новый пароль (см. <a href="/api/srp">SRP</a>)</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INVALID</td><td>Указанный адрес электронной почты недействителен.</td></tr><tr><td>400</td><td>EMAIL_UNCONFIRMED</td><td>Адрес электронной почты не подтверждён.</td></tr><tr><td>400</td><td>EMAIL_UNCONFIRMED_%d</td><td>Указанный адрес электронной почты не подтверждён; %d — длина кода подтверждения, только что отправленного на этот адрес: используйте <a href="/method/account.verifyEmail">account.verifyEmail</a>, чтобы ввести полученный код подтверждения и включить почту для восстановления.</td></tr><tr><td>400</td><td>NEW_SALT_INVALID</td><td>Новая соль недействительна.</td></tr><tr><td>400</td><td>NEW_SETTINGS_EMPTY</td><td>На текущем аккаунте не установлен пароль, и в <code>new_settings</code> не указан новый пароль.</td></tr><tr><td>400</td><td>NEW_SETTINGS_INVALID</td><td>Новые настройки пароля недействительны.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr><tr><td>400</td><td>SRP_ID_INVALID</td><td>Указан недействительный SRP ID.</td></tr><tr><td>400</td><td>SRP_PASSWORD_CHANGED</td><td>Пароль изменился.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [account.verifyEmail](/method/account.verifyEmail/)

Подтвердить адрес электронной почты.
