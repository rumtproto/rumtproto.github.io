---
title: "messages.acceptEncryption"
original: "https://core.telegram.org/method/messages.acceptEncryption"
section: ref
kind: method
description: "Подтверждает создание секретного чата"
layout: layout.njk
---

# messages.acceptEncryption

Подтверждает создание секретного чата

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;
---functions---
messages.acceptEncryption#3dbc0415 peer:InputEncryptedChat g_b:bytes key_fingerprint:long = EncryptedChat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Идентификатор секретного чата</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><code>B = g ^ b mod p</code>, см. <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Википедию</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>64-битный отпечаток полученного ключа</td></tr></tbody></table>

### Результат

[EncryptedChat](/type/EncryptedChat/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_ACCEPTED</td><td>Секретный чат уже принят.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_DECLINED</td><td>Секретный чат уже был отклонён.</td></tr></tbody></table>
