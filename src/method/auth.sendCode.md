---
title: "auth.sendCode"
original: "https://core.telegram.org/method/auth.sendCode"
section: ref
kind: method
description: "Отправить код подтверждения для входа"
layout: layout.njk
---

# auth.sendCode

Отправить код подтверждения для входа

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона в международном формате</td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш секретного ключа приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings">CodeSettings</a></td><td>Настройки типа отправляемого кода</td></tr></tbody></table>

### Результат

[auth.SentCode](/type/auth.SentCode/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>Недействительный API ID.</td></tr><tr><td>400</td><td>API_ID_PUBLISHED_FLOOD</td><td>Этот API id был где-то опубликован, использовать его больше нельзя.</td></tr><tr><td>500</td><td>AUTH_RESTART</td><td>Начать процесс авторизации заново.</td></tr><tr><td>500</td><td>AUTH_RESTART_%d</td><td>Внутренняя ошибка (отладочная информация %d), повторите вызов метода.</td></tr><tr><td>400</td><td>PHONE_NUMBER_APP_SIGNUP_FORBIDDEN</td><td>Вы не можете зарегистрироваться через это приложение.</td></tr><tr><td>400</td><td>PHONE_NUMBER_BANNED</td><td>Указанный номер телефона заблокирован в Telegram.</td></tr><tr><td>400</td><td>PHONE_NUMBER_FLOOD</td><td>Вы запрашивали код слишком много раз.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr><tr><td>406</td><td>PHONE_PASSWORD_FLOOD</td><td>Вы слишком много раз пытались войти.</td></tr><tr><td>400</td><td>PHONE_PASSWORD_PROTECTED</td><td>Этот телефон защищён паролем.</td></tr><tr><td>400</td><td>SMS_CODE_CREATE_FAILED</td><td>При создании SMS-кода произошла ошибка.</td></tr><tr><td>406</td><td>UPDATE_APP_TO_LOGIN</td><td>Обновите клиент, чтобы выполнить вход.</td></tr></tbody></table>
