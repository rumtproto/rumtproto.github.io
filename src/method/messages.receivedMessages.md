---
title: "messages.receivedMessages"
original: "https://core.telegram.org/method/messages.receivedMessages"
section: ref
kind: method
description: "Подтверждает получение сообщений клиентом, отменяет отправку PUSH-уведомлений."
layout: layout.njk
---

# messages.receivedMessages

Подтверждает получение сообщений клиентом, отменяет отправку PUSH-уведомлений.

```
---functions---
messages.receivedMessages#5a954c0 max_id:int = Vector<ReceivedNotifyMessage>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальный идентификатор сообщения, доступный в клиенте.</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[ReceivedNotifyMessage](/type/ReceivedNotifyMessage/)\>

### Этот метод доступен только пользователям
