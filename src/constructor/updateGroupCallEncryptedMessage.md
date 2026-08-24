---
title: "updateGroupCallEncryptedMessage"
original: "https://core.telegram.org/constructor/updateGroupCallEncryptedMessage"
section: ref
kind: constructor
description: "В конференц-звонке получено новое сообщение или эмодзи-реакция со сквозным шифрованием; о процессе расшифровки см. здесь »."
layout: layout.njk
---

# updateGroupCallEncryptedMessage

В конференц-звонке получено новое сообщение или эмодзи-реакция со сквозным шифрованием; о процессе расшифровки см. [здесь »](/api/end-to-end/group-calls/#receiving-and-decrypting-a-message).

```
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Конференц-звонок, получивший зашифрованное сообщение</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>Отправитель, чьим публичным блокчейн-ключом должен проверяться зашифрованный пакет</td></tr><tr><td><strong>encrypted_message</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Полный зашифрованный пакет</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
