---
title: "auth.sentCodeTypeFirebaseSms"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeFirebaseSms"
section: ref
kind: constructor
description: "Код аутентификации должен быть доставлен по SMS после аттестации Firebase, как описано в документации по авторизации »."
layout: layout.njk
---

# auth.sentCodeTypeFirebaseSms

Код аутентификации должен быть доставлен по SMS после аттестации Firebase, как описано в [документации по авторизации »](/api/auth/).

```
auth.sentCodeTypeFirebaseSms#9fd736 flags:# nonce:flags.0?bytes play_integrity_project_id:flags.2?long play_integrity_nonce:flags.2?bytes receipt:flags.1?string push_timeout:flags.1?int length:int = auth.SentCodeType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>На Android — одноразовое значение (nonce), которое следует использовать так, как описано в <a href="/api/auth">документации по авторизации »</a></td></tr><tr><td><strong>play_integrity_project_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/long">long</a></td><td>Идентификатор проекта Google Play Integrity</td></tr><tr><td><strong>play_integrity_nonce</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/bytes">bytes</a></td><td>Одноразовое значение (nonce) для Play Integrity API</td></tr><tr><td><strong>receipt</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>На iOS должно сравниваться со значением <code>receipt</code>, извлечённым из полученного push-уведомления.</td></tr><tr><td><strong>push_timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>На iOS: если push-уведомление с полем <code>ios_push_secret</code> не получено в течение <code>push_timeout</code> секунд, следует использовать метод аутентификации <code>next_type</code> с помощью <a href="/method/auth.resendCode">auth.resendCode</a>.</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина кода, который будет доставлен.</td></tr></tbody></table>

### Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.

#### [auth.resendCode](/method/auth.resendCode/)

Повторно отправить код входа другим способом; тип кода определяется значением, возвращённым предыдущим вызовом auth.sendCode/auth.resendCode: подробнее см. [вход](/api/auth/).
