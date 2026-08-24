---
title: "messages.readEncryptedHistory"
original: "https://core.telegram.org/method/messages.readEncryptedHistory"
section: ref
kind: method
description: "Отмечает историю сообщений в секретном чате как прочитанную."
layout: layout.njk
---

# messages.readEncryptedHistory

Отмечает историю сообщений в секретном чате как прочитанную.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readEncryptedHistory#7f4b690a peer:InputEncryptedChat max_date:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>[@term:peer] Идентификатор секретного чата</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное значение даты для полученных сообщений в истории</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>Указанный идентификатор чата недействителен.</td></tr><tr><td>400</td><td>MAX_DATE_INVALID</td><td>Указанная максимальная дата недействительна.</td></tr><tr><td>400</td><td>MSG_WAIT_FAILED</td><td>Вызов, окончания которого ожидал этот запрос, вернул ошибку.</td></tr></tbody></table>
