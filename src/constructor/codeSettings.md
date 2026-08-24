---
title: "codeSettings"
original: "https://core.telegram.org/constructor/codeSettings"
section: ref
kind: constructor
description: "Настройки, используемые серверами Telegram для отправки кода подтверждения."
layout: layout.njk
---

# codeSettings

Настройки, используемые серверами Telegram для отправки кода подтверждения.

Примеры реализации: [telegram for android](https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java), [tdlib](https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp).

```
codeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>allow_flashcall</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешать ли подтверждение номера телефона с помощью <a href="/api/auth">телефонных звонков</a>.</td></tr><tr><td><strong>current_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Передайте true, если номер телефона используется на текущем устройстве. Игнорируется, если не установлен allow_flashcall.</td></tr><tr><td><strong>allow_app_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Если требуется токен, который будет включён в отправляемые впоследствии SMS: необходим в новых версиях android для использования <a href="https://developers.google.com/identity/sms-retriever/overview">API приёма SMS в android</a></td></tr><tr><td><strong>allow_missed_call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Поддерживает ли это устройство получение кода методом <a href="/constructor/auth.codeTypeMissedCall">auth.codeTypeMissedCall</a></td></tr><tr><td><strong>allow_firebase</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Поддерживается ли авторизация через Firebase</td></tr><tr><td><strong>unknown_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если в текущем устройстве есть SIM-карта, но проверить, совпадает ли указанный номер телефона с номером SIM-карты, невозможно.</td></tr><tr><td><strong>logout_tokens</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/bytes">bytes</a>&gt;</td><td>Ранее сохранённые токены будущей авторизации, подробнее см. <a href="/api/auth#future-auth-tokens">в документации »</a></td></tr><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/string">string</a></td><td>Используется только официальными приложениями для iOS при авторизации через Firebase: токен устройства для apple push.</td></tr><tr><td><strong>app_sandbox</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/Bool">Bool</a></td><td>Используется только официальными приложениями для iOS при авторизации через Firebase: будет ли при передаче push-уведомления использован сертификат песочницы.</td></tr></tbody></table>

### Тип

[CodeSettings](/type/CodeSettings/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.

#### [auth.codeTypeMissedCall](/constructor/auth.codeTypeMissedCall/)

В следующий раз код аутентификации будет доставлен через немедленно сброшенный входящий звонок, который пользователь обрабатывает вручную.
