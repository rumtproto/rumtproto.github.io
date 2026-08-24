---
title: "users.setSecureValueErrors"
original: "https://core.telegram.org/method/users.setSecureValueErrors"
section: ref
kind: method
description: "Уведомить пользователя о том, что отправленные данные passport содержат ошибки. Пользователь не сможет повторно отправить вам данные Passport, пока ошибки не будут исправлены…"
layout: layout.njk
---

# users.setSecureValueErrors

Уведомить пользователя о том, что отправленные данные [passport](https://core.telegram.org/passport) содержат ошибки. Пользователь не сможет повторно отправить вам данные Passport, пока ошибки не будут исправлены (содержимое поля, для которого возвращена ошибка, должно измениться).

Используйте это, если присланные пользователем данные по какой-либо причине не соответствуют требованиям вашего сервиса. Например, если дата рождения выглядит недостоверной, присланный документ размыт, скан содержит следы подделки и т. п. Укажите подробности в сообщении об ошибке, чтобы пользователь понял, как исправить недочёты.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
users.setSecureValueErrors#90c894b5 id:InputUser errors:Vector<SecureValueError> = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь</td></tr><tr><td><strong>errors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueError">SecureValueError</a>&gt;</td><td>Ошибки</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DATA_HASH_SIZE_INVALID</td><td>Недопустимый размер указанного значения secureValueErrorData.data_hash.</td></tr><tr><td>400</td><td>HASH_SIZE_INVALID</td><td>Недопустимый размер указанного значения secureValueError.hash.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
