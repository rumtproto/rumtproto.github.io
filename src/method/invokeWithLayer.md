---
title: "invokeWithLayer"
original: "https://core.telegram.org/method/invokeWithLayer"
section: ref
kind: method
description: "Выполнить указанный запрос с использованием указанного слоя API"
layout: layout.njk
---

# invokeWithLayer

Выполнить указанный запрос с использованием указанного [слоя](/api/invoking/#layers) API

```
---functions---
invokeWithLayer#da9b0d0d {X:Type} layer:int query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>layer</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:layer] Слой, который нужно использовать</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Запрос</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AUTH_BYTES_INVALID</td><td>Указанная авторизация недействительна.</td></tr><tr><td>400</td><td>CDN_METHOD_INVALID</td><td>Этот метод нельзя вызывать в CDN DC.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>CONNECTION_API_ID_INVALID</td><td>Указанный идентификатор API недействителен.</td></tr><tr><td>400</td><td>CONNECTION_LAYER_INVALID</td><td>Недействительный слой.</td></tr><tr><td>406</td><td>INVITE_HASH_EXPIRED</td><td>Срок действия пригласительной ссылки истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Вызов методов API](/api/invoking/)

Дополнительные параметры вызова методов.
