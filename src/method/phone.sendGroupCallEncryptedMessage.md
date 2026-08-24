---
title: "phone.sendGroupCallEncryptedMessage"
original: "https://core.telegram.org/method/phone.sendGroupCallEncryptedMessage"
section: ref
kind: method
description: "Отправить сообщение или эмодзи-реакцию со сквозным шифрованием всем участникам конференц-звонка. Этот метод можно использовать только с конференциями; о процессе сериализации и…"
layout: layout.njk
---

# phone.sendGroupCallEncryptedMessage

Отправить сообщение или эмодзи-реакцию со сквозным шифрованием всем участникам конференц-звонка. Этот метод можно использовать только с конференциями; о процессе сериализации и шифрования см. [здесь »](/api/end-to-end/group-calls/#conference-in-call-messages).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
phone.sendGroupCallEncryptedMessage#e5afa56d call:InputGroupCall encrypted_message:bytes = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Конференц-звонок, который должен получить зашифрованное сообщение или реакцию</td></tr><tr><td><strong>encrypted_message</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Полный пакет с зашифрованным сообщением или реакцией, сформированный так, как описано <a href="/api/end-to-end/group-calls#encrypting-and-sending-a-message">здесь »</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.
