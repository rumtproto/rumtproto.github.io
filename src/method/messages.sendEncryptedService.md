---
title: "messages.sendEncryptedService"
original: "https://core.telegram.org/method/messages.sendEncryptedService"
section: ref
kind: method
description: "Отправляет сервисное сообщение в секретный чат."
layout: layout.njk
---

# messages.sendEncryptedService

Отправляет сервисное сообщение в секретный чат.

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
---functions---
messages.sendEncryptedService#32d439a4 peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Идентификатор секретного чата</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный идентификатор сообщения на стороне клиента, необходимый для предотвращения повторной отправки сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>TL-сериализация типа <a href="/type/DecryptedMessage">DecryptedMessage</a>, зашифрованная ключом, выработанным при создании чата</td></tr></tbody></table>

### Результат

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>DATA_INVALID</td><td>Зашифрованные данные недействительны.</td></tr><tr><td>400</td><td>DATA_TOO_LONG</td><td>Слишком длинные данные.</td></tr><tr><td>400</td><td>ENCRYPTION_DECLINED</td><td>Секретный чат был отклонён.</td></tr><tr><td>400</td><td>ENCRYPTION_ID_INVALID</td><td>Указанный идентификатор секретного чата недействителен.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>Вызов, окончания которого ожидал этот запрос, вернул ошибку.</td></tr><tr><td>403</td><td>USER_DELETED</td><td>Вы не можете отправить это секретное сообщение, так как другой участник удалил свой аккаунт.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [DecryptedMessage](/type/DecryptedMessage/)

Объект описывает содержимое зашифрованного сообщения.
