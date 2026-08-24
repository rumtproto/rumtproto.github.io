---
title: "invokeWithReCaptcha"
original: "https://core.telegram.org/method/invokeWithReCaptcha"
section: ref
kind: method
description: "Только для официальных клиентов: повторно выполнить вызов метода, потребовавший проверки reCAPTCHA через RECAPTCHA_CHECK_%s__%s, где первая подстановка — это action, а вторая —…"
layout: layout.njk
---

# invokeWithReCaptcha

Только для официальных клиентов: повторно выполнить вызов метода, потребовавший проверки reCAPTCHA через `RECAPTCHA_CHECK_%s__%s`, где первая подстановка — это `action`, а вторая — идентификатор ключа reCAPTCHA.

```
---functions---
invokeWithReCaptcha#adbb0f94 {X:Type} token:string query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен reCAPTCHA, полученный после проверки.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Исходный вызов метода.</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам
