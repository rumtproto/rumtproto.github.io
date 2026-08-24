---
title: "securePlainEmail"
original: "https://core.telegram.org/constructor/securePlainEmail"
section: ref
kind: constructor
description: "Адрес электронной почты для использования в telegram passport: его необходимо предварительно подтвердить »."
layout: layout.njk
---

# securePlainEmail

Адрес электронной почты для использования в [telegram passport](https://core.telegram.org/passport): [его необходимо предварительно подтвердить »](https://core.telegram.org/passport/encryption#secureplaindata).

```
securePlainEmail#21ec5a5f email:string = SecurePlainData;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес электронной почты</td></tr></tbody></table>

### Тип

[SecurePlainData](/type/SecurePlainData/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
