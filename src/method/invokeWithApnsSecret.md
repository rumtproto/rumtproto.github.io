---
title: "invokeWithApnsSecret"
original: "https://core.telegram.org/method/invokeWithApnsSecret"
section: ref
kind: method
description: "Только для официальных клиентов: вызвать с проверкой push-уведомления Apple."
layout: layout.njk
---

# invokeWithApnsSecret

Только для официальных клиентов: вызвать с проверкой push-уведомления Apple.

```
---functions---
invokeWithApnsSecret#0dae54f8 {X:Type} nonce:string secret:string query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Одноразовое значение.</td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Секрет.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Запрос.</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам
