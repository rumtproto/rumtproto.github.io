---
title: "securePlainPhone"
original: "https://core.telegram.org/constructor/securePlainPhone"
section: ref
kind: constructor
description: "Номер телефона для использования в telegram passport: сначала он должен быть подтверждён »."
layout: layout.njk
---

# securePlainPhone

Номер телефона для использования в [telegram passport](https://core.telegram.org/passport): [сначала он должен быть подтверждён »](https://core.telegram.org/passport/encryption#secureplaindata).

```
securePlainPhone#7d6099dd phone:string = SecurePlainData;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr></tbody></table>

### Тип

[SecurePlainData](/type/SecurePlainData/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
