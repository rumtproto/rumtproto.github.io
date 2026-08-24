---
title: "messageActionSecureValuesSentMe"
original: "https://core.telegram.org/constructor/messageActionSecureValuesSentMe"
section: ref
kind: constructor
description: "Получены защищённые значения telegram passport"
layout: layout.njk
---

# messageActionSecureValuesSentMe

Получены защищённые значения [telegram passport](https://core.telegram.org/passport)

```
messageActionSecureValuesSentMe#1b287353 values:Vector<SecureValue> credentials:SecureCredentialsEncrypted = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>values</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValue">SecureValue</a>&gt;</td><td>Вектор со сведениями о документах и других элементах Telegram Passport, которые были переданы боту</td></tr><tr><td><strong>credentials</strong></td><td style="text-align: center;"><a href="/type/SecureCredentialsEncrypted">SecureCredentialsEncrypted</a></td><td>Зашифрованные учётные данные, необходимые для расшифровки данных</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
