---
title: "messages.SentEncryptedMessage"
original: "https://core.telegram.org/type/messages.SentEncryptedMessage"
section: ref
kind: type
description: "Содержит информацию о сообщении, отправленном в секретный чат."
layout: layout.njk
---

# Messages.SentEncryptedMessage

Содержит информацию о сообщении, отправленном в секретный чат.

```
messages.sentEncryptedMessage#560f8935 date:int = messages.SentEncryptedMessage;
messages.sentEncryptedFile#9493ff32 date:int file:EncryptedFile = messages.SentEncryptedMessage;

---functions---

messages.sendEncrypted#44fa7a15 flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
messages.sendEncryptedFile#5559481d flags:# silent:flags.0?true peer:InputEncryptedChat random_id:long data:bytes file:InputEncryptedFile = messages.SentEncryptedMessage;
messages.sendEncryptedService#32d439a4 peer:InputEncryptedChat random_id:long data:bytes = messages.SentEncryptedMessage;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messages.sentEncryptedMessage">messages.sentEncryptedMessage</a></td><td>Сообщение без вложенных файлов, отправленное в зашифрованный файл.</td></tr><tr><td><a href="/constructor/messages.sentEncryptedFile">messages.sentEncryptedFile</a></td><td>Сообщение с вложенным файлом, отправленное в защищённый чат</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/messages.sendEncrypted">messages.sendEncrypted</a></td><td>Отправляет текстовое сообщение в секретный чат.</td></tr><tr><td><a href="/method/messages.sendEncryptedFile">messages.sendEncryptedFile</a></td><td>Отправляет в секретный чат сообщение с вложенным файлом</td></tr><tr><td><a href="/method/messages.sendEncryptedService">messages.sendEncryptedService</a></td><td>Отправляет сервисное сообщение в секретный чат.</td></tr></tbody></table>
