---
title: "invokeAfterMsgs"
original: "https://core.telegram.org/method/invokeAfterMsgs"
section: ref
kind: method
description: "Выполняет запрос после успешного завершения предыдущих запросов"
layout: layout.njk
---

# invokeAfterMsgs

Выполняет запрос после успешного завершения предыдущих запросов

```
---functions---
invokeAfterMsgs#3dc4b4f0 {X:Type} msg_ids:Vector<long> query:!X = X;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>msg_ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Список сообщений, от которых зависит текущий запрос</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;">!X</td><td>Сам запрос</td></tr></tbody></table>

### Результат

Возвращает тип, возвращаемый вызванным методом.

### Этот метод доступен и пользователям, и ботам
