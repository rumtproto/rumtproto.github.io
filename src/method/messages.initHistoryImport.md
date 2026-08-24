---
title: "messages.initHistoryImport"
original: "https://core.telegram.org/method/messages.initHistoryImport"
section: ref
kind: method
description: "Импортировать историю переписки из стороннего мессенджера в определённый чат Telegram; подробнее об импортированных чатах см. здесь »."
layout: layout.njk
---

# messages.initHistoryImport

Импортировать историю переписки из стороннего мессенджера в определённый чат Telegram; [подробнее об импортированных чатах см. здесь »](/api/import/).

```
messages.historyImport#1662af0b id:long = messages.HistoryImport;
---functions---
messages.initHistoryImport#34090c3b peer:InputPeer file:InputFile media_count:int = messages.HistoryImport;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат Telegram, в который <a href="/api/import">следует импортировать историю сообщений</a>.</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td>Файл с сообщениями для импорта.</td></tr><tr><td><strong>media_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество медиафайлов, связанных с чатом, которые будут загружены с помощью <a href="/method/messages.uploadImportedMedia">messages.uploadImportedMedia</a>.</td></tr></tbody></table>

### Результат

[messages.HistoryImport](/type/messages.HistoryImport/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>IMPORT_FILE_INVALID</td><td>Указанный файл экспорта чата недействителен.</td></tr><tr><td>400</td><td>IMPORT_FORMAT_DATE_INVALID</td><td>В файле импорта указана недопустимая дата.</td></tr><tr><td>400</td><td>IMPORT_FORMAT_UNRECOGNIZED</td><td>Указанный файл экспорта чата был выгружен из неподдерживаемого мессенджера.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>406</td><td>PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_%dMIN</td><td>Импорт для этого чата уже выполняется, подождите %d минут перед началом нового.</td></tr><tr><td>400</td><td>USER_NOT_MUTUAL_CONTACT</td><td>Указанный пользователь не является взаимным контактом.</td></tr></tbody></table>

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.

#### [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/)

Загрузить медиафайл, связанный с [импортированным чатом; подробнее см. здесь »](/api/import/).
