---
title: "SecurePlainData"
original: "https://core.telegram.org/type/SecurePlainData"
section: ref
kind: type
description: "Проверенные данные passport в виде открытого текста."
layout: layout.njk
---

# SecurePlainData

Проверенные [данные passport](https://core.telegram.org/passport/encryption#secureplaindata) в виде открытого текста.

```
securePlainPhone#7d6099dd phone:string = SecurePlainData;
securePlainEmail#21ec5a5f email:string = SecurePlainData;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/securePlainPhone">securePlainPhone</a></td><td>Номер телефона для использования в <a href="/passport">telegram passport</a>: <a href="/passport/encryption#secureplaindata">сначала он должен быть подтверждён »</a>.</td></tr><tr><td><a href="/constructor/securePlainEmail">securePlainEmail</a></td><td>Адрес электронной почты для использования в <a href="/passport">telegram passport</a>: <a href="/passport/encryption#secureplaindata">его необходимо предварительно подтвердить »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: детали шифрования](https://core.telegram.org/passport/encryption)

Как данные Telegram Passport хранятся и шифруются сквозным шифрованием.
