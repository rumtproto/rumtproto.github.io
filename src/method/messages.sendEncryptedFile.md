---
title: "messages.sendEncryptedFile"
original: "https://core.telegram.org/method/messages.sendEncryptedFile"
section: ref
kind: method
description: "Отправляет в секретный чат сообщение с вложенным файлом"
layout: layout.njk
---

# messages.sendEncryptedFile

Отправляет в секретный чат сообщение с вложенным файлом

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;
---functions---
messages.sendEncryptedFile#5559481d flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes file:InputEncryptedFile = messages.SentEncryptedMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Следует ли отправить файл без уведомления</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Идентификатор секретного чата</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:random_id] Уникальный идентификатор сообщения на стороне клиента, необходимый для предотвращения повторной отправки сообщения. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>TL-сериализация типа <a href="/type/DecryptedMessage">DecryptedMessage</a>, зашифрованная ключом, выработанным при создании чата</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedFile">InputEncryptedFile</a></td><td>Вложенный файл для секретного чата</td></tr></tbody></table>

### Результат

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>DATA_TOO_LONG</td><td>Слишком длинные данные.</td></tr><tr><td>400</td><td>ENCRYPTION_DECLINED</td><td>Секретный чат был отклонён.</td></tr><tr><td>400</td><td>FILE_EMTPY</td><td>Передан пустой файл.</td></tr><tr><td>400</td><td>MD5_CHECKSUM_INVALID</td><td>Контрольные суммы MD5 не совпадают.</td></tr><tr><td>400</td><td>MSG_WAIT_FAILED</td><td>Вызов, окончания которого ожидал этот запрос, вернул ошибку.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [DecryptedMessage](/type/DecryptedMessage/)

Объект описывает содержимое зашифрованного сообщения.
