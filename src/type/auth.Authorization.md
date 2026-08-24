---
title: "auth.Authorization"
original: "https://core.telegram.org/type/auth.Authorization"
section: ref
kind: type
description: "Объект содержит информацию об авторизации пользователя."
layout: layout.njk
---

# auth.Authorization

Объект содержит информацию об авторизации пользователя.

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;

---functions---

auth.signUp#aac7b717 flags:# no_joined_notifications:flags.0?true phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;
auth.signIn#8d52a951 flags:# phone_number:string phone_code_hash:string phone_code:flags.0?string email_verification:flags.1?EmailVerification = auth.Authorization;
auth.importAuthorization#a57a7dad id:long bytes:bytes = auth.Authorization;
auth.importBotAuthorization#67a3ff2c flags:int api_id:int api_hash:string bot_auth_token:string = auth.Authorization;
auth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;
auth.recoverPassword#37096c70 flags:# code:string new_settings:flags.0?account.PasswordInputSettings = auth.Authorization;
auth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.authorization">auth.authorization</a></td><td>Содержит информацию об авторизации пользователя.</td></tr><tr><td><a href="/constructor/auth.authorizationSignUpRequired">auth.authorizationSignUpRequired</a></td><td>Учётной записи с этим номером телефона в Telegram не существует: пользователю необходимо <a href="/api/auth">ввести основные сведения и зарегистрироваться</a></td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/auth.signUp">auth.signUp</a></td><td>Регистрирует в системе подтверждённый номер телефона.</td></tr><tr><td><a href="/method/auth.signIn">auth.signIn</a></td><td>Выполняет вход пользователя с подтверждённым номером телефона.</td></tr><tr><td><a href="/method/auth.importAuthorization">auth.importAuthorization</a></td><td>Выполняет вход пользователя с помощью ключа, переданного из его родного дата-центра.</td></tr><tr><td><a href="/method/auth.importBotAuthorization">auth.importBotAuthorization</a></td><td>Вход как бот</td></tr><tr><td><a href="/method/auth.checkPassword">auth.checkPassword</a></td><td>Попытаться войти в аккаунт, защищённый <a href="/api/srp">паролем двухфакторной аутентификации</a>.</td></tr><tr><td><a href="/method/auth.recoverPassword">auth.recoverPassword</a></td><td>Сбросить <a href="/api/srp">пароль двухфакторной аутентификации</a> с помощью кода восстановления, отправленного методом <a href="/method/auth.requestPasswordRecovery">auth.requestPasswordRecovery</a>.</td></tr><tr><td><a href="/method/auth.importWebTokenAuthorization">auth.importWebTokenAuthorization</a></td><td>Вход путём импорта токена авторизации</td></tr><tr><td><a href="/method/auth.finishPasskeyLogin">auth.finishPasskeyLogin</a></td><td>Завершить вход по ключу доступа через неавторизованное подключение; подробнее см. <a href="/api/passkeys#logging-in-with-a-passkey">здесь »</a>.<br><br>Метод обязан отправляться в собственный дата-центр пользователя, указанный в поле <code>user_handle</code> (<code>dcId:userId</code>) из полученного подтверждения ключа доступа; полный порядок действий см. <a href="/api/passkeys#logging-in-with-a-passkey">здесь »</a>.</td></tr></tbody></table>
