---
title: "invokeAfterMsg"
original: "https://core.telegram.org/method/invokeAfterMsg"
section: ref
kind: method
description: "Выполняет запрос после успешного завершения одного из предыдущих запросов."
layout: layout.njk
---

# invokeAfterMsg

Выполняет запрос после успешного завершения одного из предыдущих запросов.

```
---functions---
invokeAfterMsg#cb9f372d {X:Type} msg_id:long query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:msg_id] Идентификатор сообщения, от которого зависит текущий запрос</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Сам запрос</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам
