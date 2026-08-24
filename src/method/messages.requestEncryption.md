---
title: "messages.requestEncryption"
original: "https://core.telegram.org/method/messages.requestEncryption"
section: ref
kind: method
description: "Отправляет пользователю запрос на создание секретного чата."
layout: layout.njk
---

# messages.requestEncryption

Отправляет пользователю запрос на создание секретного чата.

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
---functions---
messages.requestEncryption#f64daf43 user_id:InputUser random_id:int g_a:bytes = EncryptedChat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:random_id] Уникальный идентификатор запроса на стороне клиента, необходимый для предотвращения повторной отправки. Он же служит идентификатором чата. Подробнее о дедупликации по случайному идентификатору и о сопоставлении updateMessageID см. <a href="/api/updates#updatemessageid-updates">здесь »</a>.</td></tr><tr><td><strong>g_a</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><code>A = g ^ a mod p</code>, см. <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Википедию</a></td></tr></tbody></table>

### Результат

[EncryptedChat](/type/EncryptedChat/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>DH_G_A_INVALID</td><td>Недействительное значение g_a.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>Указанный пользователь был удалён.</td></tr><tr><td>400</td><td>RANDOM_ID_DUPLICATE</td><td>Вы передали случайный идентификатор, который уже использовался.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>Этот пользователь вас заблокировал.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
