---
title: "inputEncryptedChat"
original: "https://core.telegram.org/constructor/inputEncryptedChat"
section: ref
kind: constructor
description: "Чат со сквозным шифрованием."
layout: layout.njk
---

# inputEncryptedChat

[Чат со сквозным шифрованием](/api/end-to-end/).

```
inputEncryptedChat#f141b5e1 chat_id:int access_hash:long = InputEncryptedChat;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор чата</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа из <a href="/constructor/encryptedChat">encryptedChat</a>, <a href="/constructor/encryptedChatWaiting">encryptedChatWaiting</a> или <a href="/constructor/encryptedChatRequested">encryptedChatRequested</a></td></tr></tbody></table>

### Тип

[InputEncryptedChat](/type/InputEncryptedChat/)

### Связанные страницы

#### [encryptedChat](/constructor/encryptedChat/)

Зашифрованный чат

#### [encryptedChatWaiting](/constructor/encryptedChatWaiting/)

Чат ожидает подтверждения от второго участника.

#### [encryptedChatRequested](/constructor/encryptedChatRequested/)

Запрос на создание секретного чата.

#### [Сквозное шифрование, секретные чаты](/api/end-to-end/)

Новая возможность для обмена сообщениями со сквозным шифрованием.
