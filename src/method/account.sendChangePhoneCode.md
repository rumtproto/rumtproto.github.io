---
title: "account.sendChangePhoneCode"
original: "https://core.telegram.org/method/account.sendChangePhoneCode"
section: ref
kind: method
description: "Подтвердить новый номер телефона для привязки к текущему аккаунту"
layout: layout.njk
---

# account.sendChangePhoneCode

Подтвердить новый номер телефона для привязки к текущему аккаунту

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
account.sendChangePhoneCode#82574ae5 phone_number:string settings:CodeSettings = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новый номер телефона</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings">CodeSettings</a></td><td>Настройки кода подтверждения</td></tr></tbody></table>

### Результат

[auth.SentCode](/type/auth.SentCode/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>FRESH_CHANGE_PHONE_FORBIDDEN</td><td>Нельзя изменить номер телефона сразу после входа, подождите не менее 24 часов.</td></tr><tr><td>400</td><td>PHONE_NUMBER_BANNED</td><td>Указанный номер телефона заблокирован в Telegram.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr><tr><td>400</td><td>PHONE_NUMBER_OCCUPIED</td><td>Этот номер телефона уже используется.</td></tr></tbody></table>
