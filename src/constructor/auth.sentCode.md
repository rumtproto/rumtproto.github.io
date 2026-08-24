---
title: "auth.sentCode"
original: "https://core.telegram.org/constructor/auth.sentCode"
section: ref
kind: constructor
description: "Содержит информацию об отправленном коде подтверждения."
layout: layout.njk
---

# auth.sentCode

Содержит информацию об отправленном коде подтверждения.

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/auth.SentCodeType">auth.SentCodeType</a></td><td>Тип телефонного кода</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш кода подтверждения, который следует сохранить и позднее повторно использовать в <a href="/method/auth.signIn">auth.signIn</a></td></tr><tr><td><strong>next_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/auth.CodeType">auth.CodeType</a></td><td>Тип телефонного кода, который будет отправлен следующим, если код не получен в течение <code>timeout</code> секунд: для его отправки используйте <a href="/method/auth.resendCode">auth.resendCode</a></td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Тайм-аут ожидания получения кода из SMS</td></tr></tbody></table>

### Тип

[auth.SentCode](/type/auth.SentCode/)

### Связанные страницы

#### [auth.signIn](/method/auth.signIn/)

Выполняет вход пользователя с подтверждённым номером телефона.

#### [auth.resendCode](/method/auth.resendCode/)

Повторно отправить код входа другим способом; тип кода определяется значением, возвращённым предыдущим вызовом auth.sendCode/auth.resendCode: подробнее см. [вход](/api/auth/).
