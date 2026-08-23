---
title: "Авторизация пользователя"
original: "https://core.telegram.org/api/auth"
section: api
layout: layout.njk
---

# Авторизация пользователя

Оригинальное русскоязычное описание обмена, которым клиент подтверждает личность пользователя. Первоисточник: [core.telegram.org/api/auth](https://core.telegram.org/api/auth).

Предполагается, что соединение уже установлено: `auth_key` создан ([как](/mtproto/auth_key/)), время синхронизировано.

## Общая схема («код из СМС»)

1. **Отправка номера.** Клиент вызывает [`auth.sendCode`](/method/auth.sendCode/) с номером телефона, `api_id` и `api_hash`. Сервер отвечает [`auth.sentCode`](/type/auth.SentCode/) с `phone_code_hash` и способом доставки кода (СМС, звонок, сообщение в Telegram, email — зависит от аккаунта).

2. **Ввод кода.** Клиент вызывает [`auth.signIn`](/method/auth.signIn/) с номером, `phone_code_hash` и кодом. Если аккаунт существует и защищён облачным паролем (2FA), сервер вернёт ошибку `SESSION_PASSWORD_NEEDED` — см. шаг 3. Если аккаунта нет — `PHONE_NUMBER_UNOCCUPIED`, и для регистрации нужен [`auth.signUp`](/method/auth.signUp/).

3. **Облачный пароль (2FA).** Пароль не передаётся в открытом виде: клиент и сервер выполняют обмен по протоколу [`SRP`](/api/srp/) (Secure Remote Password) с параметрами из [`account.getPassword`](/method/account.getPassword/), и клиент вызывает [`auth.checkPassword`](/method/auth.checkPassword/) с доказательством знания пароля.

4. **Результат.** Успех — [`auth.authorization`](/constructor/auth.authorization/) с объектом [`User`](/type/User/) и флагами (например, требуется ли установить облачный пароль). С этого момента сессия авторизована.

## Важные детали

- **`api_id`/`api_hash`** идентифицируют приложение, а не пользователя; их получают на [my.telegram.org](https://my.telegram.org).
- **Первый запрос** сессии рекомендуется оборачивать в [`initConnection`](/method/initConnection/), чтобы сервер знал устройство и язык клиента.
- **Повторный вход на новом устройстве** может потребовать подтверждения с уже авторизованного устройства (`auth.exportLoginToken` / QR-вход — см. [оригинал](https://core.telegram.org/api/qr-login/)).
- **Флуд-контроль.** Ошибка `FLOOD_WAIT_N` означает «повторить через N секунд»; клиент обязан выдерживать такие паузы.
- **Выход** — [`auth.logOut`](/method/auth.logOut/); уничтожение ключа — [`destroy_auth_key`](https://core.telegram.org/constructor/destroy_auth_key/).

## Боты

Авторизация ботов выполняется отдельным методом [`auth.importBotAuthorization`](/method/auth.importBotAuthorization/) с токеном бота — без СМС. О ботах на уровне MTProto — в [оригинальном разделе о ботах](https://core.telegram.org/api/bots/).
