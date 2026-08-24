---
title: "Двухфакторная аутентификация"
original: "https://core.telegram.org/api/srp"
section: api
description: "Для реализации 2FA в Telegram применяется протокол Secure Remote Password версии 6a."
layout: layout.njk
---

# Двухфакторная аутентификация

Для реализации 2FA в Telegram применяется [протокол Secure Remote Password](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol) версии 6a.

Пример реализации: [tdlib](https://github.com/tdlib/td/blob/4d06d1ba3a1978476fe2b6575de8388439f6baa3/td/telegram/PasswordManager.cpp).

### Проверка пароля с помощью SRP

Чтобы войти в аккаунт, защищённый паролем 2FA, или выполнить некоторые другие действия (например, сменить владельца канала), необходимо убедиться, что пользователь знает текущий пароль 2FA от аккаунта.

Для этого клиент сначала должен получить параметры SRP и алгоритм KDF, по которому проверяется правильность пароля, — методом [account.getPassword](/method/account.getPassword/). На данный момент поддерживается только алгоритм [passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow](/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/), поэтому здесь описан только он.

Затем, после того как пользователь введёт пароль, клиент должен сформировать объект [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) с помощью SRP и указанного алгоритма KDF, как показано ниже, и передать его в подходящий метод (например, в [auth.checkPassword](/method/auth.checkPassword/) при авторизации).

Это расширение [протокола SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol) использует парольную функцию [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) со 100000 итераций на базе sha512 (`PBKDF2HMACSHA512iter100000`). PBKDF2 применяется для дополнительного перехеширования параметра `x`, который получается способом, похожим на описанный в [RFC 2945](https://tools.ietf.org/html/rfc2945#section-3) (`H(s | H ( I | password | I) | s)` вместо `H(s | H ( I | ":" | password)`) (см. ниже).

Здесь `|` обозначает конкатенацию, а `+` — арифметический оператор `+`. Во всех случаях, когда конкатенируются числа, передаваемые в хеш-функции, эти числа должны использоваться в порядке big-endian и дополняться до 2048 бит; вся арифметика ведётся по модулю `p`. Вместо `I` используется `salt1` (см. [протокол SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)). Вместо `s` используется `salt2` (см. [протокол SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)).

Основная хеш-функция `H` — это sha256:

-   `H(data) := sha256(data)`

Хеш-функция с солью `SH` определяется так:

-   `SH(data, salt) := H(salt | data | salt)`

Первичная функция хеширования пароля определяется так:

-   `PH1(password, salt1, salt2) := SH(SH(password, salt1), salt2)`

Вторичная функция хеширования пароля определяется так:

-   `PH2(password, salt1, salt2) := SH(pbkdf2(sha512, PH1(password, salt1, salt2), salt1, 100000), salt2)`

На стороне клиента из объекта [passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow](/constructor/passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow/), содержащегося в объекте [account.password](/constructor/account.password/), извлекаются следующие параметры.

-   `g := algo.g`

-   `p := algo.p` Клиенту следует проверить, что **p** — безопасное 2048-битное простое число (то есть что простыми являются и **p**, и **(p-1)/2**, и что `2^2047 < p < 2^2048`), а также что **g** порождает циклическую подгруппу простого порядка **(p-1)/2**, то есть является квадратичным вычетом **mod p**. Поскольку **g** всегда равно 2, 3, 4, 5, 6 или 7, это легко сделать по закону квадратичной взаимности, который даёт простое условие на **p mod 4g**, а именно: **p mod 8 = 7** при **g = 2**; **p mod 3 = 2** при **g = 3**; никаких дополнительных условий при **g = 4**; **p mod 5 = 1 или 4** при **g = 5**; **p mod 24 = 19 или 23** при **g = 6**; и **p mod 7 = 3, 5 или 6** при **g = 7**. После того как клиент проверил **g** и **p**, имеет смысл закешировать результат, чтобы не повторять длительные вычисления в дальнейшем. Этот кеш можно использовать совместно с тем, который применяется при [генерации авторизационного ключа](/mtproto/auth_key/).

    [@term:seed] Если генератор случайных чисел на клиенте недостаточно хорош, имеет смысл использовать поле **secure\_random** из account.password как дополнительное начальное значение (seed — исходные данные, которыми инициализируется генератор случайных чисел).

-   `password := (пароль, введённый пользователем)`

-   `salt1 := algo.salt1`

-   `salt2 := algo.salt2`

-   `g_b := srp_B` Значения `srp_B` и `srp_id` извлекаются из объекта [account.password](/constructor/account.password/).

Параметр `k` вычисляется и на клиенте, и на сервере:

-   `k := H(p | g)`

Вычисляется общий параметр `u`: клиент делает это сам, а сервер — точно так же, но с `g_a`, который мы отправим ему позднее (см. ниже)

-   `u := H(g_a | g_b)`

Итоговые параметры вычисляются только на стороне клиента:

-   `x := PH2(password, salt1, salt2)`
-   `v := pow(g, x) mod p`

У сервера значение `v` уже есть — с того момента, когда мы задали пароль.

Для удобства вычисляется ещё один общий параметр:

-   `k_v := (k * v) mod p`

Наконец, обе стороны запускают [процесс обмена ключами](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol#Protocol).

Клиент вычисляет 2048-битное число **a** (используя достаточную энтропию или серверное значение **random**; см. выше) и получает:

-   `g_a := pow(g, a) mod p`.

Сервер вычисляет 2048-битное число **b**, используя достаточную энтропию, и формирует параметр `g_b`, который был нам отправлен (см. выше).

-   `g_b := (k_v + (pow(g, b) mod p)) mod p`

Наконец, вычисляются [сеансовые ключи SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol#Protocol):

На стороне клиента:

-   `t := (g_b - k_v) mod p` (остаток берётся положительным: если результат отрицателен, к нему прибавляется `p`)
-   `s_a := pow(t, a + u * x) mod p`
-   `k_a := H(s_a)`

На стороне сервера:

-   `s_b := pow(g_a * (pow(v, u) mod p), b) mod p`
-   `k_b := H(s_b)`

Поскольку:

-   `g_b := (k_v + (pow(g, b) mod p)) mod p`
-   `t := (g_b - k_v) mod p`
-   `t := ((k_v + (pow(g, b) mod p)) - k_v) mod p`
-   `t := pow(g, b) mod p`
-   `s_a := pow(t, a + u * x) mod p`
-   `s_a := pow(pow(g, b) mod p, a + u * x) mod p`

И:

-   `g_a := pow(g, a) mod p`

-   `v := pow(g, x) mod p`

-   `s_b := pow(g_a * (pow(v, u) mod p), b) mod p`

-   `s_b := pow((pow(g, a) mod p) * (pow(pow(g, x) mod p, u) mod p), b) mod p`

-   `s_b := pow(pow(g, a + x * u) mod p, b) mod p`

-   `s_b := pow(pow(g, b) mod p, a + u * x) mod p`

-   `s_a := pow(pow(g, b) mod p, a + u * x) mod p`

Это означает:

-   `s_b === s_a`
-   `k_b === k_a`

**И наконец, как и предписывает SRP**:

-   `M1 := H(H(p) xor H(g) | H(salt1) | H(salt2) | g_a | g_b | k_a)`

`M1` передаётся в [inputCheckPasswordSRP](/constructor/inputCheckPasswordSRP/) вместе с `g_a` (в качестве параметра `A`) и `srp_id`, извлечённым из объекта [account.password](/constructor/account.password/).

Затем сервер вычисляет:

-   `M2 := H(H(p) xor H(g) | H(salt1) | H(salt2) | g_a | g_b | k_b)`

Поскольку, как было сказано:

-   `s_b === s_a`
-   `k_b === k_a`

Это означает, что при правильном выполнении всех шагов

-   `M1 === M2`

Если пароль неверен, будет возвращена ошибка [400 PASSWORD\_HASH\_INVALID](/method/auth.checkPassword/#possible-errors).

### Установка нового пароля 2FA

Чтобы задать новый пароль 2FA, используйте метод [account.updatePasswordSettings](/method/account.updatePasswordSettings/).  
Если пароль уже установлен, сформируйте объект InputCheckPasswordSRP по правилам раздела [проверка пароля через SRP](#checking-the-password-with-srp) и подставьте его в поле `password` метода [account.updatePasswordSettings](/method/account.updatePasswordSettings/).  
Чтобы снять текущий пароль, передайте пустое значение `new_password_hash` в объекте [account.PasswordInputSettings](/type/account.PasswordInputSettings/).

Для установки нового пароля при формировании поля `password` используйте параметры SRP и алгоритм KDF, полученные через [account.getPassword](/method/account.getPassword/). Затем вычислите новое значение `new_password_hash` по алгоритму KDF, указанному в `new_settings`, предварительно дописав к `salt1` 32 достаточно случайных байта. Действуйте так же, как при [проверке пароля через SRP](#checking-the-password-with-srp), но остановитесь на вычислении параметра `v` и используйте его в качестве `new_password_hash`:

-   `v := pow(g, x) mod p`

Как обычно, в формате big-endian, дополненный до 2048 бит.

#### Подтверждение адреса электронной почты

При настройке двухфакторной авторизации рекомендуется задать **адрес для восстановления**, чтобы пользователь мог восстановить пароль по своей электронной почте, если забудет его.

Чтобы задать адрес для восстановления, его сначала нужно подтвердить. Это можно сделать прямо при установке нового пароля методом [account.updatePasswordSettings](/method/account.updatePasswordSettings/), задав параметр email и соответствующий флаг в конструкторе [account.passwordInputSettings](/constructor/account.passwordInputSettings/). Если адрес не подтверждён, будет возвращена [ошибка 400 EMAIL\_UNCONFIRMED\_X](/method/account.updatePasswordSettings/#possible-errors), где X — длина кода подтверждения, только что отправленного на этот адрес. Методом [account.confirmPasswordEmail](/method/account.confirmPasswordEmail/) введите полученный код подтверждения и включите адрес для восстановления. Методом [account.resendPasswordEmail](/method/account.resendPasswordEmail/) можно отправить код подтверждения повторно. Методом [account.cancelPasswordEmail](/method/account.cancelPasswordEmail/) — отменить код подтверждения.

Чтобы узнать текущий адрес для восстановления, используйте [account.getPasswordSettings](/method/account.getPasswordSettings/).

### Восстановление пароля

Если пользователь забыл свой пароль 2FA, доступны следующие варианты восстановления:

-   Только для сессий с выполненным входом: [сброс пароля »](#password-reset)
-   Для сессий как с выполненным входом, так и без него: [восстановление по электронной почте »](#email-recovery)
-   Для сессий без выполненного входа: [удаление аккаунта »](#account-deletion)

#### Сброс пароля

Сброс пароля можно запросить только из сессий с выполненным входом.

Сбросить пароль, не удаляя аккаунт, позволяет следующая процедура:

```
account.resetPasswordFailedWait#e3779861 retry_date:int = account.ResetPasswordResult;
account.resetPasswordRequestedWait#e9effc7d until_date:int = account.ResetPasswordResult;
account.resetPasswordOk#e926d63e = account.ResetPasswordResult;

---functions---

account.resetPassword#9308ce1b = account.ResetPasswordResult;
account.declinePasswordReset#4c9409f6 = Bool;
```

Если пользователь уже вошёл в аккаунт и забыл свой пароль 2FA, начать сброс пароля можно методом [account.resetPassword](/method/account.resetPassword/).  
В случае успеха первый вызов вернёт конструктор [account.resetPasswordRequestedWait](/constructor/account.resetPasswordRequestedWait/) и запустит семидневный таймер на стороне сервера; в течение этого срока пользователь может отменить сброс кнопкой в сообщении от служебного аккаунта Telegram либо непосредственно в интерфейсе — методом [account.declinePasswordReset](/method/account.declinePasswordReset/).

Когда срок истечёт, метод [account.resetPassword](/method/account.resetPassword/) вызывается ещё раз и возвращает [account.resetPasswordOk](/constructor/account.resetPasswordOk/) — признак того, что пароль успешно сброшен.

Если пользователь недавно запрашивал сброс пароля и этот запрос был отменён, первый вызов [account.resetPassword](/method/account.resetPassword/) вернёт [account.resetPasswordFailedWait](/constructor/account.resetPasswordFailedWait/): запросить новый сброс можно будет только после указанной даты.

Учтите: если пользователь помнит свой пароль 2FA и просто хочет отключить двухфакторную авторизацию, [для отключения пароля применяется та же процедура, что и для его включения »](#setting-a-new-2fa-password).

#### Восстановление по электронной почте

Восстановление по электронной почте можно запросить из сессий с выполненным входом, а также из сессий без входа — если пользователь успешно ввёл код входа.  
В обоих случаях к аккаунту должен быть привязан [адрес для восстановления »](#email-verification).

Чтобы восстановить забытый пароль 2FA, методом [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/) на [заданный ранее адрес](#email-verification) отправляется письмо.  
Методом [auth.checkRecoveryPassword](/method/auth.checkRecoveryPassword/) убедитесь, что пользователь ввёл верный код.  
Затем вызовите [auth.recoverPassword](/method/auth.recoverPassword/) с полученным кодом, чтобы удалить текущий пароль 2FA; чтобы задать новый, следуйте [этим указаниям »](/api/srp/).

#### Удаление аккаунта

Если пользователь успешно ввёл код входа, но забыл пароль [2FA](/api/srp/) и не имеет доступа ни к одной другой сессии с выполненным входом, аккаунт можно удалить, следуя [этим указаниям »](/api/account-deletion/).

### Использование пароля 2FA

Ряд методов API — например, те, что применяются для [платежей](/api/payments/), [передачи прав владельца группы или канала](/api/channel/#transferring-ownership-of-a-group-channel) и других операций — требуют, чтобы пользователь подтвердил свою личность паролем 2FA, переданным в виде конструктора [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) и сформированным так, как описано [выше](#checking-the-password-with-srp).

[@term:RPC] Все такие методы, где проверка пароля требуется _уже после входа в аккаунт_, могут вернуть следующие RPC-ошибки (RPC — удалённый вызов процедуры; так сервер сообщает об ошибке в ответ на вызов метода API):

-   `PASSWORD_MISSING` — пароль 2FA не задан, хотя для вызова метода он **обязателен**. [Задайте пароль 2FA](#setting-a-new-2fa-password) и повторите вызов метода.
-   `PASSWORD_TOO_FRESH_%d` — пароль 2FA был изменён менее 24 часов назад, повторите попытку через `%d` секунд.
-   `SESSION_TOO_FRESH_%d` — эта сессия создана менее 24 часов назад, повторите попытку через `%d` секунд.
-   `PASSWORD_HASH_INVALID` — указан неверный пароль (либо был передан [inputCheckPasswordEmpty](/constructor/inputCheckPasswordEmpty/), тогда как пароль 2FA обязателен).

Обычный порядок вызова таких методов таков: сначала метод вызывается с [inputCheckPasswordEmpty](/constructor/inputCheckPasswordEmpty/) — как если бы пароль не был задан, даже если на самом деле он задан; затем, в зависимости от полученной RPC-ошибки, следует перейти:

-   `PASSWORD_HASH_INVALID` — к сценарию ввода пароля 2FA, после чего вызвать метод повторно с паролем, который ввёл пользователь
-   `PASSWORD_MISSING` — к сценарию установки пароля 2FA, после чего вызвать метод повторно с только что заданным паролем
-   Все остальные RPC-ошибки — показать сообщение с описанием ошибки

[@term:race condition] Такой порядок помогает избежать состояния гонки (`race condition` — ситуации, когда исход зависит от того, какая из одновременных операций сработала первой) с другими сессиями, где выполнен вход: в них пароль может быть изменён.

### Смежные страницы

#### [Устройство SRP](http://srp.stanford.edu/design.html)
