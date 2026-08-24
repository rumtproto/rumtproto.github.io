---
title: "messages.startHistoryImport"
original: "https://core.telegram.org/method/messages.startHistoryImport"
section: ref
kind: method
description: "Завершить процесс импорта истории, импортировав все сообщения в чат."
layout: layout.njk
---

# messages.startHistoryImport

Завершить [процесс импорта истории](/api/import/), импортировав все сообщения в чат.  
Вызывается только после инициализации импорта методом [messages.initHistoryImport](/method/messages.initHistoryImport/) и загрузки всех файлов методом [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.startHistoryImport#b43df344 peer:InputPeer import_id:long = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат Telegram, в который следует <a href="/api/import">импортировать сообщения, подробнее »</a></td></tr><tr><td><strong>import_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор сессии импорта истории, возвращённый методом <a href="/method/messages.initHistoryImport">messages.initHistoryImport</a>.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>IMPORT_ID_INVALID</td><td>Указанный идентификатор импорта недействителен.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.

#### [messages.initHistoryImport](/method/messages.initHistoryImport/)

Импортировать историю переписки из стороннего мессенджера в определённый чат Telegram; [подробнее об импортированных чатах см. здесь »](/api/import/).

#### [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/)

Загрузить медиафайл, связанный с [импортированным чатом; подробнее см. здесь »](/api/import/).
