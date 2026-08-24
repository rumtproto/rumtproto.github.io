---
title: "EncryptedChat"
original: "https://core.telegram.org/type/EncryptedChat"
section: ref
kind: type
description: "Объект содержит информацию о секретном чате."
layout: layout.njk
---

# EncryptedChat

Объект содержит информацию о секретном чате.

```
encryptedChatEmpty#ab7ec0a0 id:int = EncryptedChat;
encryptedChatWaiting#66b25953 id:int access_hash:long date:int admin_id:long participant_id:long = EncryptedChat;
encryptedChatRequested#48f1d94c flags:# folder_id:flags.0?int id:int access_hash:long date:int admin_id:long participant_id:long g_a:bytes = EncryptedChat;
encryptedChat#61f0d4c7 id:int access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long = EncryptedChat;
encryptedChatDiscarded#1e1c7c45 flags:# history_deleted:flags.0?true id:int = EncryptedChat;

---functions---

messages.requestEncryption#f64daf43 user_id:InputUser random_id:int g_a:bytes = EncryptedChat;
messages.acceptEncryption#3dbc0415 peer:InputEncryptedChat g_b:bytes key_fingerprint:long = EncryptedChat;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedChatEmpty">encryptedChatEmpty</a></td><td>Пустой конструктор.</td></tr><tr><td><a href="/constructor/encryptedChatWaiting">encryptedChatWaiting</a></td><td>Чат ожидает подтверждения от второго участника.</td></tr><tr><td><a href="/constructor/encryptedChatRequested">encryptedChatRequested</a></td><td>Запрос на создание секретного чата.</td></tr><tr><td><a href="/constructor/encryptedChat">encryptedChat</a></td><td>Зашифрованный чат</td></tr><tr><td><a href="/constructor/encryptedChatDiscarded">encryptedChatDiscarded</a></td><td>Отменённый или удалённый чат.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.requestEncryption">messages.requestEncryption</a></td><td>Отправляет пользователю запрос на создание секретного чата.</td></tr><tr><td><a href="/method/messages.acceptEncryption">messages.acceptEncryption</a></td><td>Подтверждает создание секретного чата</td></tr></tbody></table>
