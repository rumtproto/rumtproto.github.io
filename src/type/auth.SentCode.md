---
title: "auth.SentCode"
original: "https://core.telegram.org/type/auth.SentCode"
section: ref
kind: type
description: "Содержит информацию о сообщении с кодом подтверждения, отправленном по SMS, звонком или через Telegram."
layout: layout.njk
---

# auth.SentCode

Содержит информацию о сообщении с кодом подтверждения, отправленном по SMS, звонком или через Telegram.

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;

---functions---

auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
auth.resendCode#cae47523 flags:# phone_number:string phone_code_hash:string reason:flags.0?string = auth.SentCode;
auth.resetLoginEmail#7e960193 phone_number:string phone_code_hash:string = auth.SentCode;
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;

account.sendChangePhoneCode#82574ae5 phone_number:string settings:CodeSettings = auth.SentCode;
account.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;
account.sendVerifyPhoneCode#a5a356f9 phone_number:string settings:CodeSettings = auth.SentCode;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.sentCode">auth.sentCode</a></td><td>Содержит информацию об отправленном коде подтверждения.</td></tr><tr><td><a href="/constructor/auth.sentCodeSuccess">auth.sentCodeSuccess</a></td><td>Пользователь успешно авторизовался с помощью <a href="/api/auth#future-auth-tokens">токенов будущей авторизации</a></td></tr><tr><td><a href="/constructor/auth.sentCodePaymentRequired">auth.sentCodePaymentRequired</a></td><td>Официальные приложения могут получить этот конструктор: он означает, что из-за высокой стоимости SMS с кодом подтверждения для страны или оператора пользователя для продолжения входа либо регистрации пользователь обязан приобрести подписку <a href="/api/premium">Telegram Premium</a>; подробнее см. <a href="/api/auth#paid-auth">здесь »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/auth.sendCode">auth.sendCode</a></td><td>Отправить код подтверждения для входа</td></tr><tr><td><a href="/method/auth.resendCode">auth.resendCode</a></td><td>Повторно отправить код входа другим способом; тип кода определяется значением, возвращённым предыдущим вызовом auth.sendCode/auth.resendCode: подробнее см. <a href="/api/auth">вход</a>.</td></tr><tr><td><a href="/method/auth.resetLoginEmail">auth.resetLoginEmail</a></td><td>Сбросить <a href="https://core.telegram.org/api/auth#email-verification">почту для входа »</a>.</td></tr><tr><td><a href="/method/auth.checkPaidAuth">auth.checkPaidAuth</a></td><td>Проверяет состояние <a href="/api/auth#paid-auth">платежа за вход</a>.</td></tr><tr><td><a href="/method/account.sendChangePhoneCode">account.sendChangePhoneCode</a></td><td>Подтвердить новый номер телефона для привязки к текущему аккаунту</td></tr><tr><td><a href="/method/account.sendConfirmPhoneCode">account.sendConfirmPhoneCode</a></td><td>Отправить код подтверждения для отмены удаления аккаунта; подробнее <a href="/api/account-deletion">см. здесь »</a></td></tr><tr><td><a href="/method/account.sendVerifyPhoneCode">account.sendVerifyPhoneCode</a></td><td>Отправить код подтверждения по телефону для Telegram <a href="/passport">Passport</a>.</td></tr></tbody></table>
