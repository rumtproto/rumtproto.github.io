---
title: "messages.receivedQueue"
original: "https://core.telegram.org/method/messages.receivedQueue"
section: ref
kind: method
description: "Подтверждает получение сообщений в секретном чате клиентом, отменяет push-уведомления."
layout: layout.njk
---

# messages.receivedQueue

Подтверждает получение сообщений в секретном чате клиентом, отменяет push-уведомления.  
Метод возвращает список значений **random\_id** тех сообщений, для которых push-уведомления были отменены.

```
---functions---
messages.receivedQueue#55a5bb66 max_qts:int = Vector<long>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>max_qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное значение qts, доступное в клиенте</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)\>

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MAX_QTS_INVALID</td><td>Указанное значение max_qts недействительно.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>Вызов, окончания которого ожидал этот запрос, вернул ошибку.</td></tr></tbody></table>
