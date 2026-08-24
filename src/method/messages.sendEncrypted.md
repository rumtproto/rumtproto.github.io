---
title: "messages.sendEncrypted"
original: "https://core.telegram.org/method/messages.sendEncrypted"
section: ref
kind: method
description: "Отправляет текстовое сообщение в секретный чат."
layout: layout.njk
---

# messages.sendEncrypted

Отправляет текстовое сообщение в секретный чат.

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
---functions---
messages.sendEncrypted#44fa7a15 flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Отправить зашифрованное сообщение без уведомления</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Идентификатор секретного чата</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный идентификатор сообщения на стороне клиента, необходимый, чтобы избежать повторной отправки сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>TL-сериализация типа <a href="/type/DecryptedMessage">DecryptedMessage</a>, зашифрованная ключом, созданным при создании чата</td></tr></tbody></table>

### Результат

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>DATA_INVALID</td><td>Зашифрованные данные недействительны.</td></tr><tr><td>400</td><td>DATA_TOO_LONG</td><td>Слишком длинные данные.</td></tr><tr><td>400</td><td>ENCRYPTION_DECLINED</td><td>Секретный чат был отклонён.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>Вызов, окончания которого ожидал этот запрос, вернул ошибку.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [DecryptedMessage](/type/DecryptedMessage/)

Объект описывает содержимое зашифрованного сообщения.
