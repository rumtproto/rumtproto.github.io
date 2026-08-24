---
title: "decryptedMessageService"
original: "https://core.telegram.org/constructor/decryptedMessageService"
section: ref
kind: constructor
description: "Содержимое зашифрованного сервисного сообщения."
layout: layout.njk
---

# decryptedMessageService

Содержимое зашифрованного сервисного сообщения.

```
===8===
decryptedMessageService#aa48327d random_id:long random_bytes:bytes action:DecryptedMessageAction = DecryptedMessage;

===17===
decryptedMessageService#73164160 random_id:long action:DecryptedMessageAction = DecryptedMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Случайный идентификатор сообщения, назначенный автором сообщения.<br>Должен совпадать с идентификатором, переданным методу отправки. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>random_bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Случайные байты, удалено в слое 17.</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/DecryptedMessageAction">DecryptedMessageAction</a></td><td>Действие, относящееся к сервисному сообщению</td></tr></tbody></table>

### Тип

[DecryptedMessage](/type/DecryptedMessage/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
