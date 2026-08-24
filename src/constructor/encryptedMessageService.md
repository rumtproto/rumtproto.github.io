---
title: "encryptedMessageService"
original: "https://core.telegram.org/constructor/encryptedMessageService"
section: ref
kind: constructor
description: "Зашифрованное сервисное сообщение"
layout: layout.njk
---

# encryptedMessageService

Зашифрованное сервисное сообщение

```
encryptedMessageService#23734b06 random_id:long chat_id:int date:int bytes:bytes = EncryptedMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Случайный идентификатор сообщения, назначенный его автором. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор зашифрованного чата</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата отправки</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>TL-сериализация типа <a href="/type/DecryptedMessage">DecryptedMessage</a>, зашифрованная ключом, созданным при создании чата</td></tr></tbody></table>

### Тип

[EncryptedMessage](/type/EncryptedMessage/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [DecryptedMessage](/type/DecryptedMessage/)

Объект описывает содержимое зашифрованного сообщения.
